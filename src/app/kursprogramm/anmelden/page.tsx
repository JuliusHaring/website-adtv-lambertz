import AnmeldenForm from "@/lib/components/forms/AnmeldenForm";
import { Suspense } from "react";

export default function AnmeldenPage() {
  return (
    <Suspense fallback={<div className="p-6">Lade Anmeldeformular...</div>}>
      <AnmeldenForm />
    </Suspense>
  );
}
