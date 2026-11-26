import { mkdirSync, writeFileSync } from "node:fs";
import { join as joinPath } from "node:path";

const forecast = "Tomorrow in Bramblewick: snow at dawn, 4 centimetres, all of it landing on the same parked car. The owner has been notified twice and refuses to move it.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(joinPath(outputDir, "entry.txt"), forecast, "utf8");
