export interface ElevationSegment {
  section: string;
  distance: string;
  elevationGain: string;
  elevationLoss?: string;
  grade?: string;
  notes?: string;
}

export interface ElevationTableProps {
  title?: string;
  description?: string;
  segments: ElevationSegment[];
}

export function ElevationTable({ title, description, segments }: ElevationTableProps) {
  return (
    <section className="space-y-4 rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200">
      {(title || description) && (
        <header className="space-y-1">
          {title && <h2 className="text-xl font-semibold text-slate-900">{title}</h2>}
          {description && <p className="text-sm text-slate-600">{description}</p>}
        </header>
      )}

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="grid grid-cols-5 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-600">
          <div className="px-4 py-3">Section</div>
          <div className="px-4 py-3">Distance</div>
          <div className="px-4 py-3">Gain</div>
          <div className="px-4 py-3">Loss</div>
          <div className="px-4 py-3">Grade</div>
        </div>
        <div className="divide-y divide-slate-100 text-sm text-slate-800">
          {segments.map((segment) => (
            <div key={segment.section} className="grid grid-cols-5">
              <div className="px-4 py-3">
                <div className="font-semibold text-slate-900">{segment.section}</div>
                {segment.notes && <p className="text-xs text-slate-600">{segment.notes}</p>}
              </div>
              <div className="px-4 py-3 text-slate-700">{segment.distance}</div>
              <div className="px-4 py-3 text-slate-700">{segment.elevationGain}</div>
              <div className="px-4 py-3 text-slate-700">{segment.elevationLoss || "-"}</div>
              <div className="px-4 py-3 text-slate-700">{segment.grade || "-"}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
