import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: "Visas, airline tickets and documents, sorted at one desk in Dubai.",
    start_url: "/",
    display: "standalone",
    background_color: "#ebe7e2",
    theme_color: "#640b2c",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
