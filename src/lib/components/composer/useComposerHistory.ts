import { KeyboardEvent, useRef, useState } from "react";

type NavPhase = "idle" | "primed" | "cycling";
type Direction = "up" | "down";

function loadHistory(storageKey: string): string[] {
  try {
    const stored = sessionStorage.getItem(storageKey);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveHistory(storageKey: string, history: string[]) {
  try {
    sessionStorage.setItem(storageKey, JSON.stringify(history));
  } catch {
    // Quota exceeded or unavailable — silently drop.
  }
}

type Args = {
  // When provided, history persists across reloads under this sessionStorage key.
  storageKey?: string;
  // Current composer value, read when priming and snapshotting the draft.
  value: string;
  // Applies a history entry (or the restored draft) to the composer.
  setValue: (value: string) => void;
};

/**
 * Cycles through previous submissions with UP/DOWN arrow keys.
 *
 * State machine for navigation (3 phases):
 *
 *   idle    — no navigation active.
 *   primed  — first key press (UP/DOWN) consumed by native cursor movement.
 *   cycling — UP/DOWN keys walk through the history stack.
 *
 * Transitions on arrow key press:
 *
 *   idle  + empty input + UP    → cycling  (skip primed, start navigating immediately)
 *   idle  + empty input + DOWN  → idle     (nothing to cycle to)
 *   idle  + has text    + UP/DN → primed   (let native cursor move first)
 *   primed  + same direction    → cycling  (second press enters history)
 *   primed  + diff direction    → primed   (re-prime for the new direction)
 *   cycling + same direction    → cycling  (keep walking history)
 *   cycling + diff direction    → primed   (let native cursor adjust, re-prime)
 *
 * The composer calls reset() on any user edit and record() on submit, both of
 * which return the machine to idle.
 */
export function useComposerHistory({ storageKey, value, setValue }: Args) {
  const historyRef = useRef<string[]>(storageKey ? loadHistory(storageKey) : []);
  const [historyIndex, setHistoryIndex] = useState<number | null>(null);
  const draftRef = useRef("");
  const phaseRef = useRef<NavPhase>("idle");
  const directionRef = useRef<Direction | null>(null);

  const reset = () => {
    setHistoryIndex(null);
    phaseRef.current = "idle";
    directionRef.current = null;
  };

  const record = (input: string) => {
    if (input.trim()) {
      historyRef.current = [...historyRef.current, input];
      if (storageKey) saveHistory(storageKey, historyRef.current);
    }
    reset();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;

    const history = historyRef.current;
    if (history.length === 0) return;

    const direction: Direction = e.key === "ArrowUp" ? "up" : "down";
    const phase = phaseRef.current;
    const lastDirection = directionRef.current;

    // Idle with text in input — let native cursor handle the first press.
    if (phase === "idle" && value.length > 0) {
      phaseRef.current = "primed";
      directionRef.current = direction;
      return;
    }

    // Idle with empty input — skip primed and start cycling immediately on UP; ignore DOWN.
    if (phase === "idle") {
      if (direction === "down") return;

      e.preventDefault();
      draftRef.current = value;
      const newIndex = history.length - 1;
      setHistoryIndex(newIndex);
      setValue(history[newIndex]);
      phaseRef.current = "cycling";
      directionRef.current = direction;
      return;
    }

    // Direction changed — let native cursor handle it, re-prime.
    if (direction !== lastDirection) {
      phaseRef.current = "primed";
      directionRef.current = direction;
      return;
    }

    // Same direction: primed → cycling, or cycling → cycling.
    // Primed DOWN with no active cycling — nothing to cycle to.
    if (direction === "down" && historyIndex === null) return;

    e.preventDefault();

    if (direction === "up") {
      if (historyIndex === null) {
        draftRef.current = value;
        const newIndex = history.length - 1;
        setHistoryIndex(newIndex);
        setValue(history[newIndex]);
      } else if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setValue(history[newIndex]);
      }
    } else {
      if (historyIndex !== null && historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setValue(history[newIndex]);
      } else if (historyIndex !== null) {
        setHistoryIndex(null);
        setValue(draftRef.current);
      }
    }

    phaseRef.current = "cycling";
    directionRef.current = direction;
  };

  return { handleKeyDown, record, reset };
}
