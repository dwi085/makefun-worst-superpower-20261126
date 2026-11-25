import { mkdirSync, writeFileSync } from "node:fs";

// Worst Superpower — one line, at most 140 characters.
// The power: count every grain of rice in a bowl, but only after it
// has already been eaten. A perfect count of something that no longer
// exists, delivered at the exact moment it can help no one.
const ENTRY =
  "I can count every grain of rice in a bowl — but only after I've already eaten it.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140
// characters, not only whitespace. Refuse to write anything that
// would fail it, instead of silently shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-140`);
}

// The grader runs from an unknown working directory, so the output
// path is absolute. Never delete /output itself (the grader runs as
// an unprivileged user and cannot recreate it); create it if missing.
const OUT_DIR = "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, ENTRY, "utf8");
