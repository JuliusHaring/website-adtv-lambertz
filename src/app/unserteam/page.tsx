import Link from "next/link";
import PageSection from "@/lib/components/molecules/PageSection";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unser Team – ADTV Tanzschule Lambertz",
  description:
    "Lernen Sie das Team der ADTV Tanzschule Lambertz kennen: Unsere Tanzlehrerinnen und Mitarbeiterinnen stellen sich vor.",
  alternates: {
    canonical: "https://www.tanzschule-lambertz.de/unser-team",
  },
  openGraph: {
    title: "Unser Team – ADTV Tanzschule Lambertz",
    description:
      "Einblicke in das engagierte Team der Tanzschule Lambertz: Lernen Sie unsere Tanzlehrerinnen und Assistentinnen kennen.",
    url: "https://www.tanzschule-lambertz.de/unser-team",
    siteName: "ADTV Tanzschule Lambertz",
    type: "website",
    locale: "de_DE",
  },
};

export default function UnserTeam() {
  const variant = "accent";

  return (
    <PageSection title="Unser Team" variant={variant}>
      <p>Das Team der ADTV Tanzschule Lambertz stellt sich vor:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-base-100 shadow-md overflow-hidden">
          <figure className="h-64 relative bg-neutral">
            <Image
              fill
              src="/unser_team/astrid.jpg"
              alt="Astrid Lambertz"
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title">Astrid Lambertz</h3>
            <p>Inhaberin und Gründerin der ADTV Tanzschule Lambertz</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Ausgebildete ADTV Tanzlehrerin</li>
              <li>ADTV Salsa Instructor</li>
              <li>ADTV Kindertanzlehrerin</li>
            </ul>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md overflow-hidden">
          <figure className="h-64 relative bg-neutral">
            <Image
              fill
              src="/unser_team/elvira.jpg"
              alt="Elvira Schäfer"
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title">Elvira Schäfer</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Kursassistenz</li>
              <li>Kursvertretung</li>
              <li>Veranstaltungsorganisation</li>
            </ul>
          </div>
        </div>

        <div className="card bg-base-100 shadow-md overflow-hidden">
          <figure className="h-64 relative bg-neutral">
            <Image
              fill
              src="/unser_team/daniela.jpg"
              alt="Daniela Loenißen"
              className="h-full w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <h3 className="card-title">Daniela Loenißen</h3>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Kursassistenz</li>
              <li>Kursvertretung</li>
              <li>Veranstaltungshelferin</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-sm text-center text-gray-500">
        Bilder © by{" "}
        <Link
          href="https://www.fotogen-studio.de"
          className="link link-accent"
          target="_blank"
        >
          fotogen FOTOSTUDIO Gudrun Bertram
        </Link>
      </p>
    </PageSection>
  );
}
