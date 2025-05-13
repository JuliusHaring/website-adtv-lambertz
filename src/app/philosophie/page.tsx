"use client";

import Headline from "@/lib/components/atoms/Headline";

export default function Philosophie() {
  return (
    <section>
      <div className="relative ax-w-3xl mx-auto px-6 text-center space-y-6">
        <Headline level={1} variant="primary">
          Sprechen Sie Walzer?
        </Headline>
        <p className="text-lg leading-relaxed">
          Tanzen ist eine Sprache, die keine Grenzen kennt – eine Sprache, die
          jeder sprechen sollte. Rücksichtnahme, Vertrauen und Freude stehen im
          Mittelpunkt jedes Tanzkurses.
        </p>
        <p className="italic">
          „Dieses nonverbale Zwiegespräch wie selbstverständlich im Unterricht
          zu vermitteln ist mein tägliches Bestreben.“
          <br />
          <span className="not-italic font-semibold">
            – Ihre Astrid Lambertz
          </span>
        </p>
      </div>
    </section>
  );
}
