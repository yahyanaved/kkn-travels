---
name: KKN Travels
description: Visas and flights, sorted at one desk in Dubai. A panorama of destinations over a quiet oyster-grey page.
colors:
  ground: "#ebe7e2"
  paper: "#ffffff"
  ink: "#171b24"
  ink-soft: "#5e6167"
  burgundy: "#640b2c"
  burgundy-deep: "#4a0820"
  blush: "#f4c9d4"
  rule: "#c9c5bf"
  alert: "#ffd0d9"
typography:
  display:
    fontFamily: "Wix Madefor Display, Alexandria, system-ui, sans-serif"
    fontSize: "clamp(2rem, max(1.611rem + 1.595vw, 3.385vw), 5rem)"
    fontWeight: 700
    lineHeight: 1.137
    letterSpacing: "-0.005em"
  headline:
    fontFamily: "Wix Madefor Display, Alexandria, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 1.4rem + 1.1vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.15
  title:
    fontFamily: "Wix Madefor Display, Alexandria, system-ui, sans-serif"
    fontSize: "1.4375rem"
    fontWeight: 600
    lineHeight: 1.25
  index-title:
    fontFamily: "Wix Madefor Display, Alexandria, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.6vw, 1.875rem)"
    fontWeight: 600
    lineHeight: 1.22
  row-title:
    fontFamily: "Wix Madefor Display, Alexandria, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.35
  numeral:
    fontFamily: "Wix Madefor Display, Alexandria, system-ui, sans-serif"
    fontSize: "3.25rem"
    fontWeight: 700
    lineHeight: 1
  wordmark:
    fontFamily: "Wix Madefor Display, Alexandria, system-ui, sans-serif"
    fontSize: "2.0625rem"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.02em"
  lede:
    fontFamily: "Wix Madefor Text, Noto Sans Arabic, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1.18vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.64
  body:
    fontFamily: "Wix Madefor Text, Noto Sans Arabic, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  small:
    fontFamily: "Wix Madefor Text, Noto Sans Arabic, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.65
  caption:
    fontFamily: "Wix Madefor Display, Alexandria, system-ui, sans-serif"
    fontSize: "1.1875rem"
    fontWeight: 500
    lineHeight: 1.2
  button:
    fontFamily: "Wix Madefor Display, Alexandria, system-ui, sans-serif"
    fontSize: "0.96875rem"
    fontWeight: 600
    lineHeight: 1
  link:
    fontFamily: "Wix Madefor Display, Alexandria, system-ui, sans-serif"
    fontSize: "0.953125rem"
    fontWeight: 500
  label:
    fontFamily: "Wix Madefor Display, Alexandria, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
rounded:
  none: "0"
  focus: "2px"
  pill: "999px"
spacing:
  gutter: "clamp(1.25rem, 3.61vw, 3.25rem)"
  container: "75rem"
  section: "clamp(4rem, 7.2vw, 7rem)"
  header-height: "4.3125rem"
  strip-gap: "0.5rem"
  column-gap: "3.4375rem"
  row: "1.5rem"
components:
  pill:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.paper}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 2.3125rem"
    height: "3.4375rem"
  pill-hover:
    backgroundColor: "{colors.burgundy-deep}"
  pill-disabled:
    backgroundColor: "{colors.ink-soft}"
  pill-small:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.25rem"
    height: "2.3125rem"
  pill-invert:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.burgundy}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: "0 2.3125rem"
    height: "3.4375rem"
  pill-invert-hover:
    backgroundColor: "{colors.blush}"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.link}"
  text-link-hover:
    textColor: "{colors.burgundy}"
  nav-band:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    height: "{spacing.header-height}"
  strip-slice:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
  index-row:
    textColor: "{colors.ink}"
    typography: "{typography.index-title}"
    padding: "1.5625rem 2rem 2.4375rem 0"
  index-row-hover:
    textColor: "{colors.burgundy}"
  tab:
    textColor: "{colors.ink-soft}"
    typography: "{typography.row-title}"
    padding: "1.0625rem 0"
  tab-hover:
    textColor: "{colors.ink}"
  tab-selected:
    textColor: "{colors.burgundy}"
  field:
    textColor: "{colors.paper}"
    typography: "{typography.body}"
    rounded: "{rounded.none}"
    padding: "0.625rem 0"
    height: "3rem"
  field-label:
    textColor: "{colors.blush}"
    typography: "{typography.label}"
  enquiry-band:
    backgroundColor: "{colors.burgundy}"
    textColor: "{colors.paper}"
  band-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
---

# Design System: KKN Travels

## Overview

**Creative North Star: "Panorama"**

Every page opens on photographs of places and then gets out of the way. A full-width strip of famous destinations sits directly under a white navigation band; below it, on a flat oyster-grey ground, charcoal type states the errand plainly and lists every service on hairline rules. The register is that of a premium travel company: luxury through restraint, corporate and trustworthy, with nothing themed and nothing decorative.

Everything that is not a photograph is type, a hairline or a burgundy mark. There are no cards, no icons other than one chevron, and no shadows on content. Sections alternate between oyster grey and white, and one burgundy band per page holds the enquiry form: the place to act. Density is generous, with wide gutters, tall section padding and columns that split five to seven.

The system rejects the single skyline hero over a row of icon cards, aircraft imagery of any kind, and themed concepts. Motion is one authored entrance on load (the photographs rise into the strip) plus short state transitions; nothing animates on scroll. English and Arabic are equal editions: every layout mirrors, and Arabic has its own faces and line heights.

**Key Characteristics:**
- Destination photographs lead; they are square-cornered, sit in the centred column and are separated by thin gaps.
- A flat oyster-grey ground alternating with white bands, and exactly one burgundy band per page.
- One type family in two cuts (Wix Madefor Display and Text), sentence case throughout, no uppercase labels.
- Hairline rules instead of boxes: lists, tabs, questions and facts are all rows on 1px lines.
- Two shapes only: square corners and full pills.
- One icon: a 9 by 16 chevron that mirrors in right-to-left.
- Light theme only; no dark mode is defined.

## Colors

A warm neutral page with a single deep red accent; all the saturated colour on screen comes from the photographs.

### Primary
- **Deep Burgundy** (`burgundy`): the brand and the action. It sets the wordmark, fills pill buttons, draws chevrons, step numerals and checklist strokes, colours the selected tab and the hover state of links and row titles, and draws the focus ring, text selection, caret and scrollbar thumb. It is also the ground of the one enquiry band. On oyster grey it reads at 10.5:1, on white at 12.9:1.
- **Pressed Burgundy** (`burgundy-deep`): the hover fill of a burgundy pill, and nothing else.
- **Blush** (`blush`): the quiet voice inside the burgundy band only. Field labels, the band's intro and note text, the hover of a text link on burgundy, and the hover fill of the inverted pill. 8.7:1 on burgundy.

### Neutral
- **Oyster Grey** (`ground`): the page itself. Sampled from the approved comp and pinned; it is flat colour, with no grain or texture.
- **Paper White** (`paper`): the navigation band, alternating sections, the footer, the gaps between photographs, text on burgundy and on photographs, and the inverted pill.
- **Charcoal Ink** (`ink`): all headings and body text (14:1 on oyster, 17.2:1 on white). Also the holding colour behind a photograph while it loads.
- **Soft Charcoal** (`ink-soft`): supporting text, such as service descriptions, intros, answers, breadcrumbs, unselected tabs and footer notes (5.05:1 on oyster, 6.2:1 on white). Also the fill of a disabled pill.
- **Hairline** (`rule`): 1px rules between rows and the breadcrumb separator. On burgundy the rule is white at 28% opacity instead.

### Named Rules
**The Burgundy Rule.** Burgundy marks the brand and the next action: wordmark, pills, chevrons, step numerals, checklist strokes, the selected or hovered state, the focus ring. It never colours a heading, a paragraph, a border or a decorative shape.

**The One Band Rule.** One burgundy field per page, and it is always the enquiry band. No second drenched section, no burgundy footer, no burgundy navigation.

**The Two Grounds Rule.** Sections sit on oyster grey or on white, alternating. There are no tints, gradients or textures behind text. The only gradient in the system is the dark floor under a place name on a photograph.

## Typography

**Display Font:** Wix Madefor Display (Arabic: Alexandria; fallback system-ui, sans-serif)
**Body Font:** Wix Madefor Text (Arabic: Noto Sans Arabic; fallback system-ui, sans-serif)

**Character:** A plain, slightly warm grotesque in two optical cuts. Headlines are heavy and tight, everything else is calm and open; the pairing reads as corporate and current without a serif or a script anywhere.

### Hierarchy
- **Display** (700, `clamp(2rem, max(1.611rem + 1.595vw, 3.385vw), 5rem)`, 1.137, -0.005em): the page headline. 48.75px on a 1440px screen; past that it grows with the screen so it keeps filling its column. Held to roughly 10 to 14em wide so it breaks into two or three lines.
- **Headline** (700, `clamp(1.75rem, 1.4rem + 1.1vw, 2.5rem)`, 1.15): section titles, one per section.
- **Title** (600, 1.4375rem / 23px, 1.25): subheads inside a section, such as step titles, audience names, fact names and the tab panel heading.
- **Index title** (600, `clamp(1.25rem, 1.6vw, 1.875rem)`, 1.22): service names in the service index.
- **Row title** (600, 1.25rem / 20px, 1.35): tabs, questions and mobile menu links.
- **Numeral** (700, 3.25rem / 52px, 1, burgundy): step numbers only.
- **Wordmark** (600, 2.0625rem / 33px, -0.02em, burgundy): the name set in the display face; smaller on phones (`clamp(1.3125rem, 6.6vw, 1.75rem)`) and slightly smaller in Arabic (1.875rem).
- **Lede** (400, `clamp(1.0625rem, 1.18vw, 1.3125rem)`, 1.64): the one paragraph under a page headline.
- **Body** (400, 1.0625rem / 17px, 1.65): running text in Wix Madefor Text with lining numerals. Measures are capped: 34rem for prose, 52ch for section intros, 62ch for answers and notes, 34ch for step details.
- **Small** (400, 0.875rem / 14px): breadcrumbs, the footer legal line, form notes and error messages. Notes beside a headline step up to 0.9375rem.
- **Caption** (500, 1.1875rem / 19px, 1.2, white): place names on photographs. The service line beneath is 0.875rem at weight 400.
- **Button** (600, 0.96875rem, line-height 1): pill labels in the display face; 0.875rem in the small pill.
- **Link** (500, 0.953125rem, underlined): standalone text links in the display face.
- **Label** (500, 0.875rem / 14px): navigation links, field labels and footer column headings, all in the display face.

### Named Rules
**The Sentence Case Rule.** Nothing is set in uppercase and nothing is letter-spaced for effect. Labels are small and medium-weight, not shouted. The only tracking in the system is the slight tightening of the headline and the wordmark.

**The Three Weights Rule.** Display type uses 700 for headlines, section titles and numerals; 600 for titles, pills and the wordmark; 500 for labels, links and captions. Body text is 400. No italics, no light weights.

**The Arabic Edition Rule.** Arabic text asks for Alexandria and Noto Sans Arabic first, never takes letter-spacing (tracking breaks the joins), and gets more room: body line-height 1.9, display line-height 1.4, caption line-height 1.5. Phone numbers stay left-to-right inside Arabic text.

## Layout

Content sits in a centred column at most 1200px wide (`--container: 75rem`), so wide screens keep clear margins on both sides; the owner asked for this on 2026-10-02. Section backgrounds and the navigation band still run the full width. Below that width the column keeps a gutter of `clamp(1.25rem, 3.61vw, 3.25rem)`: 20px on a phone, 52px at most. Photograph strips sit in the same column; on phones they run edge to edge so they can be swiped.

Vertical rhythm is one step: every section has `clamp(4rem, 7.2vw, 7rem)` of padding above and below. The white navigation band is 69px tall and sticks to the top; anchors scroll to 16px below it.

Two-column sections divide a twelve-part row unevenly, with an 8% gap between the parts: five to seven when a heading or a list of choices sits beside its content (tabs, questions, audiences, fact rows), seven to five when the content leads (the enquiry form beside the office details, a service headline beside its intro). The home hero is eight to seven: headline at left, service index at right. Multi-column lists (the service index and the steps) use a fixed 55px column gap. Steps go from one column to two at 640px and four at 1024px; the service index is two columns from 640px.

Breakpoints are 640px, 768px and 1024px. Below 1024px the navigation row collapses to a text button and every split stacks. Below 768px the destination strip becomes a row you swipe. Layout uses logical properties throughout, so the Arabic edition mirrors without separate rules; chevrons flip and the strip order reads from the right.

### Named Rules
**The Centred Column Rule.** Everything, including a row of photographs, aligns to the same centred column; only backgrounds run edge to edge. A single photograph inside a section sits in one side of an uneven split and keeps its square corners.

**The Uneven Split Rule.** Two columns are never equal halves. Use five to seven or seven to five with an 8% gap.

## Elevation & Depth

The system is flat. Content carries no shadows and no layered surfaces; depth comes from the photographs themselves and from the change of ground between oyster grey, white and burgundy. Separation inside a section is always a 1px hairline.

The navigation band has no border and no shadow; it is simply white above the photographs.

### Shadow Vocabulary
- **Menu overlay** (`box-shadow: 0 24px 40px -24px rgb(23 27 36 / 0.35)`): under the mobile menu panel only, where it drops over the page. It is the one true shadow in the build.
- **Field focus line** (`box-shadow: 0 2px 0 0 #ffffff`): not elevation. It thickens the underline of a focused form field on the burgundy band.

### Named Rules
**The Flat Rule.** No shadow on photographs, rows, pills, bands or text. If something needs to stand apart, change the ground or draw a hairline.

## Shapes

Two shapes only. Photographs, bands, fields and rows are square-cornered (0 radius). Buttons are full pills (999px). Nothing sits in between: there are no softly rounded rectangles anywhere.

Borders are 1px hairlines and only ever horizontal: above each row, and below the last one. Nothing is boxed on four sides. Photographs have no frame; neighbouring photographs are separated by an 8px white gap, which is the white band showing through. The focus ring is a 2px burgundy outline offset by 3px (white on burgundy and on photographs).

The one recurring mark besides the chevron is a short burgundy stroke, 16px wide and 2px tall, that starts each checklist item.

## Components

### Buttons
Calm, solid and few: one pill per view, with a text link beside it for the second choice.
- **Shape:** full pill (999px), 55px tall, 37px side padding, label on one line.
- **Primary:** burgundy fill, white label in the display face at weight 600.
- **Small:** 37px tall, 20px side padding, 0.875rem label. Used in the navigation band.
- **Inverted:** white fill with a burgundy label, for the burgundy band; hover fills blush.
- **Hover / Focus / Active:** hover deepens to pressed burgundy over 200ms; active scales to 0.98; focus shows the 2px outline following the pill shape. Disabled turns soft charcoal with a not-allowed cursor.
- **Text link:** underlined display text at weight 500, 1px underline offset 0.3em; hover turns burgundy (blush on the burgundy band).

### Destination strip (signature)
Five photographs share one full-width row; one of them leads.
- **Structure:** a flex row on white with 8px gaps, `clamp(15rem, 21.875vw, 27rem)` tall (315px at 1440px). Each photograph covers its slice; the lead slice grows at 1.64 to the others' 1. On the home page the middle photograph leads.
- **Caption:** the place name in white at the bottom inline-start corner (12.5px in, 11px up), over a dark floor that fades from 76% at the bottom edge to nothing across the lowest 36% of the photograph. The floor is there so white type holds on bright water and sky.
- **Interaction:** pointing at or tabbing to a photograph hands it the lead over 700ms on the expo ease, and the others give way. With a pointer, the place name steps up 23px and the name of the linked service fades in beneath it. Each photograph links to that service. The focus ring is white and inset 4px.
- **Entrance:** on load each slice is revealed from the bottom over 1000ms, 80ms apart, while its photograph settles from 1.18 scale over 1600ms. Reduced-motion users see the finished state.
- **Phones (below 768px):** a snap-scrolling row, each slice 72% of the width, `62vw` tall (240px minimum), scrollbar hidden. The service line is always visible because there is no hover.
- **Static band:** inner pages and mid-page breaks use the same row with two or three photographs, the first one wide. It does not link and does not hand over the lead. It plays the entrance only when it opens the page; further down it loads lazily and stays still.

### Photographs
- Square corners, no frame, no shadow, always cropped to cover. A photograph inside a section takes a fixed ratio (4:5 beside text on desktop, 4:3 stacked, 3:2 in the services list) and may carry the same white caption over the same dark floor.
- Subjects are famous travel destinations. No aircraft or aeroplanes.
- The current files are generated placeholders. The Makkah photograph must be replaced with a licensed one before launch.

### Visa sections (added 2026-10-02)

Visas lead the site at the owner's request, so the home page carries two sections directly under the hero.

- **Country grid:** the countries handled for travel abroad as names on hairlines, three across (two on tablets and phones), each linking to its entry on the visas page. On phones the one-line detail is hidden and only the names show.
- **Facts:** four short titled facts side by side on hairlines (early appointments, quick processing, flight and hotel bookings, travel insurance). It is the steps grid without numerals, because the items are not a sequence.
- **Row links:** the Dubai and UAE visas as full-width rows on hairlines, each a link with a chevron.
- **Tag:** a short status beside a name ("Now available"), set small in burgundy at weight 600. It is inline text, not a badge: no background, no outline.
- **Announcement line:** one sentence of news in a charcoal-ink bar above the navigation band, white type, centred, with one underlined link. It scrolls away; the navigation band stays.
- **Strip:** the home strip now shows the visa countries asked for most (Dubai, USA, Europe, Canada, Australia), named by country, each linking to that country's entry.

### Service index
Every service as a title on a hairline.
- **Row:** the service name (index title) over a one-line description in soft charcoal, with a burgundy chevron at the inline-end. 25px above, 39px below. Rows are divided by hairlines; in two columns the top row has none.
- **Hover:** the title turns burgundy and the chevron leans 4px forward (backward in right-to-left).
- **Services list variant:** on the services page each row adds a 3:2 photograph at the start and an audience note at the end, with the chevron centred vertically.

### Rows
The grammar of the index, reused for any list of facts.
- **Fact rows:** each item sits on a top hairline with 24px above and below; the last one closes with a bottom hairline. Name at left as a title, detail at right in soft charcoal, split five to seven.
- **Checklist:** each item on a hairline with 14px above and below, indented 32px behind a short burgundy stroke. Maximum width 44rem.
- **Steps:** numbered only where order matters. A large burgundy numeral above a title and a short paragraph, each step on its own top hairline.

### Tabs
Choose an errand, see its list.
- **Style:** a vertical list of row titles on hairlines, soft charcoal at rest, ink on hover, burgundy when selected. The selected tab shows a chevron that slides in from 8px over 300ms.
- **Panel:** fades up 12px over 500ms when it appears. It holds a title, a checklist, a note and a text link.
- **Keyboard:** arrow keys, Home and End move between tabs.

### Questions
- **Style:** native disclosure rows on hairlines. The question is a row title; a burgundy chevron at the end points down when closed and up when open, turning over 300ms. Hover turns the question burgundy. The answer is soft charcoal, 62ch at most.

### Inputs / Fields
Fields exist only on the burgundy band.
- **Style:** a blush label above, a line beneath. No box, no fill, no radius; the line is white at 50% opacity, the value is white, the field is 48px tall. Placeholders are white at 66%. The select shows a white chevron at its end.
- **Hover / Focus:** the line turns solid white; on focus it thickens to 2px. There is no outline ring on fields.
- **Error:** the line turns light pink and thickens to 2px, and a small message in the same pink appears under the field. The pink is the `--color-alert` token (`#ffd0d9`), used only for form errors on the burgundy band.

### Enquiry band
The one drenched field, and the last thing on most pages.
- **Style:** burgundy ground, white text, section title at left over the form (seven parts), office details at right as fact rows (five parts) with blush labels and white-28% hairlines. The send button is the inverted pill with a blush note beside it. Selection and focus colours invert to white inside the band.

### Navigation
- **Band:** white, 69px tall, sticky, no border. Wordmark at the start, service links centred, the language link and a small burgundy pill at the end.
- **Links:** display face, 0.875rem, weight 500, ink; hover turns burgundy over 200ms. 43px apart.
- **Mobile (below 1024px):** the link row is replaced by an underlined text button that reads Menu or Close. It opens a white panel under the band with the services as row titles on hairlines, then secondary links and the language link. No hamburger icon.
- **Breadcrumbs:** small soft-charcoal text, items separated by a slash in the hairline colour, hover burgundy.
- **Footer:** white with a top hairline. Wordmark and tagline, then three columns of plain links under small soft-charcoal headings, then a legal line above a second hairline.

### Chevron
The only icon. A 9 by 16 stroke chevron, 2px round-capped line, drawn in the current colour (burgundy except on the burgundy band). It points forward on links, down and up on questions and the select, and mirrors in right-to-left.

## Do's and Don'ts

### Do:
- **Do** open a page with photographs running edge to edge under the white band, or with the burgundy band when the page is about getting in touch.
- **Do** keep photographs square-cornered, cropped to cover, and separated by 8px white gaps.
- **Do** put a white place name at the bottom corner of a photograph, over the dark floor, whenever the photograph is named.
- **Do** build lists as rows on 1px hairlines, with a hairline above each row and one closing the last.
- **Do** alternate oyster grey and white between sections and end the page on the burgundy enquiry band.
- **Do** split two columns five to seven or seven to five with an 8% gap.
- **Do** use one burgundy pill per view and an underlined text link for the second action.
- **Do** write layout with logical properties, mirror chevrons, and check every new surface in Arabic.
- **Do** keep transitions on the expo ease (`cubic-bezier(0.16, 1, 0.3, 1)`): 200ms for colour, 300ms for chevrons, 500 to 700ms for the strip.
- **Do** honour reduced motion; everything is visible without animation.

### Don't:
- **Don't** add icons. The chevron is the only one, and the checklist stroke is the only other mark.
- **Don't** build cards: no boxed, filled or four-sided-bordered containers around content.
- **Don't** put shadows on content. The only shadow is under the mobile menu panel.
- **Don't** round the corners of photographs, fields or bands, and don't use any radius between square and full pill.
- **Don't** use burgundy for headings, body text, borders or section tints, and don't add a second burgundy band to a page.
- **Don't** show aeroplanes or aircraft in any photograph, and don't adopt a themed concept such as boarding passes, departure boards or passport stamps.
- **Don't** use a single skyline photograph as a hero, or a row of icon tiles for the services.
- **Don't** set type in uppercase or add letter-spacing, and never track Arabic text.
- **Don't** add scroll-triggered animation. The strip entrance on load is the only authored motion.
- **Don't** add grain, texture or gradients to the ground; the oyster grey is flat.
- **Don't** invent proof. No badges, counters, star ratings or logos of partners appear in this system.
