/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("fs");
const path = require("path");

const brandGreen = [0x1f / 255, 0x33 / 255, 0x25 / 255];
const brandGold = [0xc5 / 255, 0xa4 / 255, 0x5a / 255];
const freebiesDir = path.join(process.cwd(), "content", "freebies");
const outputDir = path.join(process.cwd(), "public", "freebies");

function ensureOutputDir() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
}

function parseMarkdown(markdown) {
  const lines = markdown.split(/\r?\n/);
  const blocks = [];
  let paragraph = [];

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
      const items = [];
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
          items.push({ text: content, indent });
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

function wrapText(text, size, maxWidth = 492) {
  const words = text.split(/\s+/);
  const lines = [];
  const maxChars = Math.max(16, Math.floor(maxWidth / (size * 0.55)));
  let current = "";
  words.forEach((word) => {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxChars) {
      if (current) lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  });
  if (current) lines.push(current);
  return lines;
}

function blocksToLines(blocks) {
  const lines = [
    { text: "Trail Logic Studio", size: 14, bold: true, indent: 0, color: brandGold },
    { text: "Free Guide Series", size: 11, bold: false, indent: 0, color: brandGreen },
    { type: "spacer", height: 10 },
  ];

  blocks.forEach((block, index) => {
    if (index !== 0) {
      lines.push({ type: "spacer", height: 8 });
    }
    switch (block.type) {
      case "heading": {
        const size = block.depth === 1 ? 20 : block.depth === 2 ? 16 : 14;
        wrapText(block.text, size).forEach((text) =>
          lines.push({ text, size, bold: true, indent: 0, color: brandGreen })
        );
        break;
      }
      case "paragraph": {
        wrapText(block.text, 12).forEach((text) =>
          lines.push({ text, size: 12, bold: false, indent: 0, color: brandGreen })
        );
        break;
      }
      case "list": {
        block.items.forEach((item) => {
          const prefix = item.checkbox ? (item.checkbox === "checked" ? "☑" : "☐") : "•";
          wrapText(`${prefix} ${item.text}`, 12).forEach((text, idx) =>
            lines.push({
              text,
              size: 12,
              bold: false,
              indent: (item.indent / 2) * 12 + (idx > 0 ? 12 : 10),
              color: brandGreen,
            })
          );
        });
        break;
      }
      case "table": {
        const headerLine = block.header.join(" | ");
        lines.push({ text: headerLine, size: 12, bold: true, indent: 0, color: brandGreen });
        lines.push({
          text: "-".repeat(Math.min(80, headerLine.length + 6)),
          size: 10,
          bold: false,
          indent: 0,
          color: brandGreen,
        });
        block.rows.forEach((row) => {
          lines.push({ text: row.join(" | "), size: 11, bold: false, indent: 0, color: brandGreen });
        });
        break;
      }
      default:
        break;
    }
  });
  return lines;
}

function escapePdfText(text) {
  return text.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function buildPages(lines) {
  const pageHeight = 792;
  const margin = 60;
  const lineSpacingMultiplier = 1.2;
  let y = pageHeight - margin;
  const pages = [[]];

  const ensureSpace = (height) => {
    if (y - height < margin) {
      pages.push([]);
      y = pageHeight - margin;
    }
  };

  lines.forEach((line) => {
    if (line.type === "spacer") {
      const gap = line.height ?? 8;
      ensureSpace(gap);
      y -= gap;
      return;
    }
    const fontName = line.bold ? "F2" : "F1";
    const lineHeight = line.size * lineSpacingMultiplier;
    const wrapped = wrapText(line.text, line.size);
    wrapped.forEach((wrappedLine, idx) => {
      ensureSpace(lineHeight);
      y -= lineHeight;
      pages[pages.length - 1].push({
        fontName,
        size: line.size,
        text: wrappedLine,
        x: margin + (line.indent || 0),
        y,
        color: line.color || brandGreen,
      });
      if (idx !== wrapped.length - 1) {
        ensureSpace(lineHeight);
      }
    });
  });

  return pages;
}

function serializePdf(lines) {
  const pagesContent = buildPages(lines);
  const pageHeight = 792;
  const pageWidth = 612;
  const objects = [];

  // Fonts
  objects.push({ id: 3, content: "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>" });
  objects.push({ id: 4, content: "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>" });

  const pageObjects = [];
  let objectId = 5;

  pagesContent.forEach((pageLines) => {
    const contentStream = pageLines
      .map((line) => {
        const color = `${line.color[0].toFixed(3)} ${line.color[1].toFixed(3)} ${line.color[2].toFixed(3)} rg`;
        return `${color}\nBT /${line.fontName} ${line.size} Tf 1 0 0 1 ${line.x.toFixed(2)} ${line.y.toFixed(2)} Tm (${escapePdfText(
          line.text
        )}) Tj ET`;
      })
      .join("\n");

    const contentObjectId = objectId++;
    const pageObjectId = objectId++;
    objects.push({
      id: contentObjectId,
      content: `<< /Length ${Buffer.byteLength(contentStream, "utf8")} >>\nstream\n${contentStream}\nendstream`,
    });
    pageObjects.push(pageObjectId);
    objects.push({
      id: pageObjectId,
      content: `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentObjectId} 0 R >>`,
    });
  });

  objects.push({
    id: 2,
    content: `<< /Type /Pages /Count ${pageObjects.length} /Kids [${pageObjects
      .map((id) => `${id} 0 R`)
      .join(" ")}] >>`,
  });
  objects.push({ id: 1, content: "<< /Type /Catalog /Pages 2 0 R >>" });

  const sorted = objects.sort((a, b) => a.id - b.id);
  let pdf = "%PDF-1.4\n";
  const xref = [0];
  let offset = Buffer.byteLength(pdf, "utf8");
  sorted.forEach((obj) => {
    const body = `${obj.id} 0 obj\n${obj.content}\nendobj\n`;
    xref.push(offset);
    pdf += body;
    offset = Buffer.byteLength(pdf, "utf8");
  });

  pdf += `xref\n0 ${sorted.length + 1}\n0000000000 65535 f \n`;
  xref.slice(1).forEach((pos) => {
    pdf += `${pos.toString().padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${sorted.length + 1} /Root 1 0 R >>\nstartxref\n${offset}\n%%EOF`;
  return pdf;
}

function loadFreebieSlugs() {
  if (!fs.existsSync(freebiesDir)) return [];
  return fs
    .readdirSync(freebiesDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function readFreebie(slug) {
  const filePath = path.join(freebiesDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf-8");
}

function createPdf(slug, markdown) {
  const blocks = parseMarkdown(markdown);
  const lines = blocksToLines(blocks);
  const pdf = serializePdf(lines);
  const outPath = path.join(outputDir, `${slug}.pdf`);
  fs.writeFileSync(outPath, pdf, "binary");
  return outPath;
}

function run() {
  ensureOutputDir();
  const slugs = loadFreebieSlugs();
  if (slugs.length === 0) {
    console.log("No freebies found to convert.");
    return;
  }

  slugs.forEach((slug) => {
    const markdown = readFreebie(slug);
    if (!markdown) return;
    const outputPath = createPdf(slug, markdown);
    console.log(`Generated ${outputPath.replace(process.cwd(), "")}`);
  });
}

run();
