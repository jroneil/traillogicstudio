import Image from "next/image";
import Link from "next/link";
import { Badge } from "./Badge";
import { MDXRenderer } from "@/components/MDXRenderer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import type { ProductFrontmatter } from "@/lib/products";

export type ProductDetailProps = {
  frontmatter: ProductFrontmatter;
  html: string;
  recommended?: Array<{ slug: string; frontmatter: ProductFrontmatter }>;
};

export function ProductDetail({ frontmatter, html, recommended = [] }: ProductDetailProps) {
  return (
    <div className="space-y-12">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-2xl border border-[#E3D8BD] bg-white shadow-sm">
            <div className="relative aspect-[16/9] w-full bg-[#F7F4ED]">
              {frontmatter.cover ? (
                <Image
                  src={frontmatter.cover}
                  alt={frontmatter.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 700px"
                />
              ) : null}
            </div>
          </div>

          {frontmatter.preview ? (
            <Card>
              <CardHeader>
                <div className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#2F4F3A]">Preview</p>
                  <h3 className="text-xl font-semibold text-[#2F4F3A]">See a page inside</h3>
                </div>
              </CardHeader>
              <CardContent className="flex justify-center bg-[#F7F4ED]">
                <Image
                  src={frontmatter.preview}
                  alt={`${frontmatter.title} preview`}
                  width={540}
                  height={380}
                  className="h-auto w-full max-w-3xl rounded-xl border border-[#E3D8BD] bg-white shadow-sm"
                />
              </CardContent>
            </Card>
          ) : null}
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {frontmatter.tags?.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl font-bold text-[#2F4F3A]">{frontmatter.title}</h1>
            <p className="text-lg text-gray-700">{frontmatter.subtitle}</p>
          </div>

          {frontmatter.includes?.length ? (
            <Card>
              <CardHeader>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#2F4F3A]">What’s Included</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="list-disc space-y-2 pl-5 text-sm text-gray-800">
                  {frontmatter.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ) : null}

          {frontmatter.bonus ? (
            <Card>
              <CardHeader>
                <p className="text-sm font-semibold uppercase tracking-wide text-[#2F4F3A]">Bonus Included</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-800">{frontmatter.bonus}</p>
              </CardContent>
            </Card>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <LinkButton href={frontmatter.purchaseUrl} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              Purchase on Gumroad
            </LinkButton>
            <LinkButton
              href="#details"
              variant="ghost"
              className="w-full justify-center text-sm text-[#2F4F3A] underline underline-offset-4 sm:w-auto"
            >
              Jump to details
            </LinkButton>
          </div>
        </div>
      </div>

      <div id="details" className="space-y-4 rounded-2xl border border-[#E3D8BD] bg-white p-6 shadow-sm">
        <MDXRenderer html={html} />
      </div>

      {recommended.length ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[#2F4F3A]">More to explore</p>
              <h2 className="text-2xl font-bold text-[#2F4F3A]">Recommended products</h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {recommended.map((item) => (
              <Card key={item.slug} className="flex items-center gap-4 p-4">
                {item.frontmatter.cover ? (
                  <div className="relative h-24 w-32 overflow-hidden rounded-lg bg-[#F7F4ED]">
                    <Image
                      src={item.frontmatter.cover}
                      alt={item.frontmatter.title}
                      fill
                      className="object-cover"
                      sizes="200px"
                    />
                  </div>
                ) : null}
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold text-[#2F4F3A]">{item.frontmatter.title}</h3>
                  <p className="text-sm text-gray-700">
                    {item.frontmatter.description ?? item.frontmatter.subtitle}
                  </p>
                  <Link
                    href={`/store/${item.slug}`}
                    className="text-sm font-semibold text-[#2F4F3A] underline underline-offset-4"
                  >
                    View product →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
