import { ArrowRight } from "lucide-react";

const screens = [
  "/images/itine/screen-home.png",
  "/images/itine/screen-itinerary.png",
  "/images/itine/screen-maps.png",
];
const labels = ["Destinations", "Your Itinerary", "Google Maps"];

export default function ItineShowcase() {
  const href =
    "https://itine.ai/go?dest=Porto&utm_source=portoitinerary&utm_medium=blog&utm_campaign=showcase_section";

  return (
    <section className="py-14 md:py-20 bg-stone-100/50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-terracotta font-semibold font-sans mb-3">
          Powered by ITINE
        </p>
        <h2 className="text-2xl md:text-3xl font-sans font-bold mb-3 text-stone-800">
          Get this guide as a tappable itinerary
        </h2>
        <p className="text-stone-500 max-w-lg mx-auto mb-10 text-base font-sans">
          Day-by-day plan, audio tours, and one-tap Google Maps — completely
          free.
        </p>

        <div className="flex items-end justify-center gap-4 sm:gap-6 md:gap-8 mb-10">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <div
                className={`relative bg-black rounded-[20px] p-[3px] shadow-xl border border-white/10 overflow-hidden ${
                  i === 1
                    ? "w-[160px] sm:w-[200px] md:w-[240px]"
                    : "w-[120px] sm:w-[160px] md:w-[200px] opacity-85"
                }`}
              >
                <img
                  src={screens[i]}
                  alt={labels[i]}
                  className="w-full rounded-[17px]"
                />
              </div>
              <span className="text-xs sm:text-sm text-stone-500 font-sans">
                {labels[i]}
              </span>
            </div>
          ))}
        </div>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-terracotta px-8 py-3.5 text-sm font-sans font-semibold text-white shadow-lg hover:bg-terracotta-dark transition-all"
        >
          Plan My Trip
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}
