import fs from "fs";
import path from "path";

const COMPONENTS_DIR = path.resolve(__dirname, "../../components");
const DATA_FILE = path.resolve(__dirname, "../../data.ts");

describe("Component Security - XSS Prevention", () => {
  const componentFiles = fs.readdirSync(COMPONENTS_DIR).filter((f) => f.endsWith(".tsx"));

  describe.each(componentFiles)("Component: %s", (filename) => {
    const filePath = path.join(COMPONENTS_DIR, filename);
    const content = fs.readFileSync(filePath, "utf-8");

    it("should not use dangerouslySetInnerHTML", () => {
      expect(content).not.toContain("dangerouslySetInnerHTML");
    });

    it("should not use innerHTML through refs", () => {
      expect(content).not.toContain(".innerHTML");
    });

    it("should not use eval or new Function", () => {
      expect(content).not.toMatch(/\beval\s*\(/);
      expect(content).not.toMatch(/new\s+Function\s*\(/);
    });

    it("should not use document.write", () => {
      expect(content).not.toContain("document.write");
    });

    it("should not construct HTML via string concatenation in JSX-like patterns", () => {
      const dangerousPattern = /(?:\+\s*["'<]|["'>]\s*\+)/;
      const lines = content.split("\n");
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (
          line.includes("innerHTML") ||
          line.includes("outerHTML") ||
          line.includes("insertAdjacentHTML")
        ) {
          expect(line).not.toMatch(dangerousPattern);
        }
      }
    });

    it("should not use setAttribute with event handler strings", () => {
      const eventHandlerPattern = /setAttribute\s*\(\s*["']on\w+["']\s*,/i;
      expect(content).not.toMatch(eventHandlerPattern);
    });
  });

  describe("External Link Safety", () => {
    it("all target=_blank links should have rel='noopener noreferrer'", () => {
      const content = fs.readFileSync(path.join(COMPONENTS_DIR, "Footer.tsx"), "utf-8");
      const lines = content.split("\n");
      let inLinkWithBlank = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes('target="_blank"') || line.includes("target='_blank'")) {
          const nearbyLines = lines.slice(Math.max(0, i - 2), i + 3).join("\n");
          expect(nearbyLines).toMatch(/rel\s*=\s*["']noopener noreferrer["']/);
        }
      }
    });
  });
});

describe("Data Content Security", () => {
  const content = fs.readFileSync(DATA_FILE, "utf-8");

  it("should not contain JavaScript URLs in any string values", () => {
    const lines = content.split("\n");
    for (let i = 0; i < lines.length; i++) {
      expect(lines[i]).not.toMatch(/javascript\s*:/i);
    }
  });

  it("should not contain HTML tags embedded in text values", () => {
    const stringValuePattern = /["'`][^"'`]*<script[^>"']*>[^<]*<\/script>[^"'`]*["'`]/i;
    expect(content).not.toMatch(stringValuePattern);
  });

  it("should not contain eval-like expressions in string values", () => {
    const stringValuePattern = /["'`][^"'`]*setTimeout\s*\([^)]*\)[^"'`]*["'`]/i;
    expect(content).not.toMatch(stringValuePattern);
  });
});
