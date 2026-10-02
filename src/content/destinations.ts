import type { DestinationId, ServiceSlug } from "./types";

/*
 * Destination photographs. These are generated placeholder images, not
 * photographs taken by the business; swap any of them for licensed or
 * owned photography by replacing the file in public/images/destinations.
 */
export type Destination = {
  src: string;
  width: number;
  height: number;
  /** The service this destination links to. */
  slug: ServiceSlug;
  /** Optional tighter framing for the home page strip: a zoom and the point it grows from. */
  frame?: { scale: number; origin: string };
};

export const destinations: Record<DestinationId, Destination> = {
  dubai: { src: "/images/destinations/dubai.jpg", width: 1792, height: 2240, slug: "uae-visa-services" },
  istanbul: { src: "/images/destinations/istanbul.jpg", width: 1792, height: 2240, slug: "flight-tickets" },
  paris: {
    src: "/images/destinations/paris.jpg",
    width: 2336,
    height: 1744,
    slug: "international-visa-assistance",
    frame: { scale: 1.167, origin: "50% 24%" },
  },
  maldives: { src: "/images/destinations/maldives.jpg", width: 1792, height: 2240, slug: "holidays-and-umrah" },
  makkah: { src: "/images/destinations/makkah.jpg", width: 1792, height: 2240, slug: "holidays-and-umrah" },
  london: { src: "/images/destinations/london.jpg", width: 2336, height: 1744, slug: "international-visa-assistance" },
  "dubai-museum": { src: "/images/destinations/dubai-museum.jpg", width: 2336, height: 1744, slug: "typing-services" },
  "dubai-creek": { src: "/images/destinations/dubai-creek.jpg", width: 2336, height: 1744, slug: "typing-services" },
  santorini: {
    src: "/images/destinations/santorini.jpg",
    width: 1792,
    height: 2240,
    slug: "international-visa-assistance",
  },
};

/** The five photographs in the home page strip, in order. The middle one is the wide lead. */
export const stripOrder: DestinationId[] = ["dubai", "istanbul", "paris", "maldives", "makkah"];

/** The photograph shown at the top of each service page. */
export const serviceDestination: Record<ServiceSlug, DestinationId> = {
  "uae-visa-services": "dubai",
  "international-visa-assistance": "london",
  "flight-tickets": "istanbul",
  "document-attestation": "dubai-creek",
  "typing-services": "dubai-museum",
  "holidays-and-umrah": "maldives",
};
