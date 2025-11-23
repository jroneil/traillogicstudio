export const metadata = {
  title: "Trail Logic Studio Resources",
};

const placeholders = [
  "Route planning basics",
  "White Mountains hut planning",
  "Layering for shoulder season",
  "Navigation refreshers",
  "Meal planning for overnights",
  "Winter prep checklist",
];

export default function ResourcesPage() {
  return (
    <div className="section">
      <div className="container space-y-6">
        <h1 className="text-4xl font-bold text-text">Resources & Guides</h1>
        <p className="text-lg text-slate-700">
          Articles, checklists, and route notes are on the way. Here&apos;s a sneak peek at what&apos;s coming.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {placeholders.map((item) => (
            <div key={item} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <p className="text-base font-semibold text-text">{item}</p>
              <p className="text-sm text-slate-700">Coming soon</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
