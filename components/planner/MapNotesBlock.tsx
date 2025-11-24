export interface WaypointNote {
  name: string;
  coordinates?: string;
  description?: string;
  caution?: string;
}

export interface MapNotesBlockProps {
  region?: string;
  overview?: string;
  waypoints: WaypointNote[];
}

export function MapNotesBlock({ region, overview, waypoints }: MapNotesBlockProps) {
  return (
    <section className="space-y-6 rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200">
      {(region || overview) && (
        <header className="space-y-2">
          {region && <h2 className="text-xl font-semibold text-slate-900">{region}</h2>}
          {overview && <p className="text-sm text-slate-600">{overview}</p>}
        </header>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {waypoints.map((waypoint) => (
          <article key={waypoint.name} className="space-y-2 rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-900">{waypoint.name}</h3>
              {waypoint.caution && (
                <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-800">
                  Caution
                </span>
              )}
            </div>
            {waypoint.coordinates && (
              <p className="text-xs font-medium text-slate-600">{waypoint.coordinates}</p>
            )}
            {waypoint.description && <p className="text-sm text-slate-700">{waypoint.description}</p>}
            {waypoint.caution && (
              <p className="rounded-lg bg-amber-50 px-3 py-2 text-xs text-amber-900">{waypoint.caution}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
