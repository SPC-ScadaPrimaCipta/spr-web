import fs from "fs";
import path from "path";

const SRC_DIR = path.resolve(__dirname, "../..");
const SOURCE_FILES: string[] = [];

function collectSourceFiles(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith("node_modules") || entry.name.startsWith(".next") || entry.name.startsWith("out")) continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      collectSourceFiles(fullPath);
    } else if (/\.(ts|tsx|js|jsx)$/.test(entry.name) && !entry.name.endsWith(".security.test.ts")) {
      SOURCE_FILES.push(fullPath);
    }
  }
}
collectSourceFiles(SRC_DIR);

describe("Data Exposure Security", () => {
  describe.each(SOURCE_FILES)("File: %s", (filePath) => {
    let content: string;
    let relativePath: string;

    beforeAll(() => {
      content = fs.readFileSync(filePath, "utf-8");
      relativePath = path.relative(SRC_DIR, filePath);
    });

    it("should not contain API keys", () => {
      const apiKeyPatterns = [
        /API_KEY\s*=\s*["'][^"']+["']/i,
        /api_key\s*[:=]\s*["'][^"']+["']/i,
        /apiKey\s*[:=]\s*["'][^"']+["']/i,
        /GEMINI_API_KEY\s*=\s*["'][^"']+["']/i,
      ];

      for (const pattern of apiKeyPatterns) {
        const match = content.match(pattern);
        if (match) {
          const lineNum = content.substring(0, match.index!).split("\n").length;
          expect(match[0]).not.toMatch(pattern);
        }
      }
    });

    it("should not contain hardcoded passwords", () => {
      const passwordPatterns = [
        /password\s*[:=]\s*["'][^"']+["']/i,
        /PASSWORD\s*[:=]\s*["'][^"']+["']/i,
        /passwd\s*[:=]\s*["'][^"']+["']/i,
      ];

      for (const pattern of passwordPatterns) {
        const match = content.match(pattern);
        if (match) {
          expect(match[0]).not.toMatch(pattern);
        }
      }
    });

    it("should not contain database connection strings", () => {
      const dbPatterns = [
        /mongodb(?:\+srv)?:\/\/[^\s"']+/i,
        /postgresql:\/\/[^\s"']+/i,
        /mysql:\/\/[^\s"']+/i,
        /redis:\/\/[^\s"']+/i,
      ];

      for (const pattern of dbPatterns) {
        const match = content.match(pattern);
        if (match) {
          expect(match[0]).not.toMatch(pattern);
        }
      }
    });

    it("should not contain private keys or certificates", () => {
      const keyPatterns = [
        /BEGIN\s+(RSA|EC|DSA|OPENSSH)\s+PRIVATE\s+KEY/,
        /BEGIN\s+CERTIFICATE/,
        /-----BEGIN/,
      ];

      for (const pattern of keyPatterns) {
        const match = content.match(pattern);
        if (match) {
          expect(match[0]).not.toMatch(pattern);
        }
      }
    });

    it("should not contain internal/private IP addresses", () => {
      const ipPatterns = [
        /10\.\d{1,3}\.\d{1,3}\.\d{1,3}/,
        /172\.(1[6-9]|2\d|3[01])\.\d{1,3}\.\d{1,3}/,
        /192\.168\.\d{1,3}\.\d{1,3}/,
        /127\.0\.0\.1/,
      ];

      for (const pattern of ipPatterns) {
        const match = content.match(pattern);
        if (match) {
          expect(match[0]).not.toMatch(pattern);
        }
      }
    });

    it("should not contain hardcoded JWT tokens or secrets", () => {
      const jwtPattern = /eyJ[A-Za-z0-9_-]{10,}\.eyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/;
      const match = content.match(jwtPattern);
      if (match) {
        expect(match[0]).not.toMatch(jwtPattern);
      }
    });

    it("should not contain localhost URLs", () => {
      const localhostPattern = /https?:\/\/localhost(?::\d+)?/i;
      const match = content.match(localhostPattern);
      if (match) {
        expect(match[0]).not.toMatch(localhostPattern);
      }
    });

    it("should not contain hardcoded auth tokens or bearer tokens", () => {
      const tokenPatterns = [
        /Bearer\s+[A-Za-z0-9_-]{20,}/i,
        /token\s*[:=]\s*["'][A-Za-z0-9_-]{20,}["']/i,
      ];

      for (const pattern of tokenPatterns) {
        const match = content.match(pattern);
        if (match) {
          expect(match[0]).not.toMatch(pattern);
        }
      }
    });

    it("should not contain internal company domains or internal URLs", () => {
      const internalUrlPattern = /https?:\/\/(?:intranet|internal|corp|admin|dashboard|portal|api)\./i;
      const match = content.match(internalUrlPattern);
      if (match) {
        expect(match[0]).not.toMatch(internalUrlPattern);
      }
    });
  });
});
