import { cn } from "@/lib/utils";

type MDXRendererProps = {
  html: string;
  className?: string;
};

export function MDXRenderer({ html, className }: MDXRendererProps) {
  return (
    <div
      className={cn(
        "prose prose-stone max-w-none prose-h2:text-[#2F4F3A] prose-h3:text-[#2F4F3A] prose-a:text-[#2F4F3A]",
        "prose-strong:text-[#1F2933] prose-em:text-[#1F2933] prose-headings:tracking-tight",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
