import { ReactNode, useMemo, useState } from "react";
import { FocusOn } from "react-focus-on";
import { BiX } from "react-icons/bi";
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
import { DiffCellType, DiffView, InlineDiffRow, SideBySideCell } from "./types";

type Props = {
  original: string;
  edited: string;
  isOpen?: boolean;
  onClose?: () => void;
  title?: ReactNode;
  defaultView?: DiffView;
  "data-testid"?: string;
};

const typeToMarker: Record<DiffCellType, string> = {
  added: "+",
  removed: "-",
  unchanged: "",
  empty: ""
};

// Renders a single line's gutter number, change marker, and content.
const DiffLine = ({
  type,
  content,
  lineNumbers
}: {
  type: DiffCellType;
  content: string;
  lineNumbers: (number | undefined)[];
}) => (
  <div className={`vuiDiffLine vuiDiffLine--${type}`}>
    {lineNumbers.map((lineNumber, index) => (
      <span key={index} className="vuiDiffLine__gutter">
        {lineNumber ?? ""}
      </span>
    ))}
    <span className="vuiDiffLine__marker">{typeToMarker[type]}</span>
    <span className="vuiDiffLine__content">{content}</span>
  </div>
);

const InlineView = ({ rows }: { rows: InlineDiffRow[] }) => (
  <div className="vuiDiffViewer__body vuiDiffViewer__body--inline">
    {rows.map((row, index) => (
      <DiffLine
        key={index}
        type={row.type}
        content={row.content}
        lineNumbers={[row.oldLineNumber, row.newLineNumber]}
      />
    ))}
  </div>
);

const SplitCell = ({ cell }: { cell: SideBySideCell }) => (
  <DiffLine type={cell.type} content={cell.content} lineNumbers={[cell.lineNumber]} />
);

const SplitView = ({ rows }: { rows: ReturnType<typeof computeDiff>["sideBySideRows"] }) => (
  <div className="vuiDiffViewer__body vuiDiffViewer__body--split">
    {rows.map((row, index) => (
      <div key={index} className="vuiDiffSplitRow">
        <SplitCell cell={row.left} />
        <SplitCell cell={row.right} />
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
  ...rest
}: Props) => {
  const [view, setView] = useState<DiffView>(defaultView);

  const { inlineRows, sideBySideRows, hasChanges } = useMemo(() => computeDiff(original, edited), [original, edited]);

  return (
    <VuiPortal>
      {isOpen && (
        <VuiScreenBlock type="modal">
          <FocusOn onEscapeKey={() => onClose?.()}>
            <div className="vuiDiffViewer" {...getOverlayProps("diffViewerTitle")} {...rest}>
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
                  <VuiFlexContainer alignItems="center" spacing="s">
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
                <SplitView rows={sideBySideRows} />
              ) : (
                <InlineView rows={inlineRows} />
              )}
            </div>
          </FocusOn>
        </VuiScreenBlock>
      )}
    </VuiPortal>
  );
};
