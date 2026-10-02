"use client";

import { useId, useState } from "react";
import type { Dictionary } from "@/content";
import { enquiryLink, validateEnquiry, type EnquiryErrors } from "@/lib/enquiry";

type Props = {
  copy: Dictionary["enquiry"];
  /** Preselects one of copy.needOptions, for example on a service page. */
  defaultNeed?: string;
};

/**
 * Writes the enquiry as a WhatsApp message and opens the chat. Nothing is
 * sent to this website; the visitor presses send inside WhatsApp.
 */
export function EnquiryForm({ copy, defaultNeed }: Props) {
  const id = useId();
  const [errors, setErrors] = useState<EnquiryErrors>({});

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const values = {
      need: String(data.get("need") ?? ""),
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      details: String(data.get("details") ?? ""),
    };
    const found = validateEnquiry(values, copy);
    setErrors(found);

    const firstInvalid = found.name ? "name" : found.phone ? "phone" : null;
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus();
      return;
    }
    window.open(enquiryLink(values, copy), "_blank", "noopener");
  };

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
      <div className="field sm:col-span-2">
        <label htmlFor={`${id}-need`}>{copy.need}</label>
        <select id={`${id}-need`} name="need" defaultValue={defaultNeed ?? copy.needOptions[0]}>
          {copy.needOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor={`${id}-name`}>{copy.name}</label>
        <input
          id={`${id}-name`}
          name="name"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${id}-name-error` : undefined}
        />
        {errors.name ? (
          <p id={`${id}-name-error`} className="field-error" role="alert">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor={`${id}-phone`}>{copy.phone}</label>
        <input
          id={`${id}-phone`}
          name="phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          dir="ltr"
          className="rtl:text-right"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? `${id}-phone-error` : undefined}
        />
        {errors.phone ? (
          <p id={`${id}-phone-error`} className="field-error" role="alert">
            {errors.phone}
          </p>
        ) : null}
      </div>

      <div className="field sm:col-span-2">
        <label htmlFor={`${id}-details`}>{copy.details}</label>
        <textarea id={`${id}-details`} name="details" rows={3} placeholder={copy.detailsPlaceholder} />
      </div>

      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-2 sm:col-span-2">
        <button type="submit" className="pill pill-invert">
          {copy.send}
        </button>
        <p className="max-w-[38ch] text-[0.875rem] text-blush">{copy.note}</p>
      </div>
    </form>
  );
}
