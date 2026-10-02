import { whatsappLink } from "@/config/site";
import type { Dictionary } from "@/content";

export type EnquiryValues = { need: string; name: string; phone: string; details?: string };
export type EnquiryErrors = Partial<Record<"name" | "phone", string>>;

/** A phone number needs at least seven digits; spaces, dashes and a leading + are fine. */
const phonePattern = /^\+?[\d\s()-]{7,}$/;

export function validateEnquiry(values: EnquiryValues, copy: Dictionary["enquiry"]): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (values.name.trim().length < 2) errors.name = copy.nameError;
  if (!phonePattern.test(values.phone.trim())) errors.phone = copy.phoneError;
  return errors;
}

/** The WhatsApp link with the enquiry written out as a short message. */
export function enquiryLink(values: EnquiryValues, copy: Dictionary["enquiry"]): string {
  const lines = [
    `${copy.messageIntro} ${values.need}`,
    `${copy.messageName}: ${values.name.trim()}`,
    `${copy.messagePhone}: ${values.phone.trim()}`,
  ];
  if (values.details?.trim()) lines.push(`${copy.messageDetails}: ${values.details.trim()}`);
  return whatsappLink(lines.join("\n"));
}
