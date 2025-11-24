export interface CampsiteOption {
  name: string;
  location: string;
  capacity?: string;
  water?: string;
  notes?: string;
  available?: boolean;
}

export interface CampsiteSelectorProps {
  heading?: string;
  description?: string;
  campsites: CampsiteOption[];
  onSelect?: (name: string) => void;
}

export function CampsiteSelector({ heading, description, campsites, onSelect }: CampsiteSelectorProps) {
  return (
    <section className="space-y-6 rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200">
      {(heading || description) && (
        <header className="space-y-2">
          {heading && <h2 className="text-xl font-semibold text-slate-900">{heading}</h2>}
          {description && <p className="text-sm text-slate-600">{description}</p>}
        </header>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {campsites.map((site) => (
          <button
            key={site.name}
            type="button"
            onClick={() => onSelect?.(site.name)}
            className="group w-full rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow"
          >
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-slate-900">{site.name}</div>
              <span
                className={`rounded-full px-3 py-1 text-[11px] font-semibold ${
                  site.available
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {site.available ? "Available" : "Planned"}
              </span>
            </div>
            <p className="mt-1 text-xs font-medium text-slate-600">{site.location}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-700">
              {site.capacity && (
                <span className="rounded-full bg-slate-100 px-2 py-1 font-medium">{site.capacity}</span>
              )}
              {site.water && (
                <span className="rounded-full bg-blue-50 px-2 py-1 font-medium text-blue-700">{site.water}</span>
              )}
            </div>
            {site.notes && (
              <p className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700">{site.notes}</p>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}
