# KKN Travels

Marketing website for KKN Travels, a visa and travel desk in Sharjah, UAE. Visas lead: Schengen, UK, USA, Canada, Australia and other countries, plus Dubai visit and family visas. Flights, hotel bookings, travel insurance, typing, holidays and Umrah sit alongside. English and Arabic (right-to-left).

Built with Next.js 16 (App Router), TypeScript and Tailwind CSS v4. Every page is statically generated.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. The root address redirects to `/en` or `/ar` based on the browser's language.

```bash
npm run build   # production build
npm run lint    # eslint
```

## Business details

Phone, WhatsApp, email and address live in `src/config/site.ts`. Two things there are still open:

- **Opening hours** are not shown (the site says they are to be confirmed). Fill in `hours` and set `confirmed.hours` to `true`.
- **Map coordinates** are left out of the search data. Add the office's latitude and longitude to `address.geo` and set `confirmed.coordinates` to `true`.

## Settings

See `.env.example`. `NEXT_PUBLIC_SITE_URL` defaults to `https://kkn-travels.com`; search engines may index the site unless `NEXT_PUBLIC_ALLOW_INDEXING` is `false` (use that on preview deployments).

## Still to review

- **Visa copy**: the country list, "early appointments", "quick processing", "Dubai family visa now available" and the visit visa for Pakistani nationals are stated as the owner asked. Edit the country list in `services.visas.en.ts` (and the Arabic file) to match what the desk really handles; the top announcement is `announce` in `en.ts` and `ar.ts`.
- **Arabic**: a native speaker should review `src/content/ar.ts`, `services.ar.ts` and `services.visas.ar.ts`.
- **Photographs** in `public/images/destinations` are generated placeholders. Replace any of them with owned or licensed photography by swapping the file and keeping the name.

## Where things live

| Path | What it holds |
| --- | --- |
| `src/config/site.ts` | Business details and the WhatsApp link builder |
| `src/content/en.ts`, `ar.ts` | Page copy for each language |
| `src/content/services.visas.en.ts`, `services.visas.ar.ts` | The visa services (countries, Dubai visas) and the hotel and insurance service |
| `src/content/services.en.ts`, `services.ar.ts` | The other service pages |
| `src/content/destinations.ts` | Destination photographs and which service each links to |
| `src/app/[locale]` | Pages: home, services, service detail, about, contact, privacy, 404 |
| `src/components` | Header, photo strip, service index, enquiry form and the rest |
| `src/lib/seo.ts` | Page metadata, hreflang and structured data |
| `src/app/sitemap.ts`, `robots.ts` | Sitemap and robots rules |
| `src/proxy.ts` | Sends addresses without a language prefix to `/en` or `/ar` |

## Hidden services

Document attestation and translation is written but switched off: it is listed in `hiddenServices` in `src/content/types.ts`, so it has no page, links or sitemap entry. To bring it back, empty that list and restore its mentions in the page copy (`src/content/en.ts` and `ar.ts`).

## Enquiries

The enquiry form does not post to a server. It writes the enquiry as a WhatsApp message and opens the chat with the office number, and the visitor presses send. To receive enquiries by email instead, add a route handler and a mail provider.

## SEO

Each page sets its own title, description, canonical address, `hreflang` links for both languages, and Open Graph tags. Structured data covers the business (`TravelAgency`), each service, FAQs and breadcrumbs. Adding a service means adding it to `serviceSlugs` in `src/content/types.ts` and to both service files; the page, sitemap entry and index links follow.

## Design

`PRODUCT.md` records what the business is and who the site is for. `DESIGN.md` records the visual system. Both are meant to be read before changing the interface.
