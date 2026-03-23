import Breadcrumb from "@/components/shared/Breadcrumb";
import LastVerified from "@/components/shared/LastVerified";
import PostmarkStamp from "@/components/decorative/PostmarkStamp";

interface ItineraryHeroProps {
  duration: number;
  title: string;
  subtitle: string;
  stats: { label: string; value: string }[];
  lastVerified: string;
}

export default function ItineraryHero({
  duration,
  title,
  subtitle,
  stats,
  lastVerified,
}: ItineraryHeroProps) {
  return (
    <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 px-6">
      <div className="mx-auto max-w-3xl">
        <Breadcrumb
          items={[
            { label: "Itineraries", href: "/itineraries" },
            { label: `${duration}-Day Itinerary` },
          ]}
        />

        <div className="relative">
          <PostmarkStamp className="absolute -top-2 -right-4 opacity-15 hidden sm:block" size={80} />

          <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-terracotta mb-3">
            {duration}-Day Itinerary
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-800 leading-tight mb-4">
            {title}
          </h1>
          <p className="font-serif italic text-stone-500 text-lg mb-8">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-4 mb-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="parchment-texture rounded-lg px-4 py-3 postcard-shadow"
              >
                <p className="font-serif text-xl text-stone-800 leading-none">
                  {stat.value}
                </p>
                <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-stone-400 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <LastVerified date={lastVerified} />
        </div>
      </div>
    </section>
  );
}
