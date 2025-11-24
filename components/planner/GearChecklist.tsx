export interface GearItem {
  label: string;
  packed?: boolean;
  notes?: string;
  required?: boolean;
  weight?: string;
}

export interface GearCategory {
  name: string;
  items: GearItem[];
}

export interface GearChecklistProps {
  title?: string;
  subtitle?: string;
  categories: GearCategory[];
  onToggleItem?: (categoryName: string, label: string, checked: boolean) => void;
}

export function GearChecklist({ title, subtitle, categories, onToggleItem }: GearChecklistProps) {
  return (
    <section className="space-y-6 rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200">
      {(title || subtitle) && (
        <header className="space-y-2">
          {title && <h2 className="text-xl font-semibold text-slate-900">{title}</h2>}
          {subtitle && <p className="text-sm text-slate-600">{subtitle}</p>}
        </header>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {categories.map((category) => (
          <div
            key={category.name}
            className="space-y-3 rounded-xl border border-slate-200 bg-white/70 p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold text-slate-900">{category.name}</h3>
              <span className="text-xs font-medium uppercase tracking-wide text-slate-500">Checklist</span>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              {category.items.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-3 rounded-lg border border-transparent px-2 py-1 hover:border-slate-200"
                >
                  <label className="flex flex-1 items-start gap-3">
                    <input
                      type="checkbox"
                      className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                      defaultChecked={item.packed}
                      onChange={(event) =>
                        onToggleItem?.(category.name, item.label, event.target.checked)
                      }
                    />
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-slate-900">{item.label}</span>
                        {item.required && (
                          <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[11px] font-semibold text-rose-700">
                            Required
                          </span>
                        )}
                        {item.weight && (
                          <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                            {item.weight}
                          </span>
                        )}
                      </div>
                      {item.notes && <p className="text-xs text-slate-600">{item.notes}</p>}
                    </div>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
