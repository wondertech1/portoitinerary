import ScrollReveal from "@/components/ScrollReveal";

interface RestaurantCardProps {
  name: string;
  cuisine: string;
  price: string;
  neighborhood: string;
  whatToOrder: string;
  tip?: string;
  highlight?: boolean;
}

export default function RestaurantCard({
  name,
  cuisine,
  price,
  neighborhood,
  whatToOrder,
  tip,
  highlight = false,
}: RestaurantCardProps) {
  return (
    <ScrollReveal>
      <div
        className={`parchment-texture rounded-lg postcard-shadow p-5 sm:p-6 ${
          highlight ? "border-l-3 border-l-terracotta" : ""
        }`}
      >
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <h3 className="font-serif text-xl text-stone-800">{name}</h3>
            <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark">
              {neighborhood} &middot; {cuisine}
            </p>
          </div>
          <span
            className={`text-sm font-sans font-medium px-2.5 py-0.5 rounded-sm flex-shrink-0 ${
              price === "€"
                ? "bg-green-100 text-green-700"
                : price === "€€"
                  ? "bg-ochre/10 text-ochre"
                  : "bg-terracotta/10 text-terracotta"
            }`}
          >
            {price}
          </span>
        </div>
        <p className="text-stone-600 text-sm leading-relaxed mb-2">
          <span className="font-medium text-stone-700">Order:</span>{" "}
          {whatToOrder}
        </p>
        {tip && (
          <p className="text-stone-500 text-xs italic">{tip}</p>
        )}
      </div>
    </ScrollReveal>
  );
}
