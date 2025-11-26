import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetail } from "@/components/store/ProductDetail";
import { getAllProducts, getProductBySlug, getProductSlugs } from "@/lib/products";

export function generateStaticParams() {
  return getProductSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: `${product.frontmatter.title} | Trail Logic Studio`,
    description: product.frontmatter.description ?? product.frontmatter.subtitle,
    openGraph: {
      title: product.frontmatter.title,
      description: product.frontmatter.subtitle,
      images: product.frontmatter.cover ? [product.frontmatter.cover] : undefined,
    },
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const recommended = getAllProducts().filter((item) => {
    if (item.slug === product.slug) return false;

    if (product.frontmatter.recommended?.length) {
      return product.frontmatter.recommended.includes(item.slug);
    }

    return true;
  });

  const curated = product.frontmatter.recommended?.length
    ? recommended.filter((item) => product.frontmatter.recommended?.includes(item.slug)).slice(0, 3)
    : recommended.slice(0, 3);

  return <ProductDetail frontmatter={product.frontmatter} html={product.html} recommended={curated} />;
}
