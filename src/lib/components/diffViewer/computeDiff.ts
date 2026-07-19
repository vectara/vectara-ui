import { diffLines } from "diff";
import { InlineDiffRow, SideBySideDiffRow } from "./types";

// Splits a diff chunk's value into individual lines, discarding the trailing empty
// string produced by a final newline.
const splitLines = (value: string): string[] => {
  const lines = value.split("\n");
  if (lines.length > 0 && lines[lines.length - 1] === "") {
    lines.pop();
  }
  return lines;
};

export type Diff = {
  inlineRows: InlineDiffRow[];
  sideBySideRows: SideBySideDiffRow[];
  hasChanges: boolean;
};

// Computes a line-by-line diff between two strings, producing rows for both the
// inline (unified) and side-by-side views.
export const computeDiff = (original: string, edited: string): Diff => {
  const changes = diffLines(original, edited);

  const inlineRows: InlineDiffRow[] = [];
  const sideBySideRows: SideBySideDiffRow[] = [];
  let hasChanges = false;

  // Track the current line number in each version.
  let inlineOldLine = 1;
  let inlineNewLine = 1;

  changes.forEach((change) => {
    splitLines(change.value).forEach((content) => {
      if (change.added) {
        inlineRows.push({ type: "added", content, newLineNumber: inlineNewLine++ });
      } else if (change.removed) {
        inlineRows.push({ type: "removed", content, oldLineNumber: inlineOldLine++ });
      } else {
        inlineRows.push({
          type: "unchanged",
          content,
          oldLineNumber: inlineOldLine++,
          newLineNumber: inlineNewLine++
        });
      }
    });
  });

  let sideOldLine = 1;
  let sideNewLine = 1;
  let index = 0;

  while (index < changes.length) {
    const change = changes[index];
    const lines = splitLines(change.value);

    if (!change.added && !change.removed) {
      lines.forEach((content) => {
        sideBySideRows.push({
          left: { type: "unchanged", content, lineNumber: sideOldLine++ },
          right: { type: "unchanged", content, lineNumber: sideNewLine++ }
        });
      });
      index += 1;
      continue;
    }

    if (change.removed) {
      hasChanges = true;
      const removedLines = lines;
      // Pair a removal with an immediately following addition so replaced lines sit
      // side by side, mirroring GitHub's diff.
      const nextChange = changes[index + 1];
      const addedLines = nextChange?.added ? splitLines(nextChange.value) : [];

      const rowCount = Math.max(removedLines.length, addedLines.length);
      for (let row = 0; row < rowCount; row++) {
        const left =
          row < removedLines.length
            ? { type: "removed" as const, content: removedLines[row], lineNumber: sideOldLine++ }
            : { type: "empty" as const, content: "" };
        const right =
          row < addedLines.length
            ? { type: "added" as const, content: addedLines[row], lineNumber: sideNewLine++ }
            : { type: "empty" as const, content: "" };
        sideBySideRows.push({ left, right });
      }

      index += addedLines.length > 0 ? 2 : 1;
      continue;
    }

    // A pure addition with no preceding removal.
    hasChanges = true;
    lines.forEach((content) => {
      sideBySideRows.push({
        left: { type: "empty", content: "" },
        right: { type: "added", content, lineNumber: sideNewLine++ }
      });
    });
    index += 1;
  }

  return { inlineRows, sideBySideRows, hasChanges };
};
