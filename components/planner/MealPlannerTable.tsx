export interface MealPlanEntry {
  day: string;
  meal: string;
  menu: string;
  calories?: number;
  prep?: string;
  notes?: string;
}

export interface MealPlannerTableProps {
  heading?: string;
  summary?: string;
  entries: MealPlanEntry[];
}

export function MealPlannerTable({ heading, summary, entries }: MealPlannerTableProps) {
  return (
    <section className="space-y-4 rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200">
      {(heading || summary) && (
        <header className="space-y-1">
          {heading && <h2 className="text-xl font-semibold text-slate-900">{heading}</h2>}
          {summary && <p className="text-sm text-slate-600">{summary}</p>}
        </header>
      )}

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="grid grid-cols-5 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600">
          <div className="px-4 py-3">Day</div>
          <div className="px-4 py-3">Meal</div>
          <div className="px-4 py-3">Menu</div>
          <div className="px-4 py-3">Calories</div>
          <div className="px-4 py-3">Prep</div>
        </div>
        <div className="divide-y divide-slate-100 text-sm text-slate-800">
          {entries.map((entry) => (
            <div key={`${entry.day}-${entry.meal}-${entry.menu}`} className="grid grid-cols-5">
              <div className="px-4 py-3 font-medium text-slate-900">{entry.day}</div>
              <div className="px-4 py-3 text-slate-700">{entry.meal}</div>
              <div className="px-4 py-3">
                <div className="font-semibold text-slate-900">{entry.menu}</div>
                {entry.notes && <p className="text-xs text-slate-600">{entry.notes}</p>}
              </div>
              <div className="px-4 py-3 text-slate-700">{entry.calories ? `${entry.calories} kcal` : "-"}</div>
              <div className="px-4 py-3 text-slate-700">{entry.prep || ""}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
