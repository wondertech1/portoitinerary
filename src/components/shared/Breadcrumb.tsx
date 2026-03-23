import Link from "next/link";
import JsonLd from "./JsonLd";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `https://portoitinerary.com${item.href}` } : {}),
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-[11px] font-sans tracking-[0.1em] uppercase text-stone-400">
          {allItems.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-stone-300">/</span>}
              {item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-terracotta transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-stone-600">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
