type Props = {
  src: string;
  className?: string;
};

export default function MapEmbed({ src, className }: Props) {
  return (
    <div
      className={`w-full h-100 overflow-hidden rounded-lg shadow-lg ${className ?? ""}`}
    >
      <iframe
        src={src}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full border-0"
      />
    </div>
  );
}
