export interface WeatherDay {
  label: string;
  temperature: string;
  conditions: string;
  wind?: string;
  precipitationChance?: string;
  gearNotes?: string;
}

export interface WeatherChecklistProps {
  location?: string;
  timeframe?: string;
  days: WeatherDay[];
}

export function WeatherChecklist({ location, timeframe, days }: WeatherChecklistProps) {
  return (
    <section className="space-y-6 rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200">
      {(location || timeframe) && (
        <header className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
          {location && <span className="font-semibold text-slate-900">{location}</span>}
          {timeframe && (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
              {timeframe}
            </span>
          )}
        </header>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {days.map((day) => (
          <div key={day.label} className="space-y-2 rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-slate-900">{day.label}</span>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                {day.conditions}
              </span>
            </div>
            <div className="text-3xl font-bold text-slate-900">{day.temperature}</div>
            <dl className="space-y-1 text-xs text-slate-600">
              {day.wind && (
                <div className="flex items-center justify-between">
                  <dt className="font-medium text-slate-700">Wind</dt>
                  <dd>{day.wind}</dd>
                </div>
              )}
              {day.precipitationChance && (
                <div className="flex items-center justify-between">
                  <dt className="font-medium text-slate-700">Precip</dt>
                  <dd>{day.precipitationChance}</dd>
                </div>
              )}
            </dl>
            {day.gearNotes && (
              <p className="rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-700">{day.gearNotes}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
