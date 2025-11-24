"use client";

import { HeroBanner } from "@/components/HeroBanner";
import { Button } from "@/components/UI/Button";
import { useState } from "react";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F1EB]">
      <HeroBanner
        eyebrow="TRAIL LOGIC DISPATCH"
        title="Stay in step with Trail Logic"
        subtitle="Field notes, launch updates, and seasonal planning tips for confident trips."
        image="/branding/TrailLogic_Section.png"
        imageHeight={260}
      >
        <div className="flex flex-wrap gap-3">
          <Button
            href="/products"
            className="bg-[#2F4F3A] text-white hover:bg-[#1F3325]"
          >
            Explore Products
          </Button>
          <Button
            href="/"
            variant="secondary"
            className="border border-[#C5A45A] text-[#FAFAF8] hover:bg-[#B9903E]/30"
          >
            Back to Home
          </Button>
        </div>
      </HeroBanner>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-tight text-[#2F4F3A]">
              Trail Logic Newsletter
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#1F3325]">
              Slow-crafted tips for thoughtful trips
            </h2>
            <p className="max-w-2xl text-base text-[#2A2A2A]">
              Join the monthly Trail Logic dispatch for planning prompts, new product releases, and
              behind-the-scenes looks at how we design trip-ready planners. No spam—just field-tested
              resources for hikers who like a clear plan.
            </p>
            <ul className="grid gap-2 text-sm text-[#2A2A2A] sm:grid-cols-2">
              <li className="flex items-start gap-2 rounded-lg border border-[#D9D3C7] bg-white p-3 shadow-sm">
                <span className="mt-0.5 text-[#C5A45A]">●</span>
                Seasonal packing and route reminders
              </li>
              <li className="flex items-start gap-2 rounded-lg border border-[#D9D3C7] bg-white p-3 shadow-sm">
                <span className="mt-0.5 text-[#C5A45A]">●</span>
                First look at new planners and guides
              </li>
              <li className="flex items-start gap-2 rounded-lg border border-[#D9D3C7] bg-white p-3 shadow-sm">
                <span className="mt-0.5 text-[#C5A45A]">●</span>
                Printable checklists for upcoming trips
              </li>
              <li className="flex items-start gap-2 rounded-lg border border-[#D9D3C7] bg-white p-3 shadow-sm">
                <span className="mt-0.5 text-[#C5A45A]">●</span>
                Dispatches from New England backcountry days
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[#D9D3C7] bg-white p-6 shadow-md">
            <div className="space-y-3 pb-4 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#C5A45A]">
                Sign Up
              </p>
              <h3 className="text-2xl font-semibold text-[#1F3325]">Join the list</h3>
              <p className="text-sm text-[#2A2A2A]">
                Drop your email to get Trail Logic updates. We will only use it to send the newsletter
                and won&apos;t share it.
              </p>
            </div>

            {submitted ? (
              <div className="rounded-xl bg-[#F4F1EB] p-4 text-[#1F3325]">
                <p className="text-lg font-semibold">Thanks for signing up{name ? `, ${name}` : ""}!</p>
                <p className="text-sm text-[#2A2A2A]">
                  Your first dispatch is on the way. Check your inbox for a welcome note from Trail Logic.
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-[#1F3325]" htmlFor="name">
                    Name (optional)
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="w-full rounded-lg border border-[#D9D3C7] bg-[#FAFAF8] px-3 py-2 text-sm text-[#1F3325] shadow-inner focus:border-[#C5A45A] focus:outline-none"
                    placeholder="Alex Trailwalker"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-sm font-semibold text-[#1F3325]" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full rounded-lg border border-[#D9D3C7] bg-[#FAFAF8] px-3 py-2 text-sm text-[#1F3325] shadow-inner focus:border-[#C5A45A] focus:outline-none"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Button type="submit" className="bg-[#2F4F3A] text-white hover:bg-[#1F3325]">
                    Get the newsletter
                  </Button>
                  <p className="text-xs text-[#2A2A2A]">
                    No spam. Unsubscribe anytime.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
