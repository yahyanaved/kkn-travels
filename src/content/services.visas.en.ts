import type { Service } from "./types";

/*
 * The visa services, which lead the site, and the bookings that support a
 * visa file. Embassy fees, decision times and eligibility rules are not
 * quoted: they belong to the authorities and change often.
 */
export const visaServicesEn: Service[] = [
  {
    slug: "international-visa-assistance",
    label: "Visas abroad",
    short: "Schengen, UK, USA, Canada, Australia",
    nav: "Visas abroad",
    name: "Visas for travel abroad",
    title: "Visas for Schengen, UK, USA, Canada, Australia and more",
    metaTitle: "Visa Services in Sharjah and Dubai: Schengen, UK, USA, Canada and Australia Visas",
    metaDescription:
      "Visa help in Sharjah and Dubai for UAE residents: Schengen, UK, USA, Canada, Australia and more. Early appointments, quick filing, plus flight, hotel and insurance bookings.",
    summary:
      "Schengen, UK, USA, Canada, Australia and other visas: forms, early appointments, document checks and supporting bookings.",
    whoFor: "UAE residents travelling abroad",
    intro: [
      "Embassy applications fail on details: a missing bank stamp, an insurance policy that starts a day late, a form answered the wrong way. We put the file together properly, book the appointment and get you to the visa centre with everything in hand.",
      "The embassy or consulate makes the decision and sets the fee. We make sure what they receive is complete.",
    ],
    highlightsHeading: "What comes with every application",
    highlights: [
      {
        title: "Early appointments",
        detail: "We watch the visa centres for the earliest slot your dates allow and book it for you.",
      },
      {
        title: "Quick processing",
        detail:
          "Your forms are filled and your file is checked and submitted as soon as your documents are complete. The embassy sets its own decision time.",
      },
      {
        title: "Flight and hotel bookings",
        detail: "Flight reservations and hotel bookings that match the dates on your application.",
      },
      {
        title: "Travel insurance",
        detail: "A policy that meets the embassy's requirements and covers the dates you actually travel.",
      },
    ],
    itemsHeading: "Countries we handle",
    items: [
      {
        id: "schengen",
        name: "Europe (Schengen)",
        detail:
          "France, Germany, Italy, Spain, the Netherlands, Switzerland and the other Schengen states. Tourist, family visit and business visas.",
      },
      { id: "uk", name: "United Kingdom", detail: "Standard Visitor visa: online form, documents and biometrics appointment." },
      {
        id: "usa",
        name: "United States",
        detail: "B1/B2 visitor visa: DS-160 form, fee payment guidance and the interview appointment.",
      },
      { id: "canada", name: "Canada", detail: "Visitor visa: online application, documents and biometrics appointment." },
      { id: "australia", name: "Australia", detail: "Visitor visa: online application and supporting documents." },
      { id: "new-zealand", name: "New Zealand", detail: "Visitor visa: online application and supporting documents." },
      { id: "turkey", name: "Turkey", detail: "e-Visa or sticker visa, depending on the passport you hold." },
      { id: "saudi-arabia", name: "Saudi Arabia", detail: "Visit visa and Umrah visa for UAE residents." },
      { id: "malaysia", name: "Malaysia", detail: "Tourist visa or eVisa, depending on the passport you hold." },
      { id: "singapore", name: "Singapore", detail: "Tourist visa applications." },
      { id: "thailand", name: "Thailand", detail: "Tourist visa applications." },
      { id: "japan", name: "Japan", detail: "Tourist visa applications." },
      {
        id: "other-countries",
        name: "Any other country",
        detail: "Tell us the destination and the passport you hold, and we check what it takes.",
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
        q: "Which countries do you handle visas for?",
        a: "The countries listed on this page are the ones asked for most. For any other country, tell us the destination and the passport you hold and we check what it takes.",
      },
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
    slug: "uae-visa-services",
    label: "UAE visas",
    short: "Dubai visit and family visas",
    nav: "UAE visas",
    name: "UAE visa services",
    title: "Dubai visit visas, family visas and residence visas",
    metaTitle: "Dubai Visit Visa and Family Visa Services, UAE Visas for Pakistani Nationals",
    metaDescription:
      "Dubai visit visas, family visas (now available), visit visas for Pakistani nationals, renewals, extensions and cancellations, handled at one desk in Sharjah.",
    summary: "Dubai visit visas, family visas, visit visas for Pakistani nationals, renewals, extensions and cancellations.",
    whoFor: "Residents sponsoring family, and visitors coming to the UAE",
    intro: [
      "Most people come to us with one of two errands: someone is coming to visit, or someone is staying. We prepare the application, check the documents before anything is submitted, and tell you where it stands until the visa is issued.",
      "Fees and processing times are set by the UAE authorities and change during the year. We give you today's figure in writing before you pay.",
    ],
    itemsHeading: "Visas we handle",
    items: [
      {
        id: "dubai-visit-visa",
        name: "Dubai visit visa",
        detail:
          "Visit and tourist visas for family, friends and tourists coming to Dubai and the rest of the UAE. Tell us how long they plan to stay and we confirm which visa fits.",
      },
      {
        id: "family-visa",
        name: "Dubai family visa",
        tag: "Now available",
        detail:
          "Sponsor your spouse, children or parents to live with you: entry permit, medical, Emirates ID and visa stamping, handled in order.",
      },
      {
        id: "pakistani-nationals",
        name: "Visit visa for Pakistani nationals",
        detail:
          "UAE visit visa applications for Pakistani passport holders, including visits sponsored by family already living here. The rules for each nationality change, so we check the current requirements before you apply.",
      },
      {
        id: "other-nationalities",
        name: "Visit visas for other nationalities",
        detail: "Tell us the passport the visitor holds and we tell you what applies and what to send.",
      },
      {
        name: "Visit visa extension",
        detail: "Extending a visit visa from inside the country, where the visa type allows it.",
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
        q: "How long does a Dubai visit visa take?",
        a: "It depends on the nationality, the visa type and how busy the authorities are. We tell you the current timing when you enquire, and we do not promise a date we cannot control.",
      },
      {
        q: "Can I sponsor my parents or my wife on my own visa?",
        a: "Often yes. It depends on your salary, your accommodation and your visa category. Send us your Emirates ID and salary details and we tell you what applies to you.",
      },
      {
        q: "Can Pakistani passport holders get a UAE visit visa?",
        a: "We handle visit visa applications for Pakistani nationals. Requirements for each nationality change during the year, so send us the passport copy and we confirm what currently applies before you pay anything.",
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
    slug: "hotels-and-travel-insurance",
    label: "Hotels and insurance",
    short: "Bookings that match your visa file",
    nav: "Hotels and insurance",
    name: "Hotel bookings and travel insurance",
    title: "Hotel bookings, flight reservations and travel insurance",
    metaTitle: "Hotel Booking and Travel Insurance for Visa Applications in Sharjah and Dubai",
    metaDescription:
      "Hotel bookings, flight reservations and travel insurance for visa applications, arranged in Sharjah to match your dates and the embassy's requirements.",
    summary: "Hotel bookings, flight reservations and travel insurance that match your visa application.",
    whoFor: "Anyone applying for a visa or planning a trip",
    intro: [
      "Most embassies want to see where you will stay, how you will get there and that you are insured. If the dates on those three papers do not agree with your application, the file comes back. We arrange them together so they match.",
      "You can also book any of them on its own, without a visa application.",
    ],
    itemsHeading: "What we arrange",
    items: [
      {
        name: "Hotel bookings for visa applications",
        detail: "Confirmed hotel bookings for the dates and cities on your application.",
      },
      {
        name: "Flight reservations",
        detail: "A flight reservation for the visa file, and the ticket itself once your visa is granted.",
      },
      {
        name: "Travel insurance",
        detail: "Policies that meet embassy requirements, including Schengen cover, for the dates you actually travel.",
      },
      {
        name: "Hotel stays",
        detail: "Rooms in the UAE and abroad for the trip itself, booked with the rest of your travel.",
      },
      {
        name: "Changes when dates move",
        detail: "If your appointment or travel dates change, we update the bookings so the file still agrees.",
      },
    ],
    bringHeading: "What we need",
    bring: [
      "The country you are applying to, and your travel dates",
      "A passport copy for each traveller",
      "The cities you plan to stay in",
      "A budget range for the hotel",
    ],
    bringNote: "Insurance requirements differ by embassy. Tell us the country and we match the policy to it.",
    steps: [
      { title: "Tell us the trip", detail: "Country, dates and who is travelling." },
      { title: "Review the options", detail: "We send hotels and a policy that fit the application." },
      { title: "Confirm", detail: "We check names and dates against the passports before booking." },
      { title: "Receive the papers", detail: "Booking confirmations and the policy arrive as PDFs, ready for the file." },
    ],
    faqs: [
      {
        q: "Do I need a paid ticket for a visa application?",
        a: "Most embassies ask for a flight reservation, not a paid ticket. We arrange the reservation for the file and issue the ticket once your visa is granted.",
      },
      {
        q: "What travel insurance does a Schengen visa need?",
        a: "Schengen rules ask for medical cover of at least 30,000 euros, valid in every Schengen state for your whole stay. We issue a policy that meets this and matches your dates.",
      },
      {
        q: "Can you book only the hotel, or only the insurance?",
        a: "Yes. Each one can be booked on its own.",
      },
    ],
  },
];
