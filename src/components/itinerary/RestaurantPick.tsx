import ScrollReveal from "@/components/ScrollReveal";

interface RestaurantPickProps {
  name: string;
  cuisine: string;
  price: string;
  whatToOrder: string;
  neighborhood?: string;
  note?: string;
}

export default function RestaurantPick({
  name,
  cuisine,
  price,
  whatToOrder,
  neighborhood,
  note,
}: RestaurantPickProps) {
  return (
    <ScrollReveal>
      <div className="flex items-start gap-4 py-4 border-b border-stone-200 last:border-0">
        <div className="w-10 h-10 rounded-lg bg-terracotta/10 flex items-center justify-center flex-shrink-0">
          <span className="text-lg">🍽️</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <h4 className="font-serif text-lg text-stone-800">{name}</h4>
            <span className="text-[10px] font-sans tracking-[0.1em] uppercase text-stone-400">
              {cuisine}
            </span>
            <span className="text-[10px] font-sans font-medium tracking-[0.1em] text-terracotta">
              {price}
            </span>
          </div>
          {neighborhood && (
            <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark mt-0.5">
              {neighborhood}
            </p>
          )}
          <p className="text-stone-600 text-sm mt-1">
            <span className="font-medium">Order:</span> {whatToOrder}
          </p>
          {note && (
            <p className="text-stone-500 text-xs italic mt-1">{note}</p>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
