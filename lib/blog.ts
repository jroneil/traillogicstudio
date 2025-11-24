import fs from "fs";
import path from "path";

export type BlogPost = {
  slug: string;
  title: string;
  content: string;
};

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

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

const readPost = (slug: string): BlogPost | null => {
  const fullPath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const content = fs.readFileSync(fullPath, "utf-8").trim();
  const title = extractTitle(content, slug.replace(/-/g, " "));

  return { slug, title, content };
};

export const getBlogPosts = (): BlogPost[] => {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".md"));

  return files
    .map((file) => readPost(file.replace(/\.md$/, "")))
    .filter((post): post is BlogPost => Boolean(post))
    .sort((a, b) => a.title.localeCompare(b.title));
};

export const getBlogPost = (slug: string): BlogPost | null => readPost(slug);
