"use client";

import { useState } from "react";
import { HeroBanner } from "@/components/HeroBanner";
import { Button } from "@/components/UI/Button";

export default function ContactContent() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
     <HeroBanner
  eyebrow="CONTACT"
  title="Get in Touch"
  subtitle="We’d love to hear from you. Whether you have a question about our products, need support, or want to discuss a collaboration, our team is here to help."
  showImage={true}
  image="/branding/TrailLogic_Section.png"
  imageHeight={150}
>
        <p className="text-sm md:text-base text-[#E7E4D9]">
          Share feedback, product requests, or partnership ideas below. We&apos;ll get back to you within two business days.
        </p>
      </HeroBanner>

      <div className="section">
        <div className="container space-y-10">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-xl border border-[#C5A45A] bg-[#FAFAF8] p-6 shadow-md md:p-10"
            >
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#2F4F3A]" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  required
                  className="w-full rounded-md border border-[#2F4F3A] bg-white px-4 py-3 text-sm text-[#0F1A12] focus:border-[#C5A45A] focus:outline-none focus:ring-2 focus:ring-[#C5A45A]"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#2F4F3A]" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-[#2F4F3A] bg-white px-4 py-3 text-sm text-[#0F1A12] focus:border-[#C5A45A] focus:outline-none focus:ring-2 focus:ring-[#C5A45A]"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-[#2F4F3A]" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full rounded-md border border-[#2F4F3A] bg-white px-4 py-3 text-sm text-[#0F1A12] focus:border-[#C5A45A] focus:outline-none focus:ring-2 focus:ring-[#C5A45A]"
                  placeholder="How can we help?"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-[#2F4F3A] text-white shadow-md hover:bg-[#1F3325] focus-visible:outline-[#C5A45A]"
              >
                Submit
              </Button>
              {submitted && (
                <p className="text-sm text-[#2F4F3A]">
                  Email us at <a href="mailto:info@TrailLogicStudio.com" className="font-semibold text-[#C5A45A]">info@TrailLogicStudio.com</a>
                </p>
              )}
            </form>

            <div className="rounded-xl border border-[#E2D5B2] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#2F4F3A]">Why reach out?</h3>
              <ul className="mt-4 space-y-3 text-sm text-[#0F1A12]/80">
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#C5A45A]" aria-hidden />
                  Product demos, pricing, and tailored recommendations.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#C5A45A]" aria-hidden />
                  Support for implementation, onboarding, and training.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#C5A45A]" aria-hidden />
                  Partnerships, media inquiries, and event opportunities.
                </li>
              </ul>
              <div className="mt-6 rounded-lg bg-[#FAFAF8] p-4 text-sm text-[#2F4F3A]">
                Prefer email? Reach us directly at
                <a className="ml-2 font-semibold text-[#C5A45A]" href="mailto:info@TrailLogicStudio.com">
                  info@TrailLogicStudio.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
