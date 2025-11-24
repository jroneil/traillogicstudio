export interface RoutePlanField {
  label: string;
  value?: string;
  placeholder?: string;
  helperText?: string;
  required?: boolean;
}

export interface RoutePlanFormProps {
  title?: string;
  description?: string;
  fields: RoutePlanField[];
  onUpdateField?: (label: string, value: string) => void;
}

export function RoutePlanForm({ title, description, fields, onUpdateField }: RoutePlanFormProps) {
  return (
    <section className="space-y-6 rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200">
      {(title || description) && (
        <header className="space-y-2">
          {title && <h2 className="text-xl font-semibold text-slate-900">{title}</h2>}
          {description && <p className="text-sm text-slate-600">{description}</p>}
        </header>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => (
          <label key={field.label} className="block space-y-2 rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-900">{field.label}</span>
              {field.required && (
                <span className="text-xs font-semibold uppercase tracking-wide text-rose-600">Required</span>
              )}
            </div>
            <input
              type="text"
              value={field.value || ""}
              placeholder={field.placeholder}
              onChange={(event) => onUpdateField?.(field.label, event.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            />
            {field.helperText && <p className="text-xs text-slate-600">{field.helperText}</p>}
          </label>
        ))}
      </div>
    </section>
  );
}
