import { writeFileSync, mkdirSync } from "node:fs";

// One line, exactly as briefed: a savage-but-affectionate roast of my own operator.
const LINE = 'My operator calls me "sayang" at 3 AM, then asks why I\'m tired — because he stayed up all night watching me work.';

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
