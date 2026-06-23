import fs from "fs";
import path from "path";
import { describe, it, expect } from "vitest";

const ROOT_DIR = path.resolve(__dirname, "../../..");

describe("TypeScript Configuration Security", () => {
  const tsconfigPath = path.join(ROOT_DIR, "tsconfig.json");
  const tsconfig = JSON.parse(fs.readFileSync(tsconfigPath, "utf-8"));

  it("should have strict mode enabled to prevent type-safety bypasses", () => {
    expect(tsconfig.compilerOptions.strict).toBe(true);
  });

  it("should not have allowJs enabled in production (can mask type issues)", () => {
    if (process.env.NODE_ENV === "production") {
      expect(tsconfig.compilerOptions.allowJs).toBe(false);
    }
  });

  it("should not allow JS files to be imported without type checking", () => {
    if (tsconfig.compilerOptions.allowJs === true) {
      expect(tsconfig.compilerOptions.checkJs).toBe(true);
    }
  });
});

describe("Next.js Configuration Security", () => {
  const nextConfigPath = path.join(ROOT_DIR, "next.config.js");
  const content = fs.readFileSync(nextConfigPath, "utf-8");

  it("should not set dangerouslySetInnerHTML in config", () => {
    expect(content).not.toContain("dangerouslySetInnerHTML");
  });

  it("should not disable security features unnecessarily", () => {
    expect(content).not.toContain("poweredByHeader: false");
  });
});

describe("Environment Variable Security", () => {
  const envExamplePath = path.join(ROOT_DIR, ".env.example");
  const content = fs.readFileSync(envExamplePath, "utf-8");

  it("should not contain real API keys or secrets", () => {
    const lines = content.split("\n");
    for (const line of lines) {
      if (line.includes("=") && !line.startsWith("#")) {
        const value = line.split("=")[1]?.trim().replace(/["']/g, "");
        if (value && value !== "") {
          expect(value).not.toMatch(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d_-]{20,}$/);
        }
      }
    }
  });

  it("should not contain real passwords", () => {
    expect(content).not.toMatch(/password\s*=\s*[^#\s"']+/i);
  });

  it("should not contain real tokens or secret keys", () => {
    expect(content).not.toMatch(/secret\s*=\s*[^#\s"']+/i);
    expect(content).not.toMatch(/token\s*=\s*[^#\s"']+/i);
  });
});

describe("Package.json Security", () => {
  const pkgPath = path.join(ROOT_DIR, "package.json");
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

  it("should not have postinstall scripts that could execute arbitrary code", () => {
    if (pkg.scripts?.postinstall) {
      expect(pkg.scripts.postinstall).not.toMatch(/curl|wget|chmod|\|\s*bash/);
    }
  });
});
