import fs from "fs";
import path from "path";

const ROOT_DIR = path.resolve(__dirname, "../../..");

describe("Source Map & Debug Security", () => {
  const outDir = path.join(ROOT_DIR, "out");

  if (fs.existsSync(outDir)) {
    it("built output should not contain source maps (.map files)", () => {
      const mapFiles: string[] = [];

      function walk(dir: string) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            walk(fullPath);
          } else if (entry.name.endsWith(".map")) {
            mapFiles.push(fullPath);
          }
        }
      }

      walk(outDir);
      expect(mapFiles).toHaveLength(0);
    });

    it("built output should not expose debug or dev-only comments", () => {
      const htmlFiles: string[] = [];

      function walk(dir: string) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            walk(fullPath);
          } else if (entry.name.endsWith(".html")) {
            htmlFiles.push(fullPath);
          }
        }
      }

      walk(outDir);

      for (const htmlFile of htmlFiles) {
        const content = fs.readFileSync(htmlFile, "utf-8");
        expect(content).not.toMatch(/<!--\s*(?:debug|dev|todo|fixme|hack|xyz)/i);
      }
    });
  } else {
    it.skip("build output directory not found. Run 'npm run build' first.", () => {});
  }
});

describe("Unused Dangerous Dependencies", () => {
  const pkgPath = path.join(ROOT_DIR, "package.json");
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
  const allDeps = { ...pkg.dependencies, ...pkg.devDependencies };

  const dangerousDeps = [
    { name: "eval", reason: "code execution" },
    { name: "sandbox", reason: "security bypass potential" },
  ];

  for (const dep of dangerousDeps) {
    it(`should not depend on '${dep.name}' (${dep.reason})`, () => {
      if (allDeps[dep.name]) {
        expect(allDeps[dep.name]).toBeUndefined();
      }
    });
  }
});

describe("License & Metadata Security", () => {
  it("README should not contain API keys or credentials", () => {
    const readmePath = path.join(ROOT_DIR, "README.md");
    if (fs.existsSync(readmePath)) {
      const content = fs.readFileSync(readmePath, "utf-8");
      const secretPatterns = [
        /AIza[0-9A-Za-z_-]{35}/,
        /sk-[A-Za-z0-9_-]{20,}/,
        /ghp_[A-Za-z0-9_-]{20,}/,
        /gho_[A-Za-z0-9_-]{20,}/,
        /xox[baprs]-[A-Za-z0-9_-]{10,}/,
      ];

      for (const pattern of secretPatterns) {
        expect(content).not.toMatch(pattern);
      }
    }
  });
});
