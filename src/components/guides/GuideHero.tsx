import Breadcrumb from "@/components/shared/Breadcrumb";
import LastVerified from "@/components/shared/LastVerified";
import PostmarkStamp from "@/components/decorative/PostmarkStamp";

interface GuideHeroProps {
  category: string;
  title: string;
  subtitle: string;
  lastVerified: string;
  breadcrumbItems: { label: string; href?: string }[];
}

export default function GuideHero({
  category,
  title,
  subtitle,
  lastVerified,
  breadcrumbItems,
}: GuideHeroProps) {
  return (
    <section className="pt-28 pb-12 sm:pt-32 sm:pb-16 px-6">
      <div className="mx-auto max-w-3xl">
        <Breadcrumb items={breadcrumbItems} />

        <div className="relative">
          <PostmarkStamp
            className="absolute -top-2 -right-4 opacity-15 hidden sm:block"
            size={80}
          />

          <p className="text-[11px] font-sans font-medium tracking-[0.3em] uppercase text-terracotta mb-3">
            {category}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-800 leading-tight mb-4">
            {title}
          </h1>
          <p className="font-serif italic text-stone-500 text-lg mb-6">
            {subtitle}
          </p>
          <LastVerified date={lastVerified} />
        </div>
      </div>
    </section>
  );
}
