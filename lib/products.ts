import path from "path";
import { extractTitle, getCompiledMdx, getMdxFiles, type CompiledMdx } from "./mdx";
import { markdownToHtml } from "./markdown";

const PRODUCTS_DIR = path.join(process.cwd(), "content", "products");

export type ProductFrontmatter = {
  title: string;
  subtitle: string;
  cover: string;
  tags: string[];
  purchaseUrl: string;
  description?: string;
  icon?: string;
  preview?: string;
  bonus?: string;
  recommended?: string[];
  includes?: string[];
};

export type Product = CompiledMdx<ProductFrontmatter>;

export const getAllProducts = (): Product[] => {
  const products = getMdxFiles<ProductFrontmatter>(PRODUCTS_DIR).map((entry) => {
    const title = extractTitle(entry.frontmatter.title, entry.content, entry.slug);
    const html = markdownToHtml(entry.content);

    return {
      ...entry,
      frontmatter: {
        ...entry.frontmatter,
        title,
      },
      html,
    };
  });

  return products.sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));
};

export const getProductBySlug = (slug: string): Product | null => {
  const compiled = getCompiledMdx<ProductFrontmatter>(PRODUCTS_DIR, slug);
  if (!compiled) return null;

  const title = extractTitle(compiled.frontmatter.title, compiled.content, slug);

  return {
    ...compiled,
    frontmatter: {
      ...compiled.frontmatter,
      title,
    },
  };
};

export const getProductSlugs = (): string[] => getMdxFiles<ProductFrontmatter>(PRODUCTS_DIR).map((file) => file.slug);
