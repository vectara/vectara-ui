import { useRef, useState } from "react";
import { BiPaperclip } from "react-icons/bi";
import classNames from "classnames";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiIcon } from "../icon/Icon";
import { VuiIconButton } from "../button/IconButton";
import { VuiButtonPrimary } from "../button/ButtonPrimary";
import { VuiBadge } from "../badge/Badge";
import { VuiSpacer } from "../spacer/Spacer";
import { VuiTextArea } from "../form";
import { VuiFileDropTarget } from "../fileDropTarget/FileDropTarget";
import { useComposerHistory } from "./useComposerHistory";

export type ComposerSubmission = {
  text: string;
  files: File[];
};

export type ComposerFileError = {
  file: File;
  message: string;
};

export type ComposerShortcutApi = {
  // The composer's current text, as of the keystroke (before it is applied).
  value: string;
  setValue: (value: string) => void;
  clear: () => void;
};

export type ComposerShortcutHandler = (
  event: React.KeyboardEvent<HTMLTextAreaElement>,
  composer: ComposerShortcutApi
) => void;

type Props = {
  // Fires with the current text and files when the user submits. The composer
  // clears itself afterward, so handlers should read the passed-in snapshot.
  onSubmit: (submission: ComposerSubmission) => void;
  // When true, the Send button becomes a Cancel button that calls onCancel.
  isRunning?: boolean;
  onCancel?: () => void;
  // Disables Send beyond the built-in empty-message check.
  isSendDisabled?: boolean;
  sendLabel?: string;
  cancelLabel?: string;

  placeholder?: string;
  autoFocus?: boolean;
  // Reports every edit. Combine with `value` for controlled use, or use alone
  // to observe input (e.g. to drive a "/" affordance) while staying uncontrolled.
  onChange?: (value: string) => void;
  // Provide to control the value externally; omit to let the composer own it.
  value?: string;

  // Enables UP/DOWN cycling through previous submissions.
  enableHistory?: boolean;
  // sessionStorage key for persisting history across reloads.
  historyKey?: string;

  canUploadFiles?: boolean;
  // The file input's "accept" attribute.
  accept?: string;
  // Returns an error message to reject a file, or null to accept it.
  validateFile?: (file: File) => string | null;
  onFilesRejected?: (errors: ComposerFileError[]) => void;
  // Where the drag-and-drop overlay listens and renders. "document" (default)
  // shows a full-screen overlay; "composer" scopes it to the composer element.
  fileDropScope?: "document" | "composer";
  // Overrides the drag-and-drop overlay message.
  fileDropMessage?: React.ReactNode;

  // Maps a key combo ("/", "Mod+k", "Shift+Enter", "Escape") to a handler.
  // Handlers run before built-in keys; calling preventDefault suppresses them.
  onShortcutKeys?: Record<string, ComposerShortcutHandler>;

  // Rendered left of the textarea — wrap each action in a VuiFlexItem.
  leadingActions?: React.ReactNode;
  // Rendered below the input row, e.g. validation summaries or hints.
  footer?: React.ReactNode;

  className?: string;
  "data-testid"?: string;
};

const MOD_ORDER = ["mod", "alt", "shift"] as const;

// Single-character keys are matched case-insensitively; named keys keep their case.
const normalizeKeyName = (key: string) => (key.length === 1 ? key.toLowerCase() : key);

const canonical = (mods: Set<string>, key: string) =>
  [...MOD_ORDER.filter((mod) => mods.has(mod)), normalizeKeyName(key)].join("+");

const eventSignature = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
  const mods = new Set<string>();
  // Treat Cmd and Ctrl interchangeably so "Mod+k" works across platforms.
  if (e.metaKey || e.ctrlKey) mods.add("mod");
  if (e.altKey) mods.add("alt");
  if (e.shiftKey) mods.add("shift");
  return canonical(mods, e.key);
};

const comboSignature = (combo: string) => {
  const segments = combo.split("+").map((segment) => segment.trim());
  const key = segments.pop() ?? "";
  const mods = new Set<string>();
  for (const segment of segments) {
    const mod = segment.toLowerCase();
    mods.add(mod === "ctrl" || mod === "meta" ? "mod" : mod);
  }
  return canonical(mods, key);
};

export const VuiComposer = ({
  onSubmit,
  isRunning,
  onCancel,
  isSendDisabled,
  sendLabel = "Send",
  cancelLabel = "Cancel",
  placeholder,
  autoFocus,
  onChange,
  value,
  enableHistory,
  historyKey,
  canUploadFiles,
  accept,
  validateFile,
  onFilesRejected,
  fileDropScope = "document",
  fileDropMessage,
  onShortcutKeys,
  leadingActions,
  footer,
  className,
  "data-testid": dataTestId
}: Props) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const composerRef = useRef<HTMLDivElement>(null);

  const currentValue = isControlled ? value : internalValue;

  const setValue = (next: string) => {
    if (!isControlled) setInternalValue(next);
    onChange?.(next);
  };

  const clear = () => setValue("");

  const history = useComposerHistory({ storageKey: historyKey, value: currentValue, setValue });

  const isEmptyMessage = currentValue.trim() === "" && files.length === 0;

  const addFiles = (incoming: File[]) => {
    const existingNames = new Set(files.map((file) => file.name));
    const deduped = incoming.filter((file) => !existingNames.has(file.name));

    if (!validateFile) {
      if (deduped.length > 0) setFiles((prev) => [...prev, ...deduped]);
      return;
    }

    const valid: File[] = [];
    const rejected: ComposerFileError[] = [];
    for (const file of deduped) {
      const message = validateFile(file);
      if (message) rejected.push({ file, message });
      else valid.push(file);
    }

    if (valid.length > 0) setFiles((prev) => [...prev, ...valid]);
    if (rejected.length > 0) onFilesRejected?.(rejected);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const submit = () => {
    if (isEmptyMessage || isSendDisabled) return;
    onSubmit({ text: currentValue, files });
    if (enableHistory) history.record(currentValue);
    setValue("");
    setFiles([]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    // Any edit cancels in-progress history navigation.
    if (enableHistory) history.reset();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Consumer shortcuts run first; preventDefault suppresses built-in handling.
    if (onShortcutKeys) {
      const signature = eventSignature(e);
      for (const combo in onShortcutKeys) {
        if (comboSignature(combo) === signature) {
          onShortcutKeys[combo](e, { value: currentValue, setValue, clear });
          break;
        }
      }
      if (e.defaultPrevented) return;
    }

    // Enter submits; Shift+Enter falls through so the textarea inserts a newline.
    if (!e.shiftKey && e.code === "Enter") {
      e.preventDefault();
      submit();
      return;
    }

    // Only let history cycling kick in when the caret is at the textarea's
    // vertical boundary in the direction of the arrow key — otherwise the native
    // textarea must move the caret between internal lines. Without this gate, the
    // hook's primed→cycling state machine (designed for a single-line input)
    // would replace the textarea contents regardless of caret position.
    if (enableHistory && (e.key === "ArrowUp" || e.key === "ArrowDown")) {
      const el = e.currentTarget;
      const pos = el.selectionStart ?? 0;
      // A caret at position 0 is always on the first line. We special-case it
      // because lastIndexOf("\n", -1) clamps its negative fromIndex to 0 and then
      // inspects index 0 — so a value that begins with a newline would be wrongly
      // reported as "not first line", trapping history navigation. Otherwise,
      // lastIndexOf("\n", pos - 1) scans backward from the character just before
      // the caret; -1 means no newline precedes it, so it is on the first line.
      const cursorOnFirstLine = pos === 0 || el.value.lastIndexOf("\n", pos - 1) === -1;
      // indexOf("\n", pos) scans forward from the caret; -1 means no newline at or
      // after it, so it is on the last line.
      const cursorOnLastLine = el.value.indexOf("\n", pos) === -1;

      if (e.key === "ArrowUp" && !cursorOnFirstLine) return;
      if (e.key === "ArrowDown" && !cursorOnLastLine) return;

      history.handleKeyDown(e);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) addFiles(Array.from(e.target.files));
    // Reset so selecting the same file again still fires a change event.
    e.target.value = "";
  };

  return (
    <div className={classNames("vuiComposer", className)} data-testid={dataTestId} ref={composerRef}>
      <VuiFlexContainer alignItems="end" fullWidth spacing="xs">
        {canUploadFiles && (
          <VuiFlexItem>
            <VuiIconButton
              color="neutral"
              aria-label="Attach files"
              icon={
                <VuiIcon>
                  <BiPaperclip />
                </VuiIcon>
              }
              onClick={() => fileInputRef.current?.click()}
            />
          </VuiFlexItem>
        )}

        {leadingActions}

        <VuiFlexItem grow={1}>
          <VuiTextArea
            autoFocus={autoFocus}
            autoGrow
            fullWidth
            rows={1}
            placeholder={placeholder}
            value={currentValue}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </VuiFlexItem>

        <VuiFlexItem>
          {isRunning ? (
            <VuiButtonPrimary color="subdued" size="l" onClick={onCancel}>
              {cancelLabel}
            </VuiButtonPrimary>
          ) : (
            <VuiButtonPrimary color="primary" size="l" onClick={submit} isDisabled={isEmptyMessage || isSendDisabled}>
              {sendLabel}
            </VuiButtonPrimary>
          )}
        </VuiFlexItem>
      </VuiFlexContainer>

      {canUploadFiles && (
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={accept}
          style={{ display: "none" }}
          onChange={handleFileInputChange}
        />
      )}

      {files.length > 0 && (
        <>
          <VuiSpacer size="s" />
          <VuiFlexContainer fullWidth wrap spacing="xxs">
            {files.map((file, index) => (
              <VuiBadge key={file.name} color="primary" onClose={() => removeFile(index)}>
                {file.name}
              </VuiBadge>
            ))}
          </VuiFlexContainer>
        </>
      )}

      {footer}

      {canUploadFiles && (
        <VuiFileDropTarget
          onFilesDropped={addFiles}
          message={fileDropMessage}
          scopeRef={fileDropScope === "composer" ? composerRef : undefined}
        />
      )}
    </div>
  );
};
