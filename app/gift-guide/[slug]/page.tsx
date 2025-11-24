import Link from "next/link";
import { notFound } from "next/navigation";
import { getGiftGuideArticle, getGiftGuideArticles, markdownToHtml } from "@/lib/gift-guide";

export const metadata = {
  title: "Trail Logic Holiday Gift Guide",
};

export function generateStaticParams() {
  return getGiftGuideArticles().map((article) => ({ slug: article.slug }));
}

export default function GiftGuideArticlePage({ params }: { params: { slug: string } }) {
  const article = getGiftGuideArticle(params.slug);

  if (!article) {
    notFound();
  }

  const html = markdownToHtml(article.content);

  return (
    <article className="section">
      <div className="container space-y-6">
        <Link
          href="/gift-guide"
          className="inline-flex items-center text-sm font-semibold text-primary transition hover:text-primary-dark"
        >
          ← Back to gift guides
        </Link>

        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Holiday 2024</p>
          <h1 className="text-4xl font-bold text-primary-dark">{article.title}</h1>
          {article.summary ? <p className="text-gray-700">{article.summary}</p> : null}
        </div>

        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </article>
  );
}
