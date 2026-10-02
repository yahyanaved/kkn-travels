import { notFound } from "next/navigation";

// Any address that matches no page lands here, so the 404 keeps the site's header, footer and language.
export default function CatchAll() {
  notFound();
}
