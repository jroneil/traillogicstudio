import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRenderer } from "@/components/MDXRenderer";
import { getPostBySlug, getPostSlugs } from "@/lib/posts";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: `${post.frontmatter.title} | Trail Logic Studio Blog`,
    description: post.frontmatter.description ?? post.frontmatter.title,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="section">
      <div className="container space-y-6">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-semibold text-primary transition hover:text-primary-dark"
        >
          ← Back to all posts
        </Link>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Trail Notes</p>
          <h1 className="text-4xl font-bold text-primary-dark">{post.frontmatter.title}</h1>
        </div>

        <MDXRenderer html={post.html} />
      </div>
    </article>
  );
}
