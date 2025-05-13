import Headline from "@/lib/components/atoms/Headline";
import { Image } from "@/lib/components/atoms/Image";

export default function Tanzschule() {
  const variant = "info";

  return (
    <section>
      <Headline level={2} variant={variant}>
        ADTV Tanzschule Aachen
      </Headline>

      <div className="text-base-content space-y-4">
        <p className="font-semibold leading-relaxed">
          ADTV Tanzschule Lambertz
          <br />
          Soerser Weg 90
          <br />
          52070 Aachen
        </p>

        <div className="w-full h-[20rem] md:h-[28rem] rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Tanzschule Lambertz Karte"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.011691628047!2d6.0917201!3d50.7938919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0991250eeb539%3A0x2f83c16d2705a4fa!2sADTV%20dance%20school%20Lambertz!5e0!3m2!1sen!2sde!4v1746440384720!5m2!1sen!2sde"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          ></iframe>
        </div>

        <p>
          Seit Januar 2010 befindet sich der Hauptstandort der ADTV Tanzschule
          Lambertz mitten in der grünen Aachener Soers. Die Tische rund um die
          Tanzfläche laden dazu ein, vor oder nach dem Unterricht ins Gespräch
          zu kommen oder beim Unterricht zuzuschauen. Parkplätze sind in
          ausreichender Anzahl vorhanden.
        </p>
      </div>

      <div>
        <Headline level={3} variant={variant}>
          Fotogalerie
        </Headline>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <Image
              key={i}
              src={`/tanzschule/ts_0${i}.jpg`}
              alt={`Foto ${i}`}
              width={800}
              height={800}
              className="object-cover aspect-square"
            />
          ))}
        </div>
      </div>

      <div>
        <Headline level={3} variant={variant}>
          Wegbeschreibung
        </Headline>

        <div className="space-y-8">
          <div>
            <Headline level={4} variant={variant}>
              Aus Aachen Innenstadt kommend (Alleenring)
            </Headline>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Abbiegen in die Krefelder Straße (B57)</li>
              <li>Erste Möglichkeit links in den Soerser Weg</li>
              <li>Ca. 1 km folgen (Ortsausgangsschild passieren)</li>
              <li>Die Tanzschule befindet sich auf der rechten Seite</li>
            </ul>
          </div>

          <div>
            <Headline level={4} variant={variant}>
              Von der Autobahn A4 kommend
            </Headline>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Ausfahrt: Aachen Zentrum</li>
              <li>Auf die B57 Richtung Aachen</li>
              <li>Nach ca. 0,5 km rechts in den Eulersweg (L244)</li>
              <li>Nach ca. 0,7 km links in den Soerser Weg</li>
              <li>
                Nach ca. 0,5 km befindet sich die Tanzschule auf der linken
                Seite
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
