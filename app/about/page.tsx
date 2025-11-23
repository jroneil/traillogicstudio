export const metadata = {
  title: "About Trail Logic Studio",
};

export default function AboutPage() {
  return (
    <div className="section">
      <div className="container space-y-6">
        <h1 className="text-4xl font-bold text-text">About Trail Logic Studio</h1>
        <p className="text-lg text-slate-700">
          Trail Logic Studio creates practical, printable planners for people who love the outdoors. We started on the
          rocky, weather-shifting trails of the White Mountains and expanded to cover the adventures we love most.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-text">Why we build planners</h2>
            <p className="mt-3 text-slate-700">
              Great trips start with clear plans. Our templates make it easy to align your route, gear, meals, and safety
              contingencies so you can focus on the experience instead of the logistics.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-text">Where we explore</h2>
            <p className="mt-3 text-slate-700">
              We design each edition for a specific place and activity. The White Mountains edition blends elevation-aware
              pacing, bailout planning, and hut/parking notes that only locals keep in their back pocket.
            </p>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-background p-6">
          <h2 className="text-xl font-semibold text-text">What&apos;s next</h2>
          <p className="mt-3 text-slate-700">
            Adirondacks, Vermont, Maine, canoe camping, winter travel, bikepacking—we have a long roadmap. Tell us what
            you want to see next, and we&apos;ll prioritize the routes and activities that help the community most.
          </p>
        </div>
      </div>
    </div>
  );
}
