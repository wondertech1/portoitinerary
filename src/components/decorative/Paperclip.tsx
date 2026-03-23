interface PaperclipProps {
  color?: string;
  className?: string;
}

export default function Paperclip({
  color = "#c67a5c",
  className = "",
}: PaperclipProps) {
  return (
    <svg
      width="20"
      height="40"
      viewBox="0 0 20 40"
      className={`group-hover:animate-[paperclip-wobble_0.3s_ease-in-out] ${className}`}
      aria-hidden="true"
    >
      <path
        d="M 10,2 C 4,2 2,6 2,10 L 2,28 C 2,34 6,38 10,38 C 14,38 18,34 18,28 L 18,12 C 18,8 15,5 12,5 C 9,5 6,8 6,12 L 6,26"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
