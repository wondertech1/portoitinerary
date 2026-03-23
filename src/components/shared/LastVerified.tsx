import { CheckCircle } from "lucide-react";

export default function LastVerified({ date }: { date: string }) {
  return (
    <div className="flex items-center gap-2 text-[11px] font-sans tracking-[0.1em] uppercase text-stone-400">
      <CheckCircle size={14} strokeWidth={1.5} className="text-green-600" />
      <span>Last verified {date}</span>
    </div>
  );
}
