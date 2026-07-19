export type DiffLineType = "unchanged" | "added" | "removed";

// "empty" represents a padding cell in the side-by-side view where one side has no
// corresponding line.
export type DiffCellType = DiffLineType | "empty";

// A run of text within a line. Emphasized runs are the parts that actually changed
// relative to the counterpart line, enabling intra-line word highlighting.
export type DiffSegment = {
  value: string;
  isEmphasized?: boolean;
};

// A single line in the inline (unified) view.
export type InlineDiffRow = {
  type: DiffLineType;
  content: string;
  oldLineNumber?: number;
  newLineNumber?: number;
  // Present only for replaced lines that have a counterpart to diff against.
  segments?: DiffSegment[];
};

// One side of a row in the side-by-side view.
export type SideBySideCell = {
  type: DiffCellType;
  content: string;
  lineNumber?: number;
  // Present only for replaced lines that have a counterpart to diff against.
  segments?: DiffSegment[];
};

// A row in the side-by-side view, pairing an original line with an edited line.
export type SideBySideDiffRow = {
  left: SideBySideCell;
  right: SideBySideCell;
};

export type DiffView = "split" | "inline";
