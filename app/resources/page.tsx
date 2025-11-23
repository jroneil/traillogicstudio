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
    <div className="section bg-background">
      <div className="container space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-primary">Resources & Guides</h1>
        <p className="text-lg text-text/80">
          Articles, checklists, and route notes are on the way. Here&apos;s a sneak peek at what&apos;s coming.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {placeholders.map((item) => (
            <div key={item} className="rounded-2xl border border-accent/70 bg-surface p-5 shadow-md">
              <p className="text-base font-semibold tracking-tight text-primary">{item}</p>
              <p className="text-sm text-text/80">Coming soon</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
