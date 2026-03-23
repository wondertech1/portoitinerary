import ScrollReveal from "@/components/ScrollReveal";

interface ComparisonRow {
  name: string;
  [key: string]: string;
}

interface ComparisonTableProps {
  title: string;
  columns: string[];
  rows: ComparisonRow[];
}

export default function ComparisonTable({
  title,
  columns,
  rows,
}: ComparisonTableProps) {
  return (
    <ScrollReveal>
      <div className="my-8">
        <h3 className="font-serif text-xl text-stone-800 mb-4">{title}</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-stone-200">
                {columns.map((col) => (
                  <th
                    key={col}
                    className="text-left py-3 px-3 text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400 whitespace-nowrap"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.name} className="border-b border-stone-100">
                  {columns.map((col) => (
                    <td
                      key={col}
                      className={`py-3 px-3 ${
                        col === columns[0]
                          ? "font-medium text-stone-700"
                          : "text-stone-600"
                      }`}
                    >
                      {row[col.toLowerCase().replace(/\s+/g, "_")] || row[col] || "—"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </ScrollReveal>
  );
}
