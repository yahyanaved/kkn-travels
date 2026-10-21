import { visaServicesEn } from "./services.visas.en";
import type { Service } from "./types";

/*
 * English service copy. Fees, processing times and eligibility rules are set
 * by the authorities and change often, so the copy never quotes them. Review
 * every page against what the office actually offers before launch.
 */
export const servicesEn: Service[] = [
  ...visaServicesEn,
  {
    slug: "flight-tickets",
    label: "Flights",
    short: "Any airline, any route",
    nav: "Flights",
    name: "Flight tickets",
    title: "Airline tickets from Dubai and across the UAE",
    metaTitle: "Flight Ticket Booking in Sharjah and Dubai: Airline Tickets and Group Fares",
    metaDescription:
      "Book airline tickets in the UAE with a person who checks the fare rules for you: one-way, return and multi-city tickets, group bookings, date changes and reissues.",
    summary: "One-way, return and multi-city tickets, group bookings, date changes and reissues.",
    whoFor: "Anyone flying from or to the UAE",
    intro: [
      "A cheap fare is only cheap if it lets you change the date when your leave moves, and carries the baggage you actually take. We compare the airlines on your route, explain the rules of each fare in plain words, and issue the ticket in the name exactly as it appears on the passport.",
      "If plans change after you have booked, the same desk handles the date change, the refund request or the reissue.",
    ],
    itemsHeading: "What we book",
    items: [
      {
        name: "One-way and return tickets",
        detail: "Home-country trips, annual leave, family visits and business travel on full-service and low-cost airlines.",
      },
      {
        name: "Multi-city itineraries",
        detail: "Several stops on one ticket, timed so connections and visas line up.",
      },
      {
        name: "Group and family bookings",
        detail: "Seats held together for families, company staff and Umrah groups.",
      },
      {
        name: "Date changes and reissues",
        detail: "Changing a booked ticket, including tickets you bought elsewhere where the airline allows it.",
      },
      {
        name: "Extras",
        detail: "Extra baggage, seat selection, meals and travel insurance added to the booking.",
      },
    ],
    bringHeading: "What we need to quote a fare",
    bring: [
      "Where you are flying from and to",
      "Travel dates, and whether they are flexible",
      "The number of adults, children and infants",
      "Each traveller's name exactly as written in the passport",
      "How much baggage you plan to take",
    ],
    bringNote:
      "Fares move during the day. A quote is confirmed only when the ticket is issued, and we tell you how long each fare can be held.",
    steps: [
      { title: "Send your route and dates", detail: "A WhatsApp message is enough." },
      { title: "Compare the options", detail: "We reply with fares, timings, baggage and change rules side by side." },
      { title: "Confirm and pay", detail: "We check the passport names against the booking before issuing." },
      { title: "Get your e-ticket", detail: "It arrives by WhatsApp and email, with the airline booking reference." },
    ],
    faqs: [
      {
        q: "Why book through a desk instead of the airline website?",
        a: "You get one person who compares several airlines, explains the fare rules before you pay, and deals with the airline when a date changes or a flight is cancelled.",
      },
      {
        q: "Can you change a ticket I bought online?",
        a: "Sometimes. It depends on the airline and where the ticket was issued. Send us the booking reference and we tell you what is possible.",
      },
      {
        q: "Can you hold a fare while my visa is processed?",
        a: "Some fares can be held for a short time and some must be issued at once. We tell you which before you decide.",
      },
    ],
  },
  {
    slug: "document-attestation",
    label: "Attestation",
    short: "Certificates and translation",
    nav: "Attestation",
    name: "Document attestation",
    title: "Certificate attestation and legal translation",
    metaTitle: "Document Attestation in Dubai: MOFA, Embassy and Certificate Attestation",
    metaDescription:
      "Certificate attestation in Dubai for degrees, marriage and birth certificates: home-country, embassy and MOFA attestation, plus legal translation into Arabic.",
    summary: "Degree, marriage and birth certificate attestation, MOFA attestation and legal translation.",
    whoFor: "Residents who need documents accepted in the UAE or abroad",
    intro: [
      "A certificate issued in one country is only accepted in another after a chain of stamps, each from the right office in the right order. Miss one and the family visa or the job offer waits. We map the chain for your document, move it through each step, and tell you where it is.",
      "Stamp fees are set by each ministry and embassy. We list them for you before you hand over the original.",
    ],
    itemsHeading: "Documents we attest",
    items: [
      {
        name: "Educational certificates",
        detail: "Degrees, diplomas and transcripts for employment visas, licensing and further study.",
      },
      {
        name: "Marriage certificates",
        detail: "Needed to sponsor a spouse on a family residence visa.",
      },
      {
        name: "Birth certificates",
        detail: "Needed to sponsor children, and for school admission.",
      },
      {
        name: "UAE MOFA attestation",
        detail: "The final Ministry of Foreign Affairs stamp on documents already attested by the UAE embassy abroad.",
      },
      {
        name: "Legal translation",
        detail: "Translation into Arabic or English for documents that have to be submitted to UAE authorities.",
      },
      {
        name: "Commercial documents",
        detail: "Powers of attorney, company papers and certificates of origin.",
      },
    ],
    bringHeading: "What to bring",
    bring: [
      "The original certificate, not a copy",
      "A passport copy of the certificate holder",
      "The country and institution that issued the document",
      "Where the document will be used, and for what",
    ],
    bringNote:
      "Some countries require extra steps at home before the embassy will stamp, such as state or university verification. Tell us where the document was issued and we explain the full chain first.",
    steps: [
      { title: "Show us the document", detail: "A photo on WhatsApp lets us confirm the chain of stamps it needs." },
      { title: "Hand over the original", detail: "You receive a receipt listing what we hold." },
      { title: "We run the chain", detail: "Each step is done in order, and you are told as each stamp is completed." },
      { title: "Collect it", detail: "The attested original comes back to you, ready to submit." },
    ],
    faqs: [
      {
        q: "What is the difference between attestation and an apostille?",
        a: "An apostille is a single stamp accepted between countries that signed the Hague Convention. Documents for use in the UAE are usually legalised through the UAE embassy and then MOFA instead. We tell you which route applies to your document.",
      },
      {
        q: "Do I need to send the original?",
        a: "Yes. The ministries and embassies stamp the original document. We give you a receipt and track it through every step.",
      },
      {
        q: "How long does attestation take?",
        a: "It depends on the issuing country and how many offices are in the chain. We give you a realistic estimate once we have seen the document, not a promise.",
      },
    ],
  },
  {
    slug: "typing-services",
    label: "Typing",
    short: "Government applications",
    nav: "Typing",
    name: "Typing services",
    title: "Typing and application forms in Sharjah",
    metaTitle: "Typing Services in Sharjah: Emirates ID, Medical and Visa Applications",
    metaDescription:
      "Typing services in Sharjah for Emirates ID, medical fitness and visa applications, plus letters and forms in Arabic and English, checked before they are submitted.",
    summary: "Emirates ID, medical and visa application typing, and letters in Arabic and English.",
    whoFor: "Residents and employers with government forms to file",
    intro: [
      "Government applications are rejected for small reasons: a name spelled differently from the passport, the wrong profession code, a photo that does not meet the standard. We type the application correctly the first time and check it against your documents before it goes in.",
      "Where a service must be submitted by an authorised government service centre, we prepare the paperwork and tell you exactly where to take it.",
    ],
    itemsHeading: "What we type",
    items: [
      {
        name: "Emirates ID applications",
        detail: "New applications, renewals and replacements for lost or damaged cards.",
      },
      {
        name: "Medical fitness applications",
        detail: "The application you need before the medical test for a residence visa.",
      },
      {
        name: "Visa application forms",
        detail: "Entry permit, residence, renewal and cancellation forms for individuals and families.",
      },
      {
        name: "Letters and requests",
        detail: "No-objection letters, salary certificates, sponsor letters and formal requests in Arabic and English.",
      },
      {
        name: "Help with Arabic forms",
        detail: "Filling in Arabic forms for customers who do not read Arabic.",
      },
    ],
    bringHeading: "What to bring",
    bring: [
      "Your original passport or a clear copy",
      "Your current visa or entry permit copy",
      "Your Emirates ID, if you already have one",
      "A recent passport photo with a white background",
      "Your UAE mobile number, for the verification messages",
    ],
    bringNote: "Bring the originals if you can, so details are copied exactly.",
    steps: [
      { title: "Tell us the application", detail: "Say what you are applying for and for whom." },
      { title: "Hand over the details", detail: "At the desk or as photos on WhatsApp." },
      { title: "Check it with us", detail: "You read the typed application before it is submitted or printed." },
      { title: "Take the next step", detail: "We tell you where it goes next and what to carry." },
    ],
    faqs: [
      {
        q: "Can I get typing done without visiting the office?",
        a: "For many applications, yes. Send clear photos of the documents on WhatsApp and we send the typed application back to you.",
      },
      {
        q: "Do you type in Arabic?",
        a: "Yes. Applications and letters are typed in Arabic and English as the authority requires.",
      },
      {
        q: "What if the application is rejected?",
        a: "We look at the reason the authority gives, tell you what has to change, and prepare the corrected application with you.",
      },
    ],
  },
  {
    slug: "holidays-and-umrah",
    label: "Holidays and Umrah",
    short: "Packages, hotels, insurance",
    nav: "Holidays",
    name: "Holidays and Umrah",
    title: "Holiday packages, Umrah trips and hotel bookings",
    metaTitle: "Holiday Packages and Umrah Trips from the UAE, Hotels and Travel Insurance",
    metaDescription:
      "Holiday packages and Umrah trips from the UAE planned at one desk: flights, hotels, transfers, visas and travel insurance arranged together and explained clearly.",
    summary: "Holiday packages, Umrah trips, hotel bookings and travel insurance.",
    whoFor: "Families and groups planning a trip",
    intro: [
      "A trip has four moving parts: the visa, the flight, the room and the transfer between them. When they are booked in four places, one change breaks the rest. We plan them as one booking, around your dates and your budget.",
      "You get a written itinerary with what is included and what is not, before you pay anything.",
    ],
    itemsHeading: "What we arrange",
    items: [
      {
        name: "Holiday packages",
        detail: "Flights, hotels and transfers for short breaks and family holidays from the UAE.",
      },
      {
        name: "Umrah trips",
        detail: "Visa, flights, hotels in Makkah and Madinah, and ground transport, arranged for individuals, families and groups.",
      },
      {
        name: "Hotel bookings",
        detail: "Rooms in the UAE and abroad, including bookings that support a visa application.",
      },
      {
        name: "Travel insurance",
        detail: "Policies that meet embassy requirements and cover the dates you actually travel.",
      },
      {
        name: "Airport transfers",
        detail: "Pick-up and drop-off arranged with the rest of the trip.",
      },
    ],
    bringHeading: "What we need to plan a trip",
    bring: [
      "Where you want to go, or the kind of trip you have in mind",
      "Your dates and how flexible they are",
      "The number of travellers and the ages of any children",
      "A budget range",
      "Passport copies, so we can check visa requirements",
    ],
    bringNote: "For Umrah, tell us the nationality and residence status of every traveller, as the visa route depends on both.",
    steps: [
      { title: "Tell us the trip", detail: "Destination, dates, travellers and budget." },
      { title: "Review the itinerary", detail: "We send options with what is included, written out." },
      { title: "Confirm and pay", detail: "We book flights, rooms and transfers together." },
      { title: "Travel with one contact", detail: "Vouchers, tickets and one number to message if something changes." },
    ],
    faqs: [
      {
        q: "Can you arrange the visa as part of the package?",
        a: "Yes, where the destination requires one. We check the visa rules for every traveller's passport before you commit to dates.",
      },
      {
        q: "Can UAE residents travel for Umrah?",
        a: "Yes. The visa route depends on your nationality and residence status. Tell us both and we explain what you need.",
      },
      {
        q: "Can I book just a hotel, without flights?",
        a: "Yes. We book hotels on their own, including the confirmed bookings some embassies ask for.",
      },
    ],
  },
];
