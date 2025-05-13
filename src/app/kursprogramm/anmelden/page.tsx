"use client";

import PageSection from "@/lib/components/molecules/PageSection";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function AnmeldenPage() {
  const variant = "secondary";
  const params = useSearchParams();
  const kurs = params.get("kurs") || "Einsteigerkurs";
  const wochentag = params.get("wochentag") || "";
  const uhrzeit = params.get("uhrzeit") || "";
  const beginn = params.get("beginn") || "";
  const [agreed, setAgreed] = useState(false);
  const [withPartner, setWithPartner] = useState(false);
  const [payment, setPayment] = useState("");

  return (
    <PageSection title="Anmeldung" variant={variant}>
      <p>
        Bitte füllen Sie das folgende Formular aus, um sich verbindlich
        anzumelden.
      </p>

      <div className="bg-base-100 shadow-md rounded-lg">
        <form
          className="p-6 space-y-6"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="REGISTER_WEB3FORMS_API_KEY"
          />

          <fieldset className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="label font-medium">Tanzkurs:</label>
              <input
                type="text"
                name="Tanzkurs"
                value={kurs}
                readOnly
                className="input input-bordered w-full bg-base-200 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="label font-medium">Wochentag:</label>
              <input
                type="text"
                name="Wochentag"
                value={wochentag}
                readOnly
                className="input input-bordered w-full bg-base-200 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="label font-medium">Uhrzeit:</label>
              <input
                type="text"
                name="Uhrzeit"
                value={uhrzeit}
                readOnly
                className="input input-bordered w-full bg-base-200 cursor-not-allowed"
              />
            </div>
            <div>
              <label className="label font-medium">Kursbeginn:</label>
              <input
                type="text"
                name="Kursbeginn"
                value={beginn}
                readOnly
                className="input input-bordered w-full bg-base-200 cursor-not-allowed"
              />
            </div>
          </fieldset>

          <fieldset className="flex gap-6">
            <legend className="text-sm font-medium">Kursteilnehmer(in):</legend>
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
              placeholder="Straße*"
              required
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="PLZOrt"
              placeholder="PLZ / Ort*"
              required
              className="input input-bordered w-full"
            />
            <input
              type="tel"
              name="Telefon"
              placeholder="Telefon*"
              required
              className="input input-bordered w-full"
            />
            <input
              type="tel"
              name="Mobil"
              placeholder="Mobil"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              name="E-Mail"
              placeholder="E-Mail*"
              required
              className="input input-bordered w-full"
            />
            <input
              type="date"
              name="Geburtsdatum"
              placeholder="Geburtsdatum"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              name="Beruf"
              placeholder="Beruf"
              className="input input-bordered w-full"
            />
          </div>

          <fieldset className="flex flex-col gap-3">
            <legend className="text-sm font-medium">Anmeldung:</legend>
            <label className="label gap-2 cursor-pointer">
              <input
                type="radio"
                name="Anmeldung"
                value="ohne Tanzpartner"
                className="radio radio-primary"
                checked={!withPartner}
                onChange={() => setWithPartner(false)}
              />
              ohne Tanzpartner
            </label>
            <label className="label gap-2 cursor-pointer">
              <input
                type="radio"
                name="Anmeldung"
                value="mit Tanzpartner"
                className="radio radio-primary"
                checked={withPartner}
                onChange={() => setWithPartner(true)}
              />
              mit Tanzpartner
            </label>
          </fieldset>

          {withPartner && (
            <fieldset className="space-y-6">
              <legend className="text-sm font-medium">Tanzpartner(in):</legend>
              <div className="flex gap-6">
                <label className="label gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="AnredePartner"
                    value="Herr"
                    className="radio radio-primary"
                  />
                  Herr
                </label>
                <label className="label gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="AnredePartner"
                    value="Frau"
                    className="radio radio-primary"
                  />
                  Frau
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="NamePartner"
                  placeholder="Name*"
                  required
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  name="VornamePartner"
                  placeholder="Vorname*"
                  required
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  name="StraßePartner"
                  placeholder="Straße*"
                  required
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  name="PLZOrtPartner"
                  placeholder="PLZ / Ort*"
                  required
                  className="input input-bordered w-full"
                />
                <input
                  type="tel"
                  name="TelefonPartner"
                  placeholder="Telefon*"
                  required
                  className="input input-bordered w-full"
                />
                <input
                  type="tel"
                  name="MobilPartner"
                  placeholder="Mobil"
                  className="input input-bordered w-full"
                />
                <input
                  type="email"
                  name="E-MailPartner"
                  placeholder="E-Mail*"
                  required
                  className="input input-bordered w-full"
                />
                <input
                  type="date"
                  name="GeburtsdatumPartner"
                  placeholder="Geburtsdatum"
                  className="input input-bordered w-full"
                />
                <input
                  type="text"
                  name="BerufPartner"
                  placeholder="Beruf"
                  className="input input-bordered w-full"
                />
              </div>
            </fieldset>
          )}

          <fieldset className="flex flex-col gap-3">
            <legend className="text-sm font-medium">Zahlungsweise:*</legend>
            <label className="label gap-2 cursor-pointer">
              <input
                type="radio"
                name="Zahlungsweise"
                value="Bar"
                className="radio radio-primary"
                required
                checked={payment === "Bar"}
                onChange={() => setPayment("Bar")}
              />
              Bar
            </label>
            <label className="label gap-2 cursor-pointer">
              <input
                type="radio"
                name="Zahlungsweise"
                value="Überweisung/Dauerauftrag"
                className="radio radio-primary"
                required
                checked={payment === "Überweisung"}
                onChange={() => setPayment("Überweisung")}
              />
              per Überweisung/Dauerauftrag
            </label>
            {payment === "Überweisung" && (
              <div className="text-sm ml-6 space-y-1">
                <p className="font-semibold">Bankverbindung:</p>
                <p>IBAN: DE09 3906 0180 1423 3250 26</p>
                <p>BIC: GENODED1AAC (Aachener Bank)</p>
              </div>
            )}
            <label className="label gap-2 cursor-pointer">
              <input
                type="radio"
                name="Zahlungsweise"
                value="Lastschrifteinzug"
                className="radio radio-primary"
                required
                checked={payment === "Lastschrift"}
                onChange={() => setPayment("Lastschrift")}
              />
              per Lastschrifteinzug
            </label>
            <p className="text-sm">
              Für die Zahlungsweise per Lastschrift ist eine Einzugsermächtigung
              notwendig. Diese erhalten Sie auf Anfrage per Post oder bei
              Kursbeginn vor Ort.
            </p>
          </fieldset>

          <div>
            <label className="label font-medium">
              Wie sind Sie auf uns aufmerksam geworden?
            </label>
            <select name="Quelle" className="select select-bordered w-full">
              <option>bitte wählen</option>
              <option>Google</option>
              <option>Social Media</option>
              <option>Empfehlung</option>
              <option>Flyer/Plakat</option>
              <option>Sonstiges</option>
            </select>
          </div>

          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              className="checkbox checkbox-primary mt-1"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              required
            />
            <span className="text-sm leading-snug">
              Ich habe die{" "}
              <Link href="/footer/agb" className="link link-secondary">
                AGB
              </Link>{" "}
              gelesen und akzeptiert. <br />
              Ich habe die{" "}
              <Link href="/footer/datenschutz" className="link link-secondary">
                Datenschutzerklärung
              </Link>{" "}
              zur Kenntnis genommen und bin mit der Verarbeitung meiner Daten
              einverstanden.
            </span>
          </label>

          <button
            type="submit"
            className="btn btn-primary w-full sm:w-auto"
            disabled={!agreed}
          >
            Absenden
          </button>

          <p className="text-sm text-center text-base-content/70">
            Wir informieren Sie per E-Mail über den Eingang Ihrer Anmeldung.
          </p>
        </form>
      </div>
    </PageSection>
  );
}
