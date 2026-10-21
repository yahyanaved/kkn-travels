/**
 * Business details used across the site, the footer, the enquiry form and
 * the structured data. Opening hours are still to be confirmed.
 */
export const site = {
  name: "KKN Travels",
  nameAr: "كي كي إن للسفريات",

  /** The public address. Override with NEXT_PUBLIC_SITE_URL, for example on a preview deployment. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kkn-travels.com").replace(/\/$/, ""),

  /** Search engines may index the site unless NEXT_PUBLIC_ALLOW_INDEXING is set to "false". */
  allowIndexing: process.env.NEXT_PUBLIC_ALLOW_INDEXING !== "false",

  /**
   * Flip these to true once the values below are confirmed. Until then the
   * site says the hours are to be confirmed, and hours and map coordinates
   * stay out of the structured data.
   */
  confirmed: { hours: false as boolean, coordinates: false as boolean },

  /** One number for calls and WhatsApp. */
  phone: { display: "+971 50 642 2967", href: "tel:+971506422967" },
  mobile: { display: "+971 50 642 2967", href: "tel:+971506422967" },
  /** Digits only, international format, no plus sign. */
  whatsapp: "971506422967",
  email: "business@kkn-travels.com",

  address: {
    en: { line1: "Block B, B22-100, SRTI Park", line2: "Sharjah, United Arab Emirates" },
    ar: { line1: "المبنى B، مكتب B22-100، مجمع الشارقة للبحوث والتكنولوجيا والابتكار", line2: "الشارقة، الإمارات العربية المتحدة" },
    locality: "Sharjah",
    region: "Sharjah",
    country: "AE",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Block%20B%2C%20SRTI%20Park%2C%20Sharjah",
    /** Not confirmed yet: kept out of the structured data until confirmed.coordinates is true. */
    geo: { latitude: 0, longitude: 0 },
  },

  /** PLACEHOLDER opening hours, not shown until confirmed.hours is true. `schema` feeds the structured data. */
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
