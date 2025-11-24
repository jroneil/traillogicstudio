import Image from "next/image";
import React from "react";

interface HeroBannerProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imageHeight?: number;
  showImage?: boolean;
  children?: React.ReactNode;
}

export function HeroBanner({
  eyebrow,
  title,
  subtitle,
  image,
  imageHeight = 300,
  showImage = true,
  children,
}: HeroBannerProps) {
  const shouldShowImage = showImage !== false && Boolean(image);

  return (
    <section className="w-full bg-[#1F3325] py-5">
      <div className="container">
        <div className="flex items-center justify-between gap-6">
          <div className="space-y-4 text-left text-[#FAFAF8]">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C5A45A]">{eyebrow}</p>
            )}
            <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl">{title}</h1>
            {subtitle && <p className="max-w-2xl text-sm text-[#E8E3D7] md:text-base">{subtitle}</p>}
            {children && <div className="mt-6 flex flex-wrap gap-3">{children}</div>}
          </div>
          {shouldShowImage && (
            <div className="hidden flex-shrink-0 items-center justify-end md:flex">
              <Image
                src={image as string}
                alt=""
                width={imageHeight * 2}
                height={imageHeight}
                style={{ height: imageHeight, width: "auto" }}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
