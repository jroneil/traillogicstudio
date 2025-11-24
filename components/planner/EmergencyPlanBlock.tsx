export interface EmergencyContact {
  name: string;
  role: string;
  phone: string;
  notes?: string;
}

export interface EmergencyActionStep {
  title: string;
  detail: string;
}

export interface EmergencyPlanBlockProps {
  title?: string;
  contacts: EmergencyContact[];
  actionSteps: EmergencyActionStep[];
  locationPlan?: string;
}

export function EmergencyPlanBlock({ title, contacts, actionSteps, locationPlan }: EmergencyPlanBlockProps) {
  return (
    <section className="space-y-6 rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-slate-200">
      {title && <h2 className="text-xl font-semibold text-slate-900">{title}</h2>}

      {locationPlan && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <p className="font-semibold">Location Plan</p>
          <p className="text-amber-800">{locationPlan}</p>
        </div>
      )}

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4">
          <h3 className="text-sm font-semibold text-slate-900">Emergency Contacts</h3>
          <ul className="space-y-3 text-sm text-slate-700">
            {contacts.map((contact) => (
              <li key={contact.phone} className="rounded-lg bg-slate-50 px-3 py-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="font-semibold text-slate-900">{contact.name}</div>
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-500">{contact.role}</span>
                </div>
                <p className="text-sm text-slate-700">{contact.phone}</p>
                {contact.notes && <p className="text-xs text-slate-600">{contact.notes}</p>}
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3 rounded-xl border border-slate-200 bg-white p-4">
          <h3 className="text-sm font-semibold text-slate-900">Action Steps</h3>
          <ol className="space-y-3 text-sm text-slate-700">
            {actionSteps.map((step, index) => (
              <li key={step.title} className="flex gap-3">
                <span className="mt-0.5 h-6 w-6 rounded-full bg-emerald-100 text-center text-xs font-bold leading-6 text-emerald-700">
                  {index + 1}
                </span>
                <div className="space-y-1">
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-700">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
