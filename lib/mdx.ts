import fs from "fs";
import path from "path";
import { extractTitleFromContent, markdownToHtml } from "./markdown";

const MDX_EXTENSIONS = [".mdx", ".md"];

type FrontmatterRecord = Record<string, unknown>;

export type ParsedMdx<T extends FrontmatterRecord> = {
  slug: string;
  frontmatter: T;
  content: string;
};

export type CompiledMdx<T extends FrontmatterRecord> = ParsedMdx<T> & {
  html: string;
};

const stripExtension = (filename: string) => filename.replace(/\.(mdx|md)$/i, "");

const parseFrontmatter = (source: string): { frontmatter: FrontmatterRecord; content: string } => {
  if (!source.startsWith("---")) {
    return { frontmatter: {}, content: source.trim() };
  }

  const closingIndex = source.indexOf("\n---", 3);
  if (closingIndex === -1) {
    return { frontmatter: {}, content: source.trim() };
  }

  const rawFrontmatter = source.slice(3, closingIndex).trim();
  const content = source.slice(closingIndex + 4).trim();

  const frontmatter: FrontmatterRecord = {};
  const lines = rawFrontmatter.split(/\r?\n/);

  for (const line of lines) {
    const [key, ...rest] = line.split(":");
    if (!key || rest.length === 0) continue;

    const value = rest.join(":").trim();

    if (value.startsWith("[") && value.endsWith("]")) {
      try {
        frontmatter[key.trim()] = JSON.parse(value.replace(/'/g, '"'));
        continue;
      } catch (error) {
        console.warn(`Unable to parse array value for frontmatter key: ${key}`, error);
      }
    }

    const cleaned = value.replace(/^"|"$/g, "").replace(/^'|'$/g, "");
    frontmatter[key.trim()] = cleaned;
  }

  return { frontmatter, content };
};

const resolveFilePath = (baseDir: string, slug: string): string | null => {
  for (const ext of MDX_EXTENSIONS) {
    const candidate = path.join(baseDir, `${slug}${ext}`);
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }
  return null;
};

export const getMdxFiles = <T extends FrontmatterRecord>(baseDir: string): ParsedMdx<T>[] => {
  if (!fs.existsSync(baseDir)) return [];

  const entries = fs.readdirSync(baseDir).filter((file) =>
    MDX_EXTENSIONS.some((ext) => file.endsWith(ext)),
  );

  return entries.map((filename) => {
    const slug = stripExtension(filename);
    const source = fs.readFileSync(path.join(baseDir, filename), "utf-8");
    const { frontmatter, content } = parseFrontmatter(source);

    return {
      slug,
      frontmatter: frontmatter as T,
      content,
    };
  });
};

export const getCompiledMdx = <T extends FrontmatterRecord>(
  baseDir: string,
  slug: string,
): CompiledMdx<T> | null => {
  const filePath = resolveFilePath(baseDir, slug);
  if (!filePath) return null;

  const source = fs.readFileSync(filePath, "utf-8");
  const { frontmatter, content } = parseFrontmatter(source);
  const html = markdownToHtml(content);

  return {
    slug,
    frontmatter: frontmatter as T,
    content,
    html,
  };
};

export const extractTitle = (frontmatterTitle: unknown, content: string, fallback: string) => {
  if (typeof frontmatterTitle === "string" && frontmatterTitle.trim().length > 0) {
    return frontmatterTitle.trim();
  }

  return extractTitleFromContent(content, fallback);
};
