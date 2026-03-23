"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ItineraryHero from "./ItineraryHero";
import DayOverview from "./DayOverview";
import DayBlock from "./DayBlock";
import TimeSlot from "./TimeSlot";
import StopCard from "./StopCard";
import RestaurantPick from "./RestaurantPick";
import BudgetTable from "./BudgetTable";
import RelatedItineraries from "./RelatedItineraries";
import FAQSection from "@/components/shared/FAQSection";
import RelatedContent from "@/components/shared/RelatedContent";
import GuideCTA from "@/components/shared/GuideCTA";
import ProTip from "@/components/shared/ProTip";

interface Stop {
  time: string;
  period: "morning" | "afternoon" | "evening";
  name: string;
  neighborhood?: string;
  description: string;
  duration?: string;
  cost?: string;
  tip?: string;
  image?: string;
}

interface Restaurant {
  name: string;
  cuisine: string;
  price: string;
  whatToOrder: string;
  neighborhood?: string;
  note?: string;
}

interface Day {
  dayNumber: number;
  title: string;
  summary: string;
  stops: Stop[];
  lunch: Restaurant;
  afternoonStops: Stop[];
  eveningStops: Stop[];
  dinner: Restaurant;
}

interface ItineraryData {
  duration: number;
  title: string;
  subtitle: string;
  lastVerified: string;
  stats: { label: string; value: string }[];
  overview: { day: number; title: string; highlights: string[] }[];
  days: Day[];
  budget: {
    rows: { category: string; budget: string; mid: string; luxury: string }[];
    totals: { budget: string; mid: string; luxury: string };
  };
  faqs: { question: string; answer: string }[];
  related: { title: string; description: string; href: string; category: string }[];
}

export default function ItineraryPage({ data }: { data: ItineraryData }) {
  return (
    <>
      <Navigation />
      <main>
        <ItineraryHero
          duration={data.duration}
          title={data.title}
          subtitle={data.subtitle}
          stats={data.stats}
          lastVerified={data.lastVerified}
        />

        <div className="px-6">
          <div className="mx-auto max-w-3xl">
            <DayOverview days={data.overview} />

            {data.days.map((day) => (
              <DayBlock
                key={day.dayNumber}
                dayNumber={day.dayNumber}
                title={day.title}
                summary={day.summary}
              >
                {/* Morning stops */}
                {day.stops.map((stop) => (
                  <TimeSlot key={stop.name} time={stop.time} period={stop.period}>
                    <StopCard
                      name={stop.name}
                      neighborhood={stop.neighborhood}
                      description={stop.description}
                      duration={stop.duration}
                      cost={stop.cost}
                      tip={stop.tip}
                      image={stop.image}
                    />
                  </TimeSlot>
                ))}

                {/* Lunch */}
                <TimeSlot time="Lunch" period="morning">
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-terracotta mb-3">
                      Where to Eat
                    </p>
                    <RestaurantPick {...day.lunch} />
                  </div>
                </TimeSlot>

                {/* Afternoon stops */}
                {day.afternoonStops.map((stop) => (
                  <TimeSlot key={stop.name} time={stop.time} period={stop.period}>
                    <StopCard
                      name={stop.name}
                      neighborhood={stop.neighborhood}
                      description={stop.description}
                      duration={stop.duration}
                      cost={stop.cost}
                      tip={stop.tip}
                      image={stop.image}
                    />
                  </TimeSlot>
                ))}

                {/* Evening stops */}
                {day.eveningStops.map((stop) => (
                  <TimeSlot key={stop.name} time={stop.time} period={stop.period}>
                    <StopCard
                      name={stop.name}
                      neighborhood={stop.neighborhood}
                      description={stop.description}
                      duration={stop.duration}
                      cost={stop.cost}
                      tip={stop.tip}
                      image={stop.image}
                    />
                  </TimeSlot>
                ))}

                {/* Dinner */}
                <TimeSlot time="Dinner" period="evening">
                  <div className="parchment-texture rounded-lg postcard-shadow p-5">
                    <p className="text-[10px] font-sans font-medium tracking-[0.2em] uppercase text-terracotta mb-3">
                      Dinner Pick
                    </p>
                    <RestaurantPick {...day.dinner} />
                  </div>
                </TimeSlot>
              </DayBlock>
            ))}

            {data.duration === 1 && (
              <ProTip variant="tip">
                Got more time? Our{" "}
                <a href="/3-day-porto-itinerary" className="text-terracotta underline">
                  3-day itinerary
                </a>{" "}
                covers Gaia wine cellars, Foz do Douro coast, and Cedofeita&apos;s creative quarter.
              </ProTip>
            )}

            <BudgetTable
              duration={data.duration}
              rows={data.budget.rows}
              totals={data.budget.totals}
            />

            <GuideCTA />

            <FAQSection faqs={data.faqs} />

            <RelatedItineraries currentDuration={data.duration} />

            <RelatedContent items={data.related} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
