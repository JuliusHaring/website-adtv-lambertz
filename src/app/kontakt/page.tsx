"use client";

import PageSection from "@/lib/components/molecules/PageSection";
import Link from "next/link";
import { useState } from "react";

export default function Kontakt() {
  const variant = "primary";
  const [agreed, setAgreed] = useState(false);

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
        <form className="p-6" noValidate>
          <fieldset className="flex gap-6">
            <legend className="text-sm font-medium">Anrede:</legend>
            <label className="label gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="Herr"
                className="radio radio-primary"
              />
              Herr
            </label>
            <label className="label gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="Frau"
                className="radio radio-primary"
              />
              Frau
            </label>
          </fieldset>

          <div className="grid gap-4 sm:grid-cols-2 my-6">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="vorname"
              placeholder="Vorname*"
              required
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="strasse"
              placeholder="Straße"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="plz"
              placeholder="PLZ / Ort"
              pattern="^[0-9]{5}.*"
              className="input input-bordered w-full"
            />
            <input
              type="tel"
              name="telefon"
              placeholder="Telefon"
              pattern="^(\+49|0)[0-9 ]{7,}$"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail*"
              required
              className="input input-bordered w-full"
            />
          </div>

          <textarea
            name="nachricht"
            placeholder="Ihre Nachricht*"
            required
            className="textarea textarea-bordered w-full min-h-[8rem] mb-6"
          />

          <label className="flex items-start gap-3 mb-6">
            <input
              type="checkbox"
              className="checkbox checkbox-primary mt-1"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
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

          <button
            type="submit"
            className="btn btn-primary w-full sm:w-auto"
            disabled={!agreed}
          >
            Absenden
          </button>
        </form>
      </div>
    </PageSection>
  );
}
