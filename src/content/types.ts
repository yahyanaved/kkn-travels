/** Every service, in the order it is shown. Visas lead. */
export const serviceSlugs = [
  "international-visa-assistance",
  "uae-visa-services",
  "flight-tickets",
  "hotels-and-travel-insurance",
  "document-attestation",
  "typing-services",
  "holidays-and-umrah",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

/**
 * Services that are written but not offered right now. A hidden service has
 * no page, no links and no sitemap entry. Empty this list to bring it back,
 * then restore its mentions in the page copy.
 */
export const hiddenServices: readonly ServiceSlug[] = ["document-attestation"];

export const destinationIds = [
  "dubai",
  "istanbul",
  "paris",
  "maldives",
  "makkah",
  "london",
  "dubai-museum",
  "dubai-creek",
  "santorini",
  "new-york",
  "toronto",
  "sydney",
] as const;

export type DestinationId = (typeof destinationIds)[number];

export type Faq = { q: string; a: string };

export type Service = {
  slug: ServiceSlug;
  /** Title used in the home page service index. */
  label: string;
  /** A few words under the title in the service index. */
  short: string;
  /** One-word label used in navigation. */
  nav: string;
  /** Name used in lists and structured data. */
  name: string;
  /** Page heading. */
  title: string;
  metaTitle: string;
  metaDescription: string;
  /** One sentence for lists and cards. */
  summary: string;
  /** Who usually asks for this. */
  whoFor: string;
  intro: string[];
  /** Optional short facts shown before the list, for example what every application includes. */
  highlightsHeading?: string;
  highlights?: { title: string; detail: string }[];
  itemsHeading: string;
  /** `id` makes the item linkable (#id); `tag` is a short status shown beside the name. */
  items: { name: string; detail: string; id?: string; tag?: string }[];
  bringHeading: string;
  bring: string[];
  bringNote: string;
  steps: { title: string; detail: string }[];
  faqs: Faq[];
};

export type Dictionary = {
  meta: {
    siteTitle: string;
    titleTemplate: string;
    homeTitle: string;
    homeDescription: string;
    servicesTitle: string;
    servicesDescription: string;
    aboutTitle: string;
    aboutDescription: string;
    contactTitle: string;
    contactDescription: string;
    privacyTitle: string;
    privacyDescription: string;
    notFoundTitle: string;
  };
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    whatsapp: string;
    whatsappShort: string;
    call: string;
    menu: string;
    close: string;
    skip: string;
    switchTo: string;
    primary: string;
  };
  announce: { text: string; cta: string };
  hero: {
    headline: string;
    lede: string;
    call: string;
    stripLabel: string;
  };
  destinations: Record<DestinationId, { name: string; caption: string; alt: string }>;
  enquiry: {
    heading: string;
    need: string;
    needOptions: string[];
    name: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    details: string;
    detailsPlaceholder: string;
    send: string;
    nameError: string;
    phoneError: string;
    note: string;
    messageIntro: string;
    messageName: string;
    messagePhone: string;
    messageDetails: string;
  };
  home: {
    servicesHeading: string;
    servicesIntro: string;
    visasHeading: string;
    visasIntro: string;
    visasCta: string;
    uaeHeading: string;
    uaeIntro: string;
    uaeCta: string;
    bringHeading: string;
    bringIntro: string;
    bringCta: string;
    stepsHeading: string;
    stepsIntro: string;
    steps: { title: string; detail: string }[];
    audiencesHeading: string;
    audiences: { name: string; detail: string; slugs: ServiceSlug[] }[];
    faqHeading: string;
    faqIntro: string;
    faqs: Faq[];
    visitHeading: string;
    visitIntro: string;
  };
  services: {
    heading: string;
    intro: string;
    whoFor: string;
    stepsHeading: string;
    faqHeading: string;
    askHeading: string;
    askIntro: string;
    otherHeading: string;
    seeService: string;
  };
  about: {
    heading: string;
    intro: string[];
    principlesHeading: string;
    principles: { title: string; detail: string }[];
    scopeHeading: string;
    scope: string[];
  };
  contact: {
    heading: string;
    intro: string;
    formHeading: string;
    detailsHeading: string;
    whatsapp: string;
    phone: string;
    mobile: string;
    email: string;
    address: string;
    hours: string;
    hoursPending: string;
    directions: string;
  };
  privacy: {
    heading: string;
    updated: string;
    sections: { title: string; body: string[] }[];
  };
  footer: {
    tagline: string;
    servicesHeading: string;
    companyHeading: string;
    contactHeading: string;
    privacy: string;
    rights: string;
    disclaimer: string;
  };
  notFound: {
    heading: string;
    body: string;
    home: string;
  };
  common: {
    breadcrumb: string;
    breadcrumbHome: string;
    breadcrumbServices: string;
    askOnWhatsApp: string;
    startOnWhatsApp: string;
    callOffice: string;
    getDirections: string;
    serviceEnquiry: string;
  };
};
