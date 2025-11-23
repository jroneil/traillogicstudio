"use client";

import { useState } from "react";
import { Button } from "@/components/UI/Button";

export const metadata = {
  title: "Contact Trail Logic Studio",
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="section bg-background">
      <div className="container max-w-2xl space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-primary">Contact</h1>
        <p className="text-lg text-text/80">
          We&apos;d love to hear from you. Share feedback, product requests, or partnership ideas below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-accent/70 bg-surface p-6 shadow-md">
          <div className="space-y-2">
            <label className="block text-sm font-semibold uppercase tracking-wide text-primary" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              required
              className="w-full rounded-lg border border-accent/60 bg-background px-4 py-2 text-text"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold uppercase tracking-wide text-primary" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-lg border border-accent/60 bg-background px-4 py-2 text-text"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold uppercase tracking-wide text-primary" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full rounded-lg border border-accent/60 bg-background px-4 py-2 text-text"
              placeholder="How can we help?"
            />
          </div>
          <Button type="submit">Submit</Button>
          {submitted && (
            <p className="text-sm text-primary">
              Email us at <a href="mailto:info@TrailLogicStudio.com">info@TrailLogicStudio.com</a>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
