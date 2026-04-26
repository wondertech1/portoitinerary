import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function PortoIntro() {
  return (
    <section className="py-16 sm:py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-800 text-center mb-8">
            Why Porto?
          </h2>
        </ScrollReveal>

        <div className="font-sans text-stone-600 text-sm leading-relaxed space-y-4">
          <ScrollReveal>
            <p>
              Porto is a city that earns its reputation the hard way. There are
              no theme parks, no manufactured experiences, no tourist zones
              separated from real life. The Ribeira waterfront where you take
              photos is the same place fishermen mend nets in the morning. The
              wine cellars in Gaia where you taste 20-year tawnies are the same
              cellars that have stored port since the 1700s. Everything in Porto
              is real, worn-in, and unapologetic about it.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              The city is built on granite hillsides above the Douro river, and
              walking it is a workout. Narrow lanes drop steeply from the
              cathedral to the waterfront, every surface covered in blue-and-white
              azulejo tiles that catch the light differently depending on the
              hour. The food is heavy, generous, and built for people who work
              with their hands:{" "}
              <Link
                href="/guides/best-francesinha-porto"
                className="text-terracotta hover:underline"
              >
                francesinhas
              </Link>{" "}
              drowned in beer sauce, bacalhau cooked 365 ways, and tripas stew
              that gave locals their &ldquo;tripeiros&rdquo; nickname.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              Then there is the wine. Porto is the only city in the world where
              an entire industry — the{" "}
              <Link
                href="/guides/port-wine-cellars-guide"
                className="text-terracotta hover:underline"
              >
                port wine trade
              </Link>{" "}
              — is visible from the city center. The cellars line the Gaia
              hillside across the river, their red-tile roofs a reminder that
              Porto has been exporting its signature drink since the 1600s.
              Tasting port here is different from anywhere else: you&apos;re
              standing where the wine was made, aged, and shipped, in cellars
              that smell of oak and centuries.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              Porto is also more affordable than almost any Western European
              destination. A full meal with wine costs €10-15 at a traditional
              tasca. A premium wine cellar tasting is €25. A night in a good
              hotel is €80-120. The quality-to-price ratio is extraordinary, and
              it shows in how relaxed travelers are here — nobody is counting
              euros or skipping experiences.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <p>
              We built this site because the best Porto guides are either too
              generic (listing every attraction without an opinion) or too
              selective (showing only Instagram spots). Our{" "}
              <Link
                href="/itineraries"
                className="text-terracotta hover:underline"
              >
                itineraries
              </Link>{" "}
              include exact times, specific restaurant orders, and honest
              verdicts on what&apos;s worth your time — because vague
              recommendations waste it.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
