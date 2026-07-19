import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { FocusOn } from "react-focus-on";
import { BiX } from "react-icons/bi";
import classNames from "classnames";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiIconButton } from "../button/IconButton";
import { VuiIcon } from "../icon/Icon";
import { VuiPortal } from "../portal/Portal";
import { VuiScreenBlock } from "../screenBlock/ScreenBlock";
import { VuiTabs } from "../tabs/Tabs";
import { VuiTab } from "../tabs/Tab";
import { VuiText } from "../typography/Text";
import { getOverlayProps } from "../../utils/getOverlayProps";
import { computeDiff } from "./computeDiff";
import { DiffCellType, DiffSegment, DiffView, InlineDiffRow, SideBySideCell } from "./types";
import { OptionsMenu } from "./OptionsMenu";

type Props = {
  original: string;
  edited: string;
  isOpen?: boolean;
  onClose?: () => void;
  title?: ReactNode;
  defaultView?: DiffView;
  highlightWords?: boolean;
  "data-testid"?: string;
};

const typeToMarker: Record<DiffCellType, string> = {
  added: "+",
  removed: "-",
  unchanged: "",
  empty: ""
};

// Renders a line's content, emphasizing the runs that changed when word highlighting
// is enabled and segments are available.
const DiffContent = ({
  content,
  segments,
  highlightWords
}: {
  content: string;
  segments?: DiffSegment[];
  highlightWords: boolean;
}) => {
  if (!highlightWords || !segments) {
    return <span className="vuiDiffLine__content">{content}</span>;
  }

  return (
    <span className="vuiDiffLine__content">
      {segments.map((segment, index) =>
        segment.isEmphasized ? (
          <mark key={index} className="vuiDiffLine__word">
            {segment.value}
          </mark>
        ) : (
          <span key={index}>{segment.value}</span>
        )
      )}
    </span>
  );
};

// Renders a single line's gutter number, change marker, and content.
const DiffLine = ({
  type,
  content,
  segments,
  lineNumbers,
  highlightWords
}: {
  type: DiffCellType;
  content: string;
  segments?: DiffSegment[];
  lineNumbers: (number | undefined)[];
  highlightWords: boolean;
}) => (
  <div className={`vuiDiffLine vuiDiffLine--${type}`}>
    {lineNumbers.map((lineNumber, index) => (
      <span key={index} className="vuiDiffLine__gutter">
        {lineNumber ?? ""}
      </span>
    ))}
    <span className="vuiDiffLine__marker">{typeToMarker[type]}</span>
    <DiffContent content={content} segments={segments} highlightWords={highlightWords} />
  </div>
);

const InlineView = ({ rows, highlightWords }: { rows: InlineDiffRow[]; highlightWords: boolean }) => (
  <div className="vuiDiffViewer__body vuiDiffViewer__body--inline">
    {rows.map((row, index) => (
      <DiffLine
        key={index}
        type={row.type}
        content={row.content}
        segments={row.segments}
        lineNumbers={[row.oldLineNumber, row.newLineNumber]}
        highlightWords={highlightWords}
      />
    ))}
  </div>
);

const SplitCell = ({ cell, highlightWords }: { cell: SideBySideCell; highlightWords: boolean }) => (
  <DiffLine
    type={cell.type}
    content={cell.content}
    segments={cell.segments}
    lineNumbers={[cell.lineNumber]}
    highlightWords={highlightWords}
  />
);

const SplitView = ({
  rows,
  highlightWords
}: {
  rows: ReturnType<typeof computeDiff>["sideBySideRows"];
  highlightWords: boolean;
}) => (
  <div className="vuiDiffViewer__body vuiDiffViewer__body--split">
    {rows.map((row, index) => (
      <div key={index} className="vuiDiffSplitRow">
        <SplitCell cell={row.left} highlightWords={highlightWords} />
        <SplitCell cell={row.right} highlightWords={highlightWords} />
      </div>
    ))}
  </div>
);

// A fullscreen modal that displays a line-by-line diff between two strings,
// toggling between side-by-side and inline views.
export const VuiDiffViewer = ({
  original,
  edited,
  isOpen = false,
  onClose,
  title = "Diff",
  defaultView = "split",
  highlightWords = true,
  ...rest
}: Props) => {
  const [view, setView] = useState<DiffView>(defaultView);
  const [isWordHighlightEnabled, setIsWordHighlightEnabled] = useState(highlightWords);

  // Uncouple open state from visibility so the viewer can transition out before unmounting.
  const returnFocusElRef = useRef<HTMLElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      returnFocusElRef.current = document.activeElement as HTMLElement;
      setIsContentVisible(true);
      requestAnimationFrame(() => {
        setIsLoaded(true);
      });
    } else {
      returnFocusElRef.current?.focus();
      returnFocusElRef.current = null;
      setIsLoaded(false);

      // Wait for the transition to complete before unmounting.
      // This duration should match the CSS transition speed.
      const timeoutId = window.setTimeout(() => {
        setIsContentVisible(false);
      }, 200);
      return () => window.clearTimeout(timeoutId);
    }
  }, [isOpen]);

  const { inlineRows, sideBySideRows, hasChanges } = useMemo(() => computeDiff(original, edited), [original, edited]);

  const classes = classNames("vuiDiffViewer", { "vuiDiffViewer-isLoaded": isLoaded });

  return (
    <VuiPortal>
      {(isOpen || isContentVisible || isLoaded) && (
        <VuiScreenBlock type="modal" isHidden={!isOpen}>
          <FocusOn enabled={isOpen} autoFocus={isOpen} returnFocus={false} onEscapeKey={() => onClose?.()}>
            <div className={classes} {...getOverlayProps("diffViewerTitle")} {...rest}>
              <VuiFlexContainer
                alignItems="center"
                justifyContent="spaceBetween"
                spacing="m"
                className="vuiDiffViewer__header"
              >
                <VuiFlexItem grow={false} shrink={false}>
                  <VuiText>
                    <p id="diffViewerTitle">
                      <strong>{title}</strong>
                    </p>
                  </VuiText>
                </VuiFlexItem>

                <VuiFlexItem grow={false} shrink={false}>
                  <VuiFlexContainer alignItems="center" spacing="xs">
                    <VuiFlexItem grow={false}>
                      <VuiTabs size="s" tabStyle="enclosed">
                        <VuiTab isActive={view === "split"} onClick={() => setView("split")}>
                          Split
                        </VuiTab>

                        <VuiTab isActive={view === "inline"} onClick={() => setView("inline")}>
                          Inline
                        </VuiTab>
                      </VuiTabs>
                    </VuiFlexItem>

                    <VuiFlexItem grow={false}>
                      <OptionsMenu
                        isWordHighlightEnabled={isWordHighlightEnabled}
                        setIsWordHighlightEnabled={setIsWordHighlightEnabled}
                      />
                    </VuiFlexItem>

                    {onClose && (
                      <VuiFlexItem grow={false}>
                        <VuiIconButton
                          color="neutral"
                          size="m"
                          aria-label="Close diff viewer"
                          onClick={() => onClose()}
                          icon={
                            <VuiIcon>
                              <BiX />
                            </VuiIcon>
                          }
                          tooltip={{ position: "bottom-end" }}
                        />
                      </VuiFlexItem>
                    )}
                  </VuiFlexContainer>
                </VuiFlexItem>
              </VuiFlexContainer>

              {!hasChanges ? (
                <div className="vuiDiffViewer__empty">
                  <VuiText size="s">
                    <p>No changes.</p>
                  </VuiText>
                </div>
              ) : view === "split" ? (
                <SplitView rows={sideBySideRows} highlightWords={isWordHighlightEnabled} />
              ) : (
                <InlineView rows={inlineRows} highlightWords={isWordHighlightEnabled} />
              )}
            </div>
          </FocusOn>
        </VuiScreenBlock>
      )}
    </VuiPortal>
  );
};
