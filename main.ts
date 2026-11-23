import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const line = "SLEEP — one star. Thirty-year customer. Doesn't show up at night. Shows up in every meeting.";
writeFileSync(join(outputDir, "entry.txt"), `${line}\n`, "utf8");
