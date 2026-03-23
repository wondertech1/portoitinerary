import ScrollReveal from "@/components/ScrollReveal";

interface BudgetRow {
  category: string;
  budget: string;
  mid: string;
  luxury: string;
}

interface BudgetTableProps {
  duration: number;
  rows: BudgetRow[];
  totals: { budget: string; mid: string; luxury: string };
}

export default function BudgetTable({
  duration,
  rows,
  totals,
}: BudgetTableProps) {
  return (
    <ScrollReveal>
      <div className="my-8">
        <h3 className="font-serif text-xl text-stone-800 mb-4">
          {duration}-Day Budget Breakdown
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-stone-200">
                <th className="text-left py-3 pr-4 text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-stone-400">
                  Category
                </th>
                <th className="text-center py-3 px-4 text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-green-700">
                  Budget
                </th>
                <th className="text-center py-3 px-4 text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-ochre">
                  Mid-Range
                </th>
                <th className="text-center py-3 px-4 text-[10px] font-sans font-medium tracking-[0.15em] uppercase text-terracotta">
                  Luxury
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.category} className="border-b border-stone-100">
                  <td className="py-3 pr-4 text-stone-700 font-medium">
                    {row.category}
                  </td>
                  <td className="py-3 px-4 text-center text-stone-600">
                    {row.budget}
                  </td>
                  <td className="py-3 px-4 text-center text-stone-600">
                    {row.mid}
                  </td>
                  <td className="py-3 px-4 text-center text-stone-600">
                    {row.luxury}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-stone-300">
                <td className="py-3 pr-4 font-serif text-lg text-stone-800">
                  Total
                </td>
                <td className="py-3 px-4 text-center font-serif text-lg text-green-700">
                  {totals.budget}
                </td>
                <td className="py-3 px-4 text-center font-serif text-lg text-ochre">
                  {totals.mid}
                </td>
                <td className="py-3 px-4 text-center font-serif text-lg text-terracotta">
                  {totals.luxury}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </ScrollReveal>
  );
}
