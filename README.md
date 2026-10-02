# KKN Travels

Marketing website for KKN Travels, a travel and documents desk in Dubai: UAE visas, visas for travel abroad, airline tickets, typing, holidays and Umrah. English and Arabic (right-to-left).

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

## Before launch

1. **Replace the dummy business details** in `src/config/site.ts`: phone, mobile, WhatsApp number, email, address, map link, coordinates and opening hours.
2. **Set the environment variables** (see `.env.example`):
   - `NEXT_PUBLIC_SITE_URL`: the real domain, for example `https://www.kkntravels.com`.
   - `NEXT_PUBLIC_ALLOW_INDEXING=true`: until this is set the site tells search engines not to index it, so the dummy details never reach search results.
3. **Review the copy** in `src/content`. It makes a few promises about how the office works (a written price before payment, government fees shown separately, English and Arabic spoken). Keep only what is true.
4. **Have a native speaker review the Arabic** in `src/content/ar.ts` and `src/content/services.ar.ts`.
5. **Replace the Makkah photograph** (`public/images/destinations/makkah.jpg`) with a licensed photograph before the site goes public. It is a generated depiction of the Grand Mosque and the Kaaba, which is not acceptable to publish for this audience.
6. **Other photographs** in `public/images/destinations` are generated placeholders too. Replace any of them with owned or licensed photography by swapping the file and keeping the name.

## Where things live

| Path | What it holds |
| --- | --- |
| `src/config/site.ts` | Business details and the WhatsApp link builder |
| `src/content/en.ts`, `ar.ts` | Page copy for each language |
| `src/content/services.en.ts`, `services.ar.ts` | The service pages |
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
