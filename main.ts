import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

const line = "SLEEP — one star. Loyal customer for thirty years and it still ghosts me every weeknight, then shows up uninvited in every meeting.";
writeFileSync(join(outputDir, "entry.txt"), `${line}\n`, "utf8");
