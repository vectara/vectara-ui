import { Change, diffLines, diffWordsWithSpace } from "diff";
import { DiffSegment, InlineDiffRow, SideBySideDiffRow } from "./types";

// Splits a diff chunk's value into individual lines, discarding the trailing empty
// string produced by a final newline.
const splitLines = (value: string): string[] => {
  const lines = value.split("\n");
  if (lines.length > 0 && lines[lines.length - 1] === "") {
    lines.pop();
  }
  return lines;
};

// Computes the intra-line word segments for a replaced line pair, marking the runs
// that differ so they can be emphasized within each line.
const buildWordSegments = (oldLine: string, newLine: string): { old: DiffSegment[]; new: DiffSegment[] } => {
  const old: DiffSegment[] = [];
  const updated: DiffSegment[] = [];

  diffWordsWithSpace(oldLine, newLine).forEach((change) => {
    if (change.added) {
      updated.push({ value: change.value, isEmphasized: true });
    } else if (change.removed) {
      old.push({ value: change.value, isEmphasized: true });
    } else {
      old.push({ value: change.value });
      updated.push({ value: change.value });
    }
  });

  return { old, new: updated };
};

// A contiguous run of lines sharing the same relationship between the two versions.
// A "replace" pairs removed lines with the added lines that supplant them, so word
// segments can be computed per pairing.
type Chunk =
  | { kind: "equal"; lines: string[] }
  | { kind: "delete"; lines: string[] }
  | { kind: "insert"; lines: string[] }
  | {
      kind: "replace";
      removed: string[];
      added: string[];
      oldSegments: (DiffSegment[] | undefined)[];
      newSegments: (DiffSegment[] | undefined)[];
    };

// Groups the line-level diff into chunks, pairing each removal with an immediately
// following addition so replaced lines can be aligned and word-diffed.
const buildChunks = (changes: Change[]): Chunk[] => {
  const chunks: Chunk[] = [];
  let index = 0;

  while (index < changes.length) {
    const change = changes[index];
    const lines = splitLines(change.value);

    if (!change.added && !change.removed) {
      chunks.push({ kind: "equal", lines });
      index += 1;
      continue;
    }

    if (change.removed) {
      const nextChange = changes[index + 1];
      if (nextChange?.added) {
        const added = splitLines(nextChange.value);
        // Word-diff each aligned pair; unpaired extra lines stay whole-line highlighted.
        const pairCount = Math.min(lines.length, added.length);
        const oldSegments: (DiffSegment[] | undefined)[] = lines.map(() => undefined);
        const newSegments: (DiffSegment[] | undefined)[] = added.map(() => undefined);
        for (let row = 0; row < pairCount; row++) {
          const segments = buildWordSegments(lines[row], added[row]);
          oldSegments[row] = segments.old;
          newSegments[row] = segments.new;
        }
        chunks.push({ kind: "replace", removed: lines, added, oldSegments, newSegments });
        index += 2;
      } else {
        chunks.push({ kind: "delete", lines });
        index += 1;
      }
      continue;
    }

    chunks.push({ kind: "insert", lines });
    index += 1;
  }

  return chunks;
};

export type Diff = {
  inlineRows: InlineDiffRow[];
  sideBySideRows: SideBySideDiffRow[];
  hasChanges: boolean;
};

// Computes a line-by-line diff between two strings, producing rows for both the
// inline (unified) and side-by-side views, along with intra-line word segments.
export const computeDiff = (original: string, edited: string): Diff => {
  const chunks = buildChunks(diffLines(original, edited));

  const inlineRows: InlineDiffRow[] = [];
  const sideBySideRows: SideBySideDiffRow[] = [];

  let inlineOldLine = 1;
  let inlineNewLine = 1;
  let sideOldLine = 1;
  let sideNewLine = 1;

  chunks.forEach((chunk) => {
    switch (chunk.kind) {
      case "equal":
        chunk.lines.forEach((content) => {
          inlineRows.push({
            type: "unchanged",
            content,
            oldLineNumber: inlineOldLine++,
            newLineNumber: inlineNewLine++
          });
          sideBySideRows.push({
            left: { type: "unchanged", content, lineNumber: sideOldLine++ },
            right: { type: "unchanged", content, lineNumber: sideNewLine++ }
          });
        });
        break;

      case "delete":
        chunk.lines.forEach((content) => {
          inlineRows.push({ type: "removed", content, oldLineNumber: inlineOldLine++ });
          sideBySideRows.push({
            left: { type: "removed", content, lineNumber: sideOldLine++ },
            right: { type: "empty", content: "" }
          });
        });
        break;

      case "insert":
        chunk.lines.forEach((content) => {
          inlineRows.push({ type: "added", content, newLineNumber: inlineNewLine++ });
          sideBySideRows.push({
            left: { type: "empty", content: "" },
            right: { type: "added", content, lineNumber: sideNewLine++ }
          });
        });
        break;

      case "replace": {
        // Inline shows every removed line, then every added line.
        chunk.removed.forEach((content, row) => {
          inlineRows.push({ type: "removed", content, oldLineNumber: inlineOldLine++, segments: chunk.oldSegments[row] });
        });
        chunk.added.forEach((content, row) => {
          inlineRows.push({ type: "added", content, newLineNumber: inlineNewLine++, segments: chunk.newSegments[row] });
        });

        // Split pairs removed and added lines row by row.
        const rowCount = Math.max(chunk.removed.length, chunk.added.length);
        for (let row = 0; row < rowCount; row++) {
          const left =
            row < chunk.removed.length
              ? {
                  type: "removed" as const,
                  content: chunk.removed[row],
                  lineNumber: sideOldLine++,
                  segments: chunk.oldSegments[row]
                }
              : { type: "empty" as const, content: "" };
          const right =
            row < chunk.added.length
              ? {
                  type: "added" as const,
                  content: chunk.added[row],
                  lineNumber: sideNewLine++,
                  segments: chunk.newSegments[row]
                }
              : { type: "empty" as const, content: "" };
          sideBySideRows.push({ left, right });
        }
        break;
      }
    }
  });

  const hasChanges = chunks.some((chunk) => chunk.kind !== "equal");

  return { inlineRows, sideBySideRows, hasChanges };
};
