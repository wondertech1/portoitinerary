interface PostageStampProps {
  emoji?: string;
  label?: string;
  className?: string;
}

export default function PostageStamp({
  emoji = "🍷",
  label = "PORTUGAL",
  className = "",
}: PostageStampProps) {
  return (
    <div
      className={`inline-flex flex-col items-center justify-center w-14 h-16 bg-parchment ${className}`}
      style={{
        border: "2px dashed #8b7355",
        borderRadius: "2px",
      }}
      aria-hidden="true"
    >
      <span className="text-lg leading-none">{emoji}</span>
      <span
        className="text-[6px] font-sans font-bold tracking-wider text-postmark mt-1 uppercase"
      >
        {label}
      </span>
    </div>
  );
}
