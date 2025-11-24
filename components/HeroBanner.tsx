/* eslint-disable @next/next/no-img-element */
import React from "react";

export type HeroBannerProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageHeight?: number;
  showImage?: boolean;
  children?: React.ReactNode;
};

export function HeroBanner({
  eyebrow,
  title,
  subtitle,
  image,
  imageHeight = 300,   // 👍 DEFAULT HEIGHT HERE
  showImage = true,
  children,
}: HeroBannerProps) {

  const shouldShowImage = showImage && Boolean(image);

  return (
    <section className="w-full bg-[#1F3325]">
<div className="mx-auto max-w-7xl px-6 py-2 md:py-3 flex flex-col md:flex-row items-stretch gap-8 relative">
       {/* LEFT SIDE TEXT */}
<div className="flex-1 z-10">

  {eyebrow && (
    <p className="text-[10px] font-semibold uppercase tracking-[0.20em] text-[#C5A45A] mb-1">
      {eyebrow}
    </p>
  )}

  <h1 className="text-2xl md:text-3xl font-bold text-[#FAFAF8] leading-tight">
    {title}
  </h1>

  {subtitle && (
    <p className="mt-1 text-sm md:text-base text-[#E7E4D9] leading-snug max-w-xl">
      {subtitle}
    </p>
  )}

  {children && (
    <div className="mt-1 flex flex-wrap gap-3">
      {children}
    </div>
  )}

</div>


       {/* RIGHT SIDE IMAGE */}
{shouldShowImage && (
  <div className="hidden md:flex justify-end items-start h-full pointer-events-none">
  <img
  src={image}
  alt={title}
  className="object-contain"
  style={{
    height: imageHeight,        // finally works now
    width: "auto",
    maxWidth: "420px",
    maxHeight: "150px",         // 🔥 ensures image doesn’t exceed 150px
  }}
/>

</div>
)}

      </div>
    </section>

  );
}
