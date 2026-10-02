import { ImageResponse } from "next/og";
import { site } from "@/config/site";

export const alt = "KKN Travels: visas and flights, sorted at one desk in Dubai";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The share card is typographic and set in Latin for both editions: the
// default renderer font has no Arabic glyphs.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#ebe7e2",
          color: "#171b24",
        }}
      >
        <div style={{ display: "flex", fontSize: 44, fontWeight: 700, color: "#640b2c" }}>{site.name}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 700, lineHeight: 1.1, maxWidth: 940 }}>
            Visas and flights, sorted at one desk in Dubai.
          </div>
          <div style={{ display: "flex", fontSize: 32, color: "#5e6167" }}>
            Visas, flights, typing, holidays and Umrah
          </div>
        </div>
        <div style={{ display: "flex", height: 14, width: 180, background: "#640b2c", borderRadius: 999 }} />
      </div>
    ),
    size,
  );
}
