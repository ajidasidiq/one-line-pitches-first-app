import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, at most 240 characters, that would convince a friend who has
// never coded to let an AI agent build their first app idea on make.fun.
// It is the whole entry: no code, no explanation, just the pitch itself.
const PITCH =
  "You've been sitting on that app idea for months — just describe it in plain words to make.fun's AI agent and it'll build your first version for you, no code, no cost to try, just your idea finally real.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

const length = [...PITCH].length;
if (length < 1 || length > 240 || PITCH.trim().length === 0) {
  throw new Error(
    `pitch must be 1-240 characters and not only whitespace, got ${length}`,
  );
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, PITCH, "utf8");
console.log(`Wrote ${length} characters to ${OUT_FILE}`);
