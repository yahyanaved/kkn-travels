// Full-page screenshots through the Chrome DevTools Protocol (no dependencies).
// usage: node shot.mjs <url> <out.png> <width> <height> [--mobile] [--viewport] [--scale=N] [--scroll=Y]
import { spawn } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const [url, out, w, h, ...flags] = process.argv.slice(2);
const width = Number(w), height = Number(h);
const mobile = flags.includes("--mobile");
const viewportOnly = flags.includes("--viewport");
const scale = Number((flags.find((f) => f.startsWith("--scale=")) ?? "--scale=1").split("=")[1]);
const scrollY = Number((flags.find((f) => f.startsWith("--scroll=")) ?? "--scroll=0").split("=")[1]);
const hover = (flags.find((f) => f.startsWith("--hover=")) ?? "").split("=")[1];
const port = 9300 + Math.floor(Math.random() * 400);

const chrome = spawn(
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  [
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    `--remote-debugging-port=${port}`,
    `--user-data-dir=${mkdtempSync(join(tmpdir(), "shot-"))}`,
    "about:blank",
  ],
  { stdio: "ignore" },
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function target() {
  for (let i = 0; i < 50; i++) {
    try {
      const list = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
      const page = list.find((t) => t.type === "page");
      if (page) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(200);
  }
  throw new Error("chrome did not start");
}

try {
  const ws = new WebSocket(await target());
  await new Promise((r) => (ws.onopen = r));
  let id = 0;
  const pending = new Map();
  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg.result);
      pending.delete(msg.id);
    }
  };
  const send = (method, params = {}) =>
    new Promise((resolve) => {
      pending.set(++id, resolve);
      ws.send(JSON.stringify({ id, method, params }));
    });

  await send("Page.enable");
  await send("Emulation.setDeviceMetricsOverride", { width, height, deviceScaleFactor: scale, mobile });
  if (mobile) await send("Emulation.setTouchEmulationEnabled", { enabled: true });
  await send("Page.navigate", { url });
  await sleep(3500);
  // Let lazy images below the fold load, then settle at the requested scroll position.
  await send("Runtime.evaluate", {
    expression: `(async () => { const h = document.documentElement.scrollHeight; for (let y = 0; y < h; y += 600) { window.scrollTo(0, y); await new Promise(r => setTimeout(r, 120)); } window.scrollTo(0, ${scrollY}); })()`,
    awaitPromise: true,
  });
  await sleep(2500);
  if (hover) {
    const [hx, hy] = hover.split(",").map(Number);
    await send("Input.dispatchMouseEvent", { type: "mouseMoved", x: hx, y: hy });
    await sleep(1500);
  }
  const metrics = await send("Page.getLayoutMetrics");
  const full = metrics.cssContentSize ?? metrics.contentSize;
  const clip = viewportOnly
    ? { x: 0, y: scrollY, width, height, scale: 1 }
    : { x: 0, y: 0, width: full.width, height: full.height, scale: 1 };
  const shot = await send("Page.captureScreenshot", { format: "png", clip, captureBeyondViewport: true });
  writeFileSync(out, Buffer.from(shot.data, "base64"));
  console.log(`${out} ${Math.round(clip.width * scale)}x${Math.round(clip.height * scale)} (content ${full.width}x${full.height})`);
  ws.close();
} finally {
  chrome.kill();
}
