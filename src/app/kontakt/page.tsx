"use client";

import PageSection from "@/lib/components/molecules/PageSection";
import Link from "next/link";

export default function Kontakt() {
  const variant = "primary";

  return (
    <PageSection title="Kontakt" variant={variant}>
      <p>
        Sie haben Fragen, einen speziellen Wunsch oder benötigen weiteres
        Informationsmaterial? Schreiben Sie uns – wir freuen uns darauf!
      </p>

      <div className="text-sm">
        <Link
          href="https://maps.app.goo.gl/u5ojGbRLVU5ArwpX7"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover block"
        >
          ADTV Tanzschule Lambertz
          <br />
          Soerser Weg 90
          <br />
          52070 Aachen
        </Link>
        <p>
          Telefon:{" "}
          <Link href="tel:02414465225" className="link link-hover">
            0241 4465225
          </Link>
        </p>
        <p>
          Mobil:{" "}
          <Link href="tel:01631976380" className="link link-hover">
            0163 1976380
          </Link>
        </p>
        <p>
          E-Mail:{" "}
          <Link
            href={"mailto:info@tanzschule-lambertz.de"}
            className="link link-hover"
          >
            info@tanzschule-lambertz.de
          </Link>
        </p>
      </div>

      <div className="bg-base-100 shadow-md rounded-lg">
        <form
          className="p-6 space-y-6"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="CONTACT_WEB3FORMS_API_KEY"
          />

          <fieldset className="flex gap-6">
            <legend className="text-sm font-medium">Anrede:</legend>
            <label className="label gap-2 cursor-pointer">
              <input
                type="radio"
                name="Anrede"
                value="Herr"
                className="radio radio-primary"
              />
              Herr
            </label>
            <label className="label gap-2 cursor-pointer">
              <input
                type="radio"
                name="Anrede"
                value="Frau"
                className="radio radio-primary"
              />
              Frau
            </label>
          </fieldset>

          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="Name"
              placeholder="Name*"
              required
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="Vorname"
              placeholder="Vorname*"
              required
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="Straße"
              placeholder="Straße"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="PLZOrt"
              placeholder="PLZ / Ort"
              className="input input-bordered w-full"
            />
            <input
              type="tel"
              name="Telefon"
              placeholder="Telefon"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="E-Mail"
              placeholder="E-Mail*"
              required
              className="input input-bordered w-full"
            />
          </div>

          <textarea
            name="Nachricht"
            placeholder="Ihre Nachricht*"
            required
            className="textarea textarea-bordered w-full min-h-[8rem]"
          />

          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              className="checkbox checkbox-primary mt-1"
              required
            />
            <span className="text-sm leading-snug">
              Ich habe die{" "}
              <Link href="/footer/datenschutz" className="link link-primary">
                Datenschutzerklärung
              </Link>{" "}
              zur Kenntnis genommen und bin mit der Verarbeitung meiner Daten
              zur Bearbeitung meiner Anfrage einverstanden.
            </span>
          </label>

          <button type="submit" className="btn btn-primary w-full sm:w-auto">
            Absenden
          </button>
        </form>
      </div>
    </PageSection>
  );
}
