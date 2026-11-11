// ai-joke-02 entry — "Make the AI judge laugh".
//
// The whole program is one fixed one-liner about AI coding agents, written to
// /output/entry.txt. The joke is a constant on purpose: the harness runs the
// program twice and both runs must produce the exact same bytes, so there is
// no randomness, no clock and no network here — just the line, written once.
//
// Local run (MAKEFUN_OUTPUT_DIR stands in for /output outside the grader):
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I stopped reviewing my AI agent's pull requests. I just read its apologies — they summarize the diff perfectly.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
