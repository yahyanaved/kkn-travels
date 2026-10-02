/**
 * Business details used across the site, the footer, the enquiry form and
 * the structured data. Everything marked PLACEHOLDER is dummy data: replace
 * it before launch.
 */
export const site = {
  name: "KKN Travels",
  nameAr: "كي كي إن للسفريات",

  /** PLACEHOLDER: set NEXT_PUBLIC_SITE_URL to the real domain in production. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kkntravels.example").replace(/\/$/, ""),

  /**
   * Search engines are told not to index the site until this is true, so the
   * dummy phone number and address below never end up in search results.
   * Set NEXT_PUBLIC_ALLOW_INDEXING=true once the real details are in.
   */
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true",

  /**
   * Flip these to true once the real values are in below. Until then the
   * site says the hours are to be confirmed and leaves hours and map
   * coordinates out of the structured data.
   */
  confirmed: { hours: false as boolean, location: false as boolean },

  /** PLACEHOLDER contact details. */
  phone: { display: "+971 4 000 0000", href: "tel:+97140000000" },
  mobile: { display: "+971 50 000 0000", href: "tel:+971500000000" },
  /** Digits only, international format, no plus sign. */
  whatsapp: "971500000000",
  email: "info@kkntravels.example",

  /** PLACEHOLDER address. */
  address: {
    en: { line1: "Office 000, Example Building", line2: "Dubai, United Arab Emirates" },
    ar: { line1: "مكتب 000، مبنى المثال", line2: "دبي، الإمارات العربية المتحدة" },
    locality: "Dubai",
    region: "Dubai",
    country: "AE",
    /** PLACEHOLDER: link to the real Google Maps listing. */
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Dubai",
    geo: { latitude: 25.2048, longitude: 55.2708 },
  },

  /** PLACEHOLDER opening hours. `schema` feeds the structured data. */
  hours: {
    en: [
      { days: "Monday to Saturday", time: "9:00 am to 8:00 pm" },
      { days: "Sunday", time: "Closed" },
    ],
    ar: [
      { days: "من الاثنين إلى السبت", time: "9:00 صباحاً إلى 8:00 مساءً" },
      { days: "الأحد", time: "مغلق" },
    ],
    schema: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
  },
} as const;

/** Builds a wa.me link that opens a chat with the message already typed. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
