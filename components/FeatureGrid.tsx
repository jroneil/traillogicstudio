const FEATURES = [
  {
    title: "Plan",
    description: "Step-by-step itineraries that keep you organized and on track from trailhead to summit.",
  },
  {
    title: "Pack",
    description: "Gear, food, and emergency checklists tailored to New England backcountry adventures.",
  },
  {
    title: "Hike Confidently",
    description: "Safety notes, bailout planning, and map-ready prompts to keep you prepared.",
  },
];

export function FeatureGrid() {
  return (
    <section className="section bg-background">
      <div className="container">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Why Trail Logic Studio?</p>
            <h2 className="text-3xl font-semibold tracking-tight text-primary">Plan. Pack. Hike Confidently.</h2>
          </div>
          <p className="max-w-2xl text-text/80">
            Practical planners designed by hikers for hikers. Each product focuses on clarity,
            preparedness, and making the most of your time outside.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-accent/70 bg-surface p-6 shadow-md"
            >
              <div className="mb-4 h-10 w-10 rounded-lg bg-primary/15" />
              <h3 className="text-lg font-semibold tracking-tight text-primary">{feature.title}</h3>
              <p className="mt-2 text-text/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
