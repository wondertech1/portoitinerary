"use client";

export default function ItineTopBanner() {
  const href =
    "https://itine.ai/go?dest=Porto&utm_source=portoitinerary&utm_medium=blog&utm_campaign=top_banner";

  return (
    <div
      className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] px-4 py-2"
      style={{ position: "sticky", top: 0, zIndex: 60 }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 sm:gap-5"
      >
        <div className="flex-shrink-0 w-8 h-14 bg-black rounded-[6px] p-[2px] border border-white/20 overflow-hidden">
          <img
            src="/images/itine/screen-itinerary.png"
            alt="ITINE app"
            className="w-full h-full object-cover object-top rounded-[4px]"
          />
        </div>
        <div className="hidden sm:block w-px h-6 bg-white/20" />
        <div className="text-white text-sm sm:text-base font-sans">
          <span className="font-semibold">
            Get this guide as a tappable itinerary — free
          </span>
          <span className="hidden sm:inline text-white/60 ml-2">
            Day-by-day plan, audio tours, one-tap Google Maps
          </span>
        </div>
        <span className="flex-shrink-0 bg-[#f59e0b] hover:bg-[#fbbf24] text-gray-900 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-colors font-sans">
          Plan My Trip
        </span>
      </a>
    </div>
  );
}
