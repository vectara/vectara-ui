import { ReactNode, RefObject, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BiUpload } from "react-icons/bi";
import { VuiScreenBlock } from "../screenBlock/ScreenBlock";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiIcon } from "../icon/Icon";
import { VuiText } from "../typography/Text";

type Props = {
  onFilesDropped: (files: File[]) => void;
  // When provided, drag listeners attach to this element instead of `document`.
  // The scoped element MUST be positioned (e.g. `position: relative`) so the
  // absolutely-positioned overlay covers it correctly.
  scopeRef?: RefObject<HTMLElement>;
  // Overrides the default overlay message.
  message?: ReactNode;
};

const defaultMessage: ReactNode = (
  <VuiFlexContainer direction="column" alignItems="center" justifyContent="center">
    <VuiFlexItem>
      <VuiIcon size="xxxl" color="empty">
        <BiUpload />
      </VuiIcon>
    </VuiFlexItem>

    <VuiFlexItem>
      <VuiText align="center" size="l">
        <p>Drop files to add to upload</p>
      </VuiText>
    </VuiFlexItem>
  </VuiFlexContainer>
);

export const VuiFileDropTarget = ({ onFilesDropped, scopeRef, message = defaultMessage }: Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const dragCounterRef = useRef(0);

  useEffect(() => {
    const target: HTMLElement | Document = scopeRef?.current ?? document;
    // Reset whenever the target changes (e.g. when scopeRef attaches or the parent
    // swaps between scoped and global modes) so a stale counter doesn't suppress events.
    dragCounterRef.current = 0;
    setIsDragging(false);

    const handleDragEnter = (e: DragEvent) => {
      e.preventDefault();
      dragCounterRef.current += 1;
      // Only show the overlay for drags that carry files, not e.g. selected text.
      if (dragCounterRef.current === 1 && e.dataTransfer?.items && e.dataTransfer.items.length > 0) {
        setIsDragging(true);
      }
    };

    const handleDragLeave = (e: DragEvent) => {
      e.preventDefault();
      dragCounterRef.current -= 1;
      if (dragCounterRef.current === 0) {
        setIsDragging(false);
      }
    };

    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
    };

    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      dragCounterRef.current = 0;

      const files = e.dataTransfer?.files;
      if (files && files.length > 0) {
        onFilesDropped(Array.from(files));
      }
    };

    target.addEventListener("dragenter", handleDragEnter as EventListener);
    target.addEventListener("dragleave", handleDragLeave as EventListener);
    target.addEventListener("dragover", handleDragOver as EventListener);
    target.addEventListener("drop", handleDrop as EventListener);

    return () => {
      target.removeEventListener("dragenter", handleDragEnter as EventListener);
      target.removeEventListener("dragleave", handleDragLeave as EventListener);
      target.removeEventListener("dragover", handleDragOver as EventListener);
      target.removeEventListener("drop", handleDrop as EventListener);
    };
  }, [scopeRef, onFilesDropped]);

  if (!isDragging) return null;

  // Scoped mode: overlay covers only the parent element.
  if (scopeRef?.current) {
    return createPortal(
      <div className="vuiFileDropTarget__scopedOverlay">
        <div className="vuiFileDropTarget__message">{message}</div>
      </div>,
      scopeRef.current
    );
  }

  // Global mode: full-screen overlay.
  return (
    <VuiScreenBlock color="primary">
      <div className="vuiFileDropTarget__messageContainer">
        <div className="vuiFileDropTarget__message">{message}</div>
      </div>
    </VuiScreenBlock>
  );
};
