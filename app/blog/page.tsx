import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

export const metadata = {
  title: "Trail Logic Studio Blog",
  description: "Latest updates, hiking tips, and planning notes from Trail Logic Studio.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <section className="section">
      <div className="container space-y-8">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold text-primary">Trail Logic Studio Blog</h1>
          <p className="max-w-2xl text-lg text-gray-700">
            Fresh updates, planning ideas, and trail inspiration from the Trail Logic Studio
            team.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col justify-between rounded-xl border border-border bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">Article</p>
                <h2 className="text-2xl font-semibold text-primary-dark group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600">Read the post →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
