import { getDictionary } from "@/content";
import type { Locale } from "@/i18n/config";
import { EnquiryForm } from "./EnquiryForm";
import { OfficeDetails } from "./OfficeDetails";

type Props = {
  locale: Locale;
  heading: string;
  intro: string;
  /** One of the enquiry.needOptions to preselect. */
  defaultNeed?: string;
  /** Use "h1" when the band is the top of the page. */
  as?: "h1" | "h2";
};

/** The burgundy band where a visitor acts: the enquiry form beside the office details. */
export function EnquiryBand({ locale, heading, intro, defaultNeed, as: Heading = "h2" }: Props) {
  const t = getDictionary(locale);

  return (
    <section id="enquiry" className="band-burgundy section" aria-labelledby="enquiry-title">
      <div className="shell grid gap-x-[8%] gap-y-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
        <div>
          <Heading id="enquiry-title" className="section-title">
            {heading}
          </Heading>
          <p className="mt-4 mb-10 max-w-[52ch] text-blush">{intro}</p>
          <EnquiryForm copy={t.enquiry} defaultNeed={defaultNeed} />
        </div>
        <div>
          <h3 className="subhead mb-6">{t.contact.detailsHeading}</h3>
          <OfficeDetails locale={locale} />
        </div>
      </div>
    </section>
  );
}
