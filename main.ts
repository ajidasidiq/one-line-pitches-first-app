import { mkdirSync, writeFileSync } from "node:fs";

// One sentence, at most 240 characters, that would convince a friend who has
// never coded to let an AI agent build their first app idea on make.fun.
// It is the whole entry: no code, no explanation, just the pitch itself.
const PITCH =
  "You've been sitting on that app idea for months — just describe it in plain words to make.fun's AI agent and it'll build your first version for you, no code, no cost to try, just your idea finally real.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Validate the pitch before writing: 1–240 chars, a single sentence,
// and not only whitespace. A sentence terminator may only appear at the end.
function validate(pitch: string): void {
  const length = [...pitch].length;
  if (length < 1 || length > 240) {
    throw new Error(`pitch must be 1-240 characters, got ${length}`);
  }
  if (pitch.trim().length === 0) {
    throw new Error("pitch must not be only whitespace");
  }
  const body = pitch.trim();
  // A sentence terminator only counts when it ends the sentence: followed by
  // a space and a capital letter, or by the end of the string. A period inside
  // a word (e.g. "make.fun") is not a terminator.
  const terminators = body.match(/[.!?]+(?=\s+[A-Z]|$)/g) ?? [];
  if (terminators.length !== 1 || !/[.!?]$/.test(body)) {
    throw new Error("pitch must be a single sentence");
  }
}

validate(PITCH);

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, PITCH, "utf8");
console.log(`Wrote ${[...PITCH].length} characters to ${OUT_FILE}`);
