import { useRef, useState } from "react";
import { VuiFileDropTarget, VuiSpacer, VuiText, VuiTextColor, VuiToggle } from "../../../lib";

export const FileDropTarget = () => {
  const [isScoped, setIsScoped] = useState(false);
  const [droppedFiles, setDroppedFiles] = useState<string[]>([]);
  const scopeRef = useRef<HTMLDivElement>(null);

  // Only one target is mounted at a time: the global target listens on the whole
  // document, so it would intercept drops meant for a scoped target.
  return (
    <>
      <VuiToggle
        label="Scope drop target to an element"
        checked={isScoped}
        onChange={(e) => {
          setIsScoped(e.target.checked);
          setDroppedFiles([]);
        }}
      />

      <VuiSpacer size="m" />

      <VuiText>
        <p>
          <VuiTextColor color="subdued">
            {isScoped
              ? "Drag a file over the box below. The overlay is scoped to the positioned container."
              : "Drag a file anywhere over the page to reveal a full-screen overlay."}
          </VuiTextColor>
        </p>
      </VuiText>

      {droppedFiles.length > 0 && (
        <>
          <VuiSpacer size="xs" />
          <VuiText size="s">
            <p>Dropped: {droppedFiles.join(", ")}</p>
          </VuiText>
        </>
      )}

      <VuiSpacer size="s" />

      {isScoped ? (
        <div
          ref={scopeRef}
          style={{
            position: "relative",
            minHeight: 160,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 16,
            border: "1px dashed var(--vui-color-border)",
            borderRadius: 8
          }}
        >
          <VuiText>
            <p>
              <VuiTextColor color="subdued">Drop zone</VuiTextColor>
            </p>
          </VuiText>

          <VuiFileDropTarget
            scopeRef={scopeRef}
            message={
              <VuiText align="center" size="l">
                <p>Release to drop here</p>
              </VuiText>
            }
            onFilesDropped={(files) => setDroppedFiles(files.map((file) => file.name))}
          />
        </div>
      ) : (
        <VuiFileDropTarget onFilesDropped={(files) => setDroppedFiles(files.map((file) => file.name))} />
      )}
    </>
  );
};
