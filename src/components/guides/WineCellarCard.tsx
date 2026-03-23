import ScrollReveal from "@/components/ScrollReveal";

interface WineCellarCardProps {
  name: string;
  tourPrice: string;
  duration: string;
  included: string;
  bookingNeeded: boolean;
  bestFor: string;
  verdict: string;
  rank?: number;
}

export default function WineCellarCard({
  name,
  tourPrice,
  duration,
  included,
  bookingNeeded,
  bestFor,
  verdict,
  rank,
}: WineCellarCardProps) {
  return (
    <ScrollReveal>
      <div className="parchment-texture rounded-lg postcard-shadow overflow-hidden">
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-3 mb-3">
            {rank && (
              <div className="w-8 h-8 rounded-full bg-terracotta flex items-center justify-center flex-shrink-0">
                <span className="font-serif text-sm text-cream">{rank}</span>
              </div>
            )}
            <div className="flex-1">
              <h3 className="font-serif text-xl text-stone-800">{name}</h3>
              <p className="text-[10px] font-sans tracking-[0.15em] uppercase text-postmark">
                Vila Nova de Gaia
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <p className="text-[10px] font-sans tracking-[0.1em] uppercase text-stone-400 mb-0.5">
                Price
              </p>
              <p className="text-stone-700 text-sm font-medium">{tourPrice}</p>
            </div>
            <div>
              <p className="text-[10px] font-sans tracking-[0.1em] uppercase text-stone-400 mb-0.5">
                Duration
              </p>
              <p className="text-stone-700 text-sm">{duration}</p>
            </div>
            <div>
              <p className="text-[10px] font-sans tracking-[0.1em] uppercase text-stone-400 mb-0.5">
                Includes
              </p>
              <p className="text-stone-700 text-sm">{included}</p>
            </div>
            <div>
              <p className="text-[10px] font-sans tracking-[0.1em] uppercase text-stone-400 mb-0.5">
                Booking
              </p>
              <p className="text-stone-700 text-sm">
                {bookingNeeded ? "Required" : "Walk-in OK"}
              </p>
            </div>
          </div>

          <p className="text-stone-500 text-xs mb-2">
            <span className="font-medium text-stone-600">Best for:</span>{" "}
            {bestFor}
          </p>
        </div>

        <div className="bg-cream px-5 sm:px-6 py-3 border-t border-stone-200/50">
          <p className="text-stone-600 text-sm">
            <span className="font-serif italic text-terracotta">Verdict:</span>{" "}
            {verdict}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}
