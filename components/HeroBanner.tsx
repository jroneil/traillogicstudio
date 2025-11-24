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
  imageHeight = 300,
  showImage = true,
  children,
}: HeroBannerProps) {
  const shouldShowImage = showImage && Boolean(image);

  return (
    <section className="relative w-full bg-[#1F3325] overflow-hidden">
      <div className="py-5 relative">
        <div className="container relative z-10">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A45A]">{eyebrow}</p>
          ) : null}

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#FAFAF8] md:text-4xl">{title}</h1>

          {subtitle ? (
            <p className="mt-4 max-w-xl text-sm md:text-base text-[#E7E4D9]">{subtitle}</p>
          ) : null}

          {children ? <div className="mt-6">{children}</div> : null}
        </div>

        {shouldShowImage ? (
          <div className="absolute inset-y-0 right-0 hidden md:flex items-center justify-end pointer-events-none">
            <img
              src={image}
              alt={title}
              className="w-auto object-contain"
              style={{ height: imageHeight }}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
