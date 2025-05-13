"use client";

import PageSection from "@/lib/components/molecules/PageSection";

export default function Philosophie() {
  return (
    <PageSection
      title="Sprechen Sie Walzer?"
      variant="primary"
      titleClass="text-center"
    >
      <p className="text-lg leading-relaxed text-center">
        Tanzen ist eine Sprache, die keine Grenzen kennt – eine Sprache, die
        jeder sprechen sollte. Rücksichtnahme, Vertrauen und Freude stehen im
        Mittelpunkt jedes Tanzkurses.
      </p>
      <p className="italic text-center">
        „Dieses nonverbale Zwiegespräch wie selbstverständlich im Unterricht zu
        vermitteln ist mein tägliches Bestreben.“
        <br />
        <span className="not-italic font-semibold">– Ihre Astrid Lambertz</span>
      </p>
    </PageSection>
  );
}
