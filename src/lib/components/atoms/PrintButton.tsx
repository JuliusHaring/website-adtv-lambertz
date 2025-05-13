"use client";

export default function PrintButton() {
  return (
    <div className="no-print">
      <button onClick={() => window.print()} className="btn btn-secondary">
        Als PDF speichern
      </button>
    </div>
  );
}
