import { rm } from "node:fs/promises";

for (const directory of [".build/typescript", "dist"]) {
    await rm(directory, { recursive: true, force: true });
}
