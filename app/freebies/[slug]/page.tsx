import Link from "next/link";
import { notFound } from "next/navigation";
import { getFreebie, getFreebieSlugs } from "@/lib/freebies";

export async function generateStaticParams() {
  return getFreebieSlugs().map((slug) => ({ slug }));
}

export default function FreebieDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const freebie = getFreebie(params.slug);

  if (!freebie) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-10">
      <div className="mb-6 space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#C5A45A]">
          Trail Logic Freebie
        </p>
        <h1 className="text-3xl font-bold text-[#1F3325]">{freebie.title}</h1>
        <p className="text-sm text-[#1F3325]/80">
          Download the PDF for printing, or read the full guide below.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href={`/freebies/${freebie.slug}.pdf`}
            className="inline-flex items-center rounded-md bg-[#1F3325] px-4 py-2 text-sm font-semibold text-[#FAFAF8] shadow hover:bg-[#16271c]"
          >
            Download PDF
          </Link>
          <Link
            href="/freebies"
            className="text-sm font-semibold text-[#1F3325] underline decoration-[#C5A45A] decoration-2 underline-offset-4 hover:text-[#16271c]"
          >
            Back to freebies
          </Link>
        </div>
      </div>

      <div className="prose prose-stone max-w-none text-[#1F3325] prose-headings:text-[#1F3325] prose-strong:text-[#1F3325] prose-a:text-[#1F3325]">
        <div dangerouslySetInnerHTML={{ __html: freebie.html }} />
      </div>
    </div>
  );
}
