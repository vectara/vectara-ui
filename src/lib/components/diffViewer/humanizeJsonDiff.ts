import { JsonChange } from "./types";

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

// Structural equality for parsed JSON values. Object key order is ignored; arrays are
// compared by index.
const isEqual = (a: unknown, b: unknown): boolean => {
  if (a === b) return true;

  if (Array.isArray(a) && Array.isArray(b)) {
    return a.length === b.length && a.every((item, index) => isEqual(item, b[index]));
  }

  if (isPlainObject(a) && isPlainObject(b)) {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    return aKeys.length === bKeys.length && aKeys.every((key) => key in b && isEqual(a[key], b[key]));
  }

  return false;
};

// Formats a JSON value for display: strings are shown verbatim, everything else is
// pretty-printed.
const formatValue = (value: unknown): string => (typeof value === "string" ? value : JSON.stringify(value, null, 2));

// Parses a string as JSON, reporting whether it succeeded so a null result can be
// distinguished from a parse failure.
export const parseJson = (value: string): { ok: true; value: unknown } | { ok: false } => {
  try {
    return { ok: true, value: JSON.parse(value) };
  } catch (e) {
    console.log(e);
    return { ok: false };
  }
};

// Both inputs must parse as JSON for the humanized view to apply.
export const isJsonComparison = (original: string, edited: string): boolean =>
  parseJson(original).ok && parseJson(edited).ok;

// Recursively walks two JSON values, collecting only the leaf nodes that differ. An
// added or removed subtree is reported whole rather than descended into.
const collectChanges = (oldValue: unknown, newValue: unknown, path: string[], changes: JsonChange[]) => {
  if (isEqual(oldValue, newValue)) return;

  if (isPlainObject(oldValue) && isPlainObject(newValue)) {
    // Edited keys first (in their current order), then keys that were removed.
    const keys = Object.keys(newValue);
    Object.keys(oldValue).forEach((key) => {
      if (!(key in newValue)) keys.push(key);
    });

    keys.forEach((key) => {
      const nextPath = [...path, key];
      if (!(key in oldValue)) {
        changes.push({ path: nextPath.join(" . "), type: "added", newDisplay: formatValue(newValue[key]) });
      } else if (!(key in newValue)) {
        changes.push({ path: nextPath.join(" . "), type: "removed", oldDisplay: formatValue(oldValue[key]) });
      } else {
        collectChanges(oldValue[key], newValue[key], nextPath, changes);
      }
    });

    return;
  }

  changes.push({
    path: path.length > 0 ? path.join(" . ") : "(root)",
    type: "changed",
    oldDisplay: formatValue(oldValue),
    newDisplay: formatValue(newValue)
  });
};

// Computes the set of changed JSON nodes between two JSON strings. Returns an empty
// array if either input fails to parse.
export const humanizeJsonDiff = (original: string, edited: string): JsonChange[] => {
  const parsedOriginal = parseJson(original);
  const parsedEdited = parseJson(edited);

  if (!parsedOriginal.ok || !parsedEdited.ok) return [];

  const changes: JsonChange[] = [];
  collectChanges(parsedOriginal.value, parsedEdited.value, [], changes);
  return changes;
};
