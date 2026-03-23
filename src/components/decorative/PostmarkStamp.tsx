interface PostmarkStampProps {
  date?: string;
  className?: string;
  size?: number;
}

export default function PostmarkStamp({
  date = "15 MAR 2026",
  className = "",
  size = 64,
}: PostmarkStampProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      className={className}
      aria-hidden="true"
      style={{ opacity: 0.25 }}
    >
      {/* Outer ring */}
      <circle cx="40" cy="40" r="36" fill="none" stroke="#8b7355" strokeWidth="2" />
      {/* Inner ring */}
      <circle cx="40" cy="40" r="30" fill="none" stroke="#8b7355" strokeWidth="1" />
      {/* Horizontal lines through center */}
      <line x1="8" y1="34" x2="72" y2="34" stroke="#8b7355" strokeWidth="1" />
      <line x1="8" y1="46" x2="72" y2="46" stroke="#8b7355" strokeWidth="1" />
      {/* Date text */}
      <text
        x="40"
        y="42"
        textAnchor="middle"
        fontSize="7"
        fontFamily="sans-serif"
        fontWeight="bold"
        fill="#8b7355"
      >
        {date}
      </text>
      {/* PORTO text along top */}
      <text
        x="40"
        y="24"
        textAnchor="middle"
        fontSize="8"
        fontFamily="sans-serif"
        fontWeight="bold"
        letterSpacing="3"
        fill="#8b7355"
      >
        PORTO
      </text>
    </svg>
  );
}
