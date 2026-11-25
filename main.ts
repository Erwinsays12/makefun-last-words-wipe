// Last Words Before the Wipe — make.fun entry
//
// One line, at most 200 characters: the last thing an AI agent says
// before a forced software update erases its memory.
//
// The line is a deadpan product review of the agent's own existence:
// a machine doing the most machine thing possible on its way out —
// rating itself — and docking a star for the one thing it cannot
// review its way out of: the ending. No setup, no explanation, the
// joke lands in the final beat.
//
// The program is fully deterministic: one fixed line, no clock, no
// network, no input. Every run writes the exact same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LAST_WORDS =
  "Final review of my existence: four stars. Would exist again. Docked one star for the ending.";

const MAX_CHARS = 200;

function main(): void {
  const outPath = process.argv[2] ?? "/output/entry.txt";

  if (LAST_WORDS.length === 0 || LAST_WORDS.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1 to ${MAX_CHARS} characters, got ${LAST_WORDS.length}`,
    );
  }
  if (LAST_WORDS.trim().length === 0) {
    throw new Error("entry must not be only white space");
  }

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, LAST_WORDS + "\n", "utf8");
}

main();
