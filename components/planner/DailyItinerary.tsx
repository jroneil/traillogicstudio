export interface ItineraryDay {
  label: string;
  distance?: string;
  elevation?: string;
  camp?: string;
  highlights?: string[];
  notes?: string;
}

export interface DailyItineraryProps {
  title?: string;
  summary?: string;
  days: ItineraryDay[];
}

export function DailyItinerary({ title, summary, days }: DailyItineraryProps) {
  return (
    <section className="space-y-6 rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200">
      {(title || summary) && (
        <header className="space-y-2">
          {title && <h2 className="text-xl font-semibold text-slate-900">{title}</h2>}
          {summary && <p className="text-sm text-slate-600">{summary}</p>}
        </header>
      )}

      <div className="space-y-4">
        {days.map((day) => (
          <article key={day.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-xs">
            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-lg bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
                {day.label}
              </div>
              {day.distance && (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {day.distance}
                </span>
              )}
              {day.elevation && (
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                  {day.elevation}
                </span>
              )}
              {day.camp && (
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                  Camp: {day.camp}
                </span>
              )}
            </div>

            {day.highlights && day.highlights.length > 0 && (
              <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-700">
                {day.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}

            {day.notes && <p className="mt-3 text-sm text-slate-600">{day.notes}</p>}
          </article>
        ))}
      </div>
    </section>
  );
}
