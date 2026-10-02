import type { Service } from "./types";

/*
 * English service copy. Fees, processing times and eligibility rules are set
 * by the authorities and change often, so the copy never quotes them. Review
 * every page against what the office actually offers before launch.
 */
export const servicesEn: Service[] = [
  {
    slug: "uae-visa-services",
    label: "Visas",
    short: "Visit, family and residence",
    nav: "Visas",
    name: "UAE visa services",
    title: "UAE visit, family and residence visas",
    metaTitle: "UAE Visa Services in Dubai: Visit, Family and Residence Visas",
    metaDescription:
      "Visit visas, family and residence visas, renewals, extensions and cancellations handled at one desk in Dubai. Send your passport copy on WhatsApp to start.",
    summary: "Visit visas, family and residence visas, renewals, extensions and cancellations.",
    whoFor: "Residents sponsoring family, and visitors coming to the UAE",
    intro: [
      "Most people come to us with one of two errands: someone is coming to visit, or someone is staying. We prepare the application, check the documents before anything is submitted, and tell you where it stands until the visa is issued.",
      "Fees and processing times are set by the UAE authorities and change during the year. We give you today's figure in writing before you pay.",
    ],
    itemsHeading: "Visas we handle",
    items: [
      {
        name: "Visit and tourist visas",
        detail: "Short-stay visas for family, friends and tourists coming to the UAE. Tell us how long they plan to stay and we confirm which visa fits.",
      },
      {
        name: "Visit visa extension",
        detail: "Extending a visit visa from inside the country, where the visa type allows it.",
      },
      {
        name: "Family residence visa",
        detail: "Sponsoring a spouse, children or parents: entry permit, medical, Emirates ID and visa stamping, in order.",
      },
      {
        name: "Residence visa renewal",
        detail: "Renewing your own or your family's residence before it expires, including medical and Emirates ID renewal.",
      },
      {
        name: "Visa status change",
        detail: "Moving from a visit visa to a residence visa without leaving the country, where it is permitted.",
      },
      {
        name: "Visa cancellation",
        detail: "Cancelling a residence or dependant visa cleanly, so nothing blocks the next application.",
      },
    ],
    bringHeading: "What to bring for a visit visa",
    bring: [
      "A clear colour copy of the visitor's passport, valid for at least six months",
      "A recent passport-size photo with a white background",
      "For a family visit: the host's Emirates ID and residence visa copy",
      "Travel dates, if you already know them",
    ],
    bringNote:
      "Residence and family visas need more paperwork, such as a salary certificate, tenancy contract and attested certificates. Tell us your case and we send the exact list.",
    steps: [
      { title: "Tell us who is travelling", detail: "Nationality, where they are now, and how long they plan to stay." },
      { title: "Send the documents", detail: "Photos on WhatsApp are enough to start. We check them before anything is submitted." },
      { title: "We submit and follow up", detail: "You get the application reference and an update whenever the status changes." },
      { title: "Receive the visa", detail: "The visa arrives as a PDF you can forward to the traveller and the airline." },
    ],
    faqs: [
      {
        q: "How long does a UAE visit visa take?",
        a: "It depends on the nationality, the visa type and how busy the authorities are. We tell you the current timing when you enquire, and we do not promise a date we cannot control.",
      },
      {
        q: "Can I sponsor my parents or my wife on my own visa?",
        a: "Often yes. It depends on your salary, your accommodation and your visa category. Send us your Emirates ID and salary details and we tell you what applies to you.",
      },
      {
        q: "Can a visit visa be extended without leaving the UAE?",
        a: "Some visit visas can be extended from inside the country. Send us a copy of the current visa and we check before it expires.",
      },
      {
        q: "Do you guarantee the visa will be approved?",
        a: "No one can. Approval is decided by the immigration authorities. Our job is to submit a complete, correct application so it is not delayed or rejected for a paperwork reason.",
      },
    ],
  },
  {
    slug: "international-visa-assistance",
    label: "Visas abroad",
    short: "Schengen, UK, US and more",
    nav: "Visas abroad",
    name: "Visas for travel abroad",
    title: "Schengen, UK, US and other visas for UAE residents",
    metaTitle: "Schengen, UK and US Visa Assistance in Dubai for UAE Residents",
    metaDescription:
      "Visa assistance in Dubai for UAE residents travelling abroad: Schengen, UK, USA, Canada and more. Forms, appointments, document checks and travel bookings.",
    summary: "Forms, appointments and document checks for Schengen, UK, US, Canada and other visas.",
    whoFor: "UAE residents travelling abroad",
    intro: [
      "Embassy applications fail on details: a missing bank stamp, an insurance policy that starts a day late, a form answered the wrong way. We put the file together properly, book the appointment and get you to the visa centre with everything in hand.",
      "The embassy or consulate makes the decision and sets the fee. We make sure what they receive is complete.",
    ],
    itemsHeading: "What we help with",
    items: [
      {
        name: "Schengen visas",
        detail: "Tourist, family visit and business applications for European Schengen countries.",
      },
      {
        name: "United Kingdom",
        detail: "Standard visitor visa applications and appointment booking.",
      },
      {
        name: "United States and Canada",
        detail: "Visitor visa forms, fee payment guidance and interview or biometrics appointments.",
      },
      {
        name: "Other destinations",
        detail: "Asia, Africa, Australia and the wider Gulf. Ask about your destination and passport.",
      },
      {
        name: "Supporting bookings",
        detail: "Flight reservations, hotel bookings and travel insurance that match your application dates.",
      },
    ],
    bringHeading: "What to bring",
    bring: [
      "Your original passport, with at least six months' validity and blank pages",
      "A UAE residence visa and Emirates ID valid well beyond your return date",
      "Recent bank statements, stamped by the bank where the embassy asks for it",
      "A salary certificate or no-objection letter from your employer, or your trade licence if you own the business",
      "Passport photos in the size the embassy specifies",
    ],
    bringNote:
      "Each embassy has its own list and it changes. We send you the current checklist for your destination before you collect anything.",
    steps: [
      { title: "Tell us where and when", detail: "Destination, travel dates and the passport you hold." },
      { title: "Get your checklist", detail: "We send the current document list for that embassy and your situation." },
      { title: "We prepare the file", detail: "Forms completed, supporting bookings arranged and the appointment booked." },
      { title: "Attend your appointment", detail: "You go to the visa centre with a complete file. We track the result with you." },
    ],
    faqs: [
      {
        q: "How early should I apply for a Schengen visa from Dubai?",
        a: "As early as the rules allow. Appointments in Dubai fill up weeks ahead in busy seasons, so contact us as soon as you have rough dates.",
      },
      {
        q: "Can you guarantee an appointment or an approval?",
        a: "No. Appointment slots are released by the visa centres and the decision belongs to the embassy. We book the earliest slot we can find and submit a complete application.",
      },
      {
        q: "Do I have to buy my flight before applying?",
        a: "Most embassies ask for a reservation, not a paid ticket. We arrange a reservation that fits the application and issue the ticket once your visa is granted.",
      },
    ],
  },
  {
    slug: "flight-tickets",
    label: "Flights",
    short: "Any airline, any route",
    nav: "Flights",
    name: "Flight tickets",
    title: "Airline tickets from Dubai and across the UAE",
    metaTitle: "Flight Ticket Booking in Dubai: Airline Tickets and Group Fares",
    metaDescription:
      "Book airline tickets in Dubai with a person who checks the fare rules for you: one-way, return and multi-city tickets, group bookings, date changes and reissues.",
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
    title: "Typing and application forms in Dubai",
    metaTitle: "Typing Services in Dubai: Emirates ID, Medical and Visa Applications",
    metaDescription:
      "Typing services in Dubai for Emirates ID, medical fitness and visa applications, plus letters and forms in Arabic and English, checked before they are submitted.",
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
    metaTitle: "Holiday Packages and Umrah Trips from Dubai, Hotels and Travel Insurance",
    metaDescription:
      "Holiday packages and Umrah trips from Dubai planned at one desk: flights, hotels, transfers, visas and travel insurance arranged together and explained clearly.",
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
