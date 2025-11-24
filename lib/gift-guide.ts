import fs from "fs";
import path from "path";

export type GiftGuideArticle = {
  slug: string;
  title: string;
  summary: string;
  content: string;
};

const GIFT_GUIDE_DIR = path.join(process.cwd(), "content", "gift-guide");

const escapeHtml = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const renderInlineMarkdown = (text: string) =>
  escapeHtml(text)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');

export const markdownToHtml = (markdown: string) => {
  const lines = markdown.split(/\r?\n/);
  let html = "";
  let inList = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!line) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      const level = Math.min(6, headingMatch[1].length);
      const content = renderInlineMarkdown(headingMatch[2]);
      html += `<h${level}>${content}</h${level}>`;
      continue;
    }

    if (line.startsWith("- ")) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${renderInlineMarkdown(line.slice(2))}</li>`;
      continue;
    }

    if (inList) {
      html += "</ul>";
      inList = false;
    }

    html += `<p>${renderInlineMarkdown(line)}</p>`;
  }

  if (inList) {
    html += "</ul>";
  }

  return html;
};

const extractTitle = (markdown: string, fallback: string) => {
  const match = markdown.match(/^#\s+(.*)$/m);
  return match ? match[1].trim() : fallback;
};

const extractSummary = (markdown: string) => {
  const lines = markdown.split(/\r?\n/);

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    return line.replace(/^[-*]\s+/, "");
  }

  return "";
};

const readArticle = (slug: string): GiftGuideArticle | null => {
  const fullPath = path.join(GIFT_GUIDE_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const content = fs.readFileSync(fullPath, "utf-8").trim();
  const title = extractTitle(content, slug.replace(/-/g, " "));
  const summary = extractSummary(content);

  return { slug, title, summary, content };
};

export const getGiftGuideArticles = (): GiftGuideArticle[] => {
  if (!fs.existsSync(GIFT_GUIDE_DIR)) return [];

  const files = fs.readdirSync(GIFT_GUIDE_DIR).filter((file) => file.endsWith(".md"));

  return files
    .map((file) => readArticle(file.replace(/\.md$/, "")))
    .filter((article): article is GiftGuideArticle => Boolean(article))
    .sort((a, b) => a.title.localeCompare(b.title));
};

export const getGiftGuideArticle = (slug: string): GiftGuideArticle | null =>
  readArticle(slug);
