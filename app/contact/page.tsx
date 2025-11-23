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
    <div className="section">
      <div className="container max-w-2xl space-y-6">
        <h1 className="text-4xl font-bold text-text">Contact</h1>
        <p className="text-lg text-slate-700">
          We&apos;d love to hear from you. Share feedback, product requests, or partnership ideas below.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border bg-white p-6 shadow-sm">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-text" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-2"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-text" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-2"
              placeholder="you@example.com"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-text" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={4}
              className="w-full rounded-lg border border-border bg-background px-4 py-2"
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
