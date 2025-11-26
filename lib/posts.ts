import path from "path";
import { extractTitle, getCompiledMdx, getMdxFiles, type CompiledMdx } from "./mdx";
import { markdownToHtml } from "./markdown";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

type PostFrontmatter = {
  title?: string;
  description?: string;
};

export type Post = CompiledMdx<PostFrontmatter>;

export const getAllPosts = (): Post[] => {
  return getMdxFiles<PostFrontmatter>(BLOG_DIR)
    .map((entry) => {
      const title = extractTitle(entry.frontmatter.title, entry.content, entry.slug);

      return {
        ...entry,
        frontmatter: {
          ...entry.frontmatter,
          title,
        },
        html: markdownToHtml(entry.content),
      };
    })
    .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title));
};

export const getPostBySlug = (slug: string): Post | null => {
  const compiled = getCompiledMdx<PostFrontmatter>(BLOG_DIR, slug);
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

export const getPostSlugs = (): string[] => getMdxFiles<PostFrontmatter>(BLOG_DIR).map((file) => file.slug);
