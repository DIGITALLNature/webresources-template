import { globSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { defineConfig } from "rolldown";

const GLOBAL_NAME = "TODO";
const ENTRY_PATTERNS = ["form/*.form.js", "ribbon/*.ribbon.js"];
const COMPILE_DIR = path.resolve(".build/typescript");
const OUTPUT_DIR = path.resolve("dist");

const entries = globSync(ENTRY_PATTERNS, { cwd: COMPILE_DIR });
if (entries.length === 0) {
  throw new Error("No form or ribbon entry points found");
}

export default defineConfig(entries.map((entry) => ({
    input: path.join(COMPILE_DIR, entry),
    tsconfig: false,
    plugins: [{
      name: "typescript-source-maps",
      async load(id) {
        const relative = path.relative(COMPILE_DIR, id);
        if (relative.startsWith("..") || path.isAbsolute(relative) || !id.endsWith(".js")) {
          return null;
        }
        return {
          code: await readFile(id, "utf8"),
          map: JSON.parse(await readFile(`${id}.map`, "utf8")),
        };
      },
    }],
    onwarn(warning) {
      throw new Error(warning.message);
    },
    output: {
      file: path.join(OUTPUT_DIR, "scripts", entry),
      format: "iife",
      name: GLOBAL_NAME,
      extend: true,
      minify: false,
      sourcemap: "inline",
    },
})));
