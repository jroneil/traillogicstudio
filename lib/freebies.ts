import fs from "fs";
import path from "path";

type ListItem = {
  text: string;
  indent: number;
  checkbox?: "checked" | "unchecked";
};

type Block =
  | { type: "heading"; depth: number; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: ListItem[] }
  | { type: "table"; header: string[]; rows: string[][] };

export type Freebie = {
  slug: string;
  title: string;
  description: string;
  markdown: string;
  html: string;
};

const freebiesDir = path.join(process.cwd(), "content", "freebies");

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function parseMarkdown(markdown: string): Block[] {
  const lines = markdown.split(/\r?\n/);
  const blocks: Block[] = [];
  let paragraph: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: "paragraph", text: paragraph.join(" ").trim() });
      paragraph = [];
    }
  };

  for (let i = 0; i < lines.length; i += 1) {
    const rawLine = lines[i];
    const line = rawLine.trimEnd();

    if (!line.trim()) {
      flushParagraph();
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      flushParagraph();
      blocks.push({
        type: "heading",
        depth: headingMatch[1].length,
        text: headingMatch[2].trim(),
      });
      continue;
    }

    const separatorLine = lines[i + 1]?.match(/^\s*\|?\s*-+/);
    if (line.includes("|") && separatorLine) {
      flushParagraph();
      const tableLines = [line];
      i += 1; // skip separator line
      while (i + 1 < lines.length && lines[i + 1].includes("|")) {
        tableLines.push(lines[i + 1]);
        i += 1;
      }

      const [headerLine, ...rowLines] = tableLines;
      const header = headerLine
        .split("|")
        .map((cell) => cell.trim())
        .filter(Boolean);
      const rows = rowLines.map((row) =>
        row
          .split("|")
          .map((cell) => cell.trim())
          .filter(Boolean)
      );
      blocks.push({ type: "table", header, rows });
      continue;
    }

    const listMatch = line.match(/^(\s*)([-*+]\s+|\d+\.\s+)(.*)$/);
    if (listMatch) {
      flushParagraph();
      const items: ListItem[] = [];
      let pointer = i;
      while (pointer < lines.length) {
        const current = lines[pointer];
        const match = current.match(/^(\s*)([-*+]\s+|\d+\.\s+)(.*)$/);
        if (!match) break;
        const indent = match[1].length;
        const content = match[3].trim();
        const checkboxMatch = content.match(/^\[( |x|X)\]\s*(.*)$/);
        if (checkboxMatch) {
          items.push({
            text: checkboxMatch[2].trim(),
            indent,
            checkbox: checkboxMatch[1].toLowerCase() === "x" ? "checked" : "unchecked",
          });
        } else {
          items.push({ text: content, indent, checkbox: undefined });
        }
        pointer += 1;
      }
      blocks.push({ type: "list", items });
      i = pointer - 1;
      continue;
    }

    paragraph.push(line.trim());
  }

  flushParagraph();
  return blocks;
}

function blocksToHtml(blocks: Block[]): string {
  return blocks
    .map((block) => {
      switch (block.type) {
        case "heading": {
          const tag = `h${Math.min(block.depth, 6)}`;
          return `<${tag}>${escapeHtml(block.text)}</${tag}>`;
        }
        case "paragraph":
          return `<p>${escapeHtml(block.text)}</p>`;
        case "list": {
          const listItems = block.items
            .map((item) => {
              const prefix = item.checkbox
                ? `<span aria-hidden="true">${item.checkbox === "checked" ? "☑" : "☐"}</span> `
                : "";
              return `<li style="margin-left:${item.indent * 4}px">${prefix}${escapeHtml(item.text)}</li>`;
            })
            .join("");
          return `<ul>${listItems}</ul>`;
        }
        case "table": {
          const header = block.header
            .map((cell) => `<th>${escapeHtml(cell)}</th>`)
            .join("");
          const rows = block.rows
            .map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join("")}</tr>`)
            .join("");
          return `<table><thead><tr>${header}</tr></thead><tbody>${rows}</tbody></table>`;
        }
        default:
          return "";
      }
    })
    .join("\n");
}

function extractTitle(markdown: string): string {
  const headingLine = markdown
    .split(/\r?\n/)
    .find((line) => line.trim().startsWith("#"));
  return headingLine ? headingLine.replace(/^#+\s*/, "").trim() : "Trail Logic Freebie";
}

function extractDescription(markdown: string): string {
  const blocks = parseMarkdown(markdown);
  const paragraph = blocks.find((block) => block.type === "paragraph") as
    | { type: "paragraph"; text: string }
    | undefined;
  if (paragraph?.text) return paragraph.text;
  return "Trail Logic planning tips to keep you moving with confidence.";
}

function renderHtml(markdown: string): string {
  const blocks = parseMarkdown(markdown);
  return blocksToHtml(blocks);
}

export function getFreebieSlugs(): string[] {
  if (!fs.existsSync(freebiesDir)) return [];
  return fs
    .readdirSync(freebiesDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getFreebie(slug: string): Freebie | null {
  const filePath = path.join(freebiesDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const markdown = fs.readFileSync(filePath, "utf-8");

  return {
    slug,
    title: extractTitle(markdown),
    description: extractDescription(markdown),
    markdown,
    html: renderHtml(markdown),
  };
}

export function getAllFreebies(): Freebie[] {
  return getFreebieSlugs()
    .map((slug) => getFreebie(slug))
    .filter((freebie): freebie is Freebie => Boolean(freebie));
}
