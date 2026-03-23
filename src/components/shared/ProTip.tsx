import { Lightbulb, AlertTriangle, Coins, MapPin } from "lucide-react";
import type { ReactNode } from "react";

const variants = {
  tip: {
    icon: Lightbulb,
    border: "border-l-terracotta",
    bg: "bg-terracotta/5",
    iconColor: "text-terracotta",
    label: "Pro Tip",
  },
  warning: {
    icon: AlertTriangle,
    border: "border-l-amber-500",
    bg: "bg-amber-50",
    iconColor: "text-amber-600",
    label: "Heads Up",
  },
  "money-saver": {
    icon: Coins,
    border: "border-l-green-600",
    bg: "bg-green-50",
    iconColor: "text-green-600",
    label: "Money Saver",
  },
  "local-secret": {
    icon: MapPin,
    border: "border-l-airmail-blue",
    bg: "bg-blue-50",
    iconColor: "text-airmail-blue",
    label: "Local Secret",
  },
};

export default function ProTip({
  variant = "tip",
  children,
}: {
  variant?: keyof typeof variants;
  children: ReactNode;
}) {
  const config = variants[variant];
  const Icon = config.icon;

  return (
    <div
      className={`${config.bg} ${config.border} border-l-3 rounded-r-lg p-4 sm:p-5 my-6`}
    >
      <div className="flex items-start gap-3">
        <Icon size={18} strokeWidth={1.5} className={`${config.iconColor} mt-0.5 flex-shrink-0`} />
        <div>
          <p className={`text-[10px] font-sans font-medium tracking-[0.2em] uppercase ${config.iconColor} mb-1`}>
            {config.label}
          </p>
          <div className="text-stone-600 text-sm leading-relaxed">{children}</div>
        </div>
      </div>
    </div>
  );
}
