"use client";

export default function ColorBar() {
  const colors = [
    "bg-primary",
    "bg-secondary",
    "bg-accent",
    "bg-info",
    "bg-success",
    "bg-warning",
    "bg-error",
  ];

  return (
    <>
      <style>
        {`
          @keyframes scrollColors {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
      <div className="h-1 w-full overflow-hidden relative">
        <div
          className="absolute top-0 left-0 h-full flex"
          style={{
            width: "1600%",
            animation: "scrollColors 180s linear infinite",
          }}
        >
          {Array.from({ length: 4 * colors.length }).map((_, i) => {
            const color = colors[i % colors.length];
            return (
              <div key={`color-${i}`} className={`w-96 h-full ${color}`} />
            );
          })}
        </div>
      </div>
    </>
  );
}
