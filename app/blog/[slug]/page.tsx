import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getBlogPosts, markdownToHtml } from "@/lib/blog";

export const metadata = {
  title: "Trail Logic Studio Blog",
};

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const html = markdownToHtml(post.content);

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
          <h1 className="text-4xl font-bold text-primary-dark">{post.title}</h1>
        </div>

        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </article>
  );
}
