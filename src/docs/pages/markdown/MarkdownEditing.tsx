import { KeyboardEvent, useId, useRef, useState } from "react";
import { BiExpandAlt } from "react-icons/bi";
import {
  VuiFlexContainer,
  VuiFlexItem,
  VuiFormGroup,
  VuiIcon,
  VuiIconButton,
  VuiMarkdown,
  VuiMarkdownPreviewModal,
  VuiTab,
  VuiTabs,
  VuiTextArea
} from "../../../lib";

import "./markdownEditingExample.scss";

const MODE = ["source", "preview"] as const;
type Mode = (typeof MODE)[number];

const initialValue = `# Support agent

You are a **support agent** for Vectara. Answer questions using only the corpora you have
been given access to.

1. Cite every claim with the source document.
2. Never speculate about unreleased features.

> Escalation is a last resort — try one clarifying question first.
`;

// The library ships the viewer and the preview modal as primitives, so an editing UI is
// assembled in the consumer. Swap this layout for a drawer or a side-by-side view as needed.
export const MarkdownEditing = () => {
  const [value, setValue] = useState(initialValue);
  const [mode, setMode] = useState<Mode>("source");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const tabListRef = useRef<HTMLDivElement | null>(null);

  const idPrefix = useId();
  const getTabId = (tabMode: Mode) => `${idPrefix}-${tabMode}Tab`;
  const getPanelId = (tabMode: Mode) => `${idPrefix}-${tabMode}Panel`;

  // Complete the WAI-ARIA tab pattern: arrows, Home, and End move selection and focus,
  // while a roving tabindex keeps the tab list a single stop in the page's tab order.
  const onTabListKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const keyToMode: Record<string, Mode> = {
      ArrowLeft: "source",
      ArrowUp: "source",
      Home: "source",
      ArrowRight: "preview",
      ArrowDown: "preview",
      End: "preview"
    };

    const nextMode = keyToMode[event.key];
    if (!nextMode) return;

    event.preventDefault();
    setMode(nextMode);
    tabListRef.current?.querySelector<HTMLButtonElement>(`#${CSS.escape(getTabId(nextMode))}`)?.focus();
  };

  const createTab = (tabMode: Mode, title: string) => (
    <VuiTab
      id={getTabId(tabMode)}
      role="tab"
      aria-selected={mode === tabMode}
      aria-controls={getPanelId(tabMode)}
      tabIndex={mode === tabMode ? 0 : -1}
      isActive={mode === tabMode}
      onClick={() => setMode(tabMode)}
    >
      {title}
    </VuiTab>
  );

  return (
    <>
      <VuiFormGroup label="Instructions" labelFor={`${idPrefix}-textArea`} helpText="Markdown is supported.">
        <div className="markdownEditingExample">
          <VuiFlexContainer
            className="markdownEditingExample__header"
            alignItems="center"
            justifyContent="spaceBetween"
            spacing="s"
          >
            <VuiFlexItem grow={false}>
              <VuiTabs
                size="s"
                tabStyle="enclosed"
                tabListProps={{ role: "tablist", "aria-label": "Editor mode", onKeyDown: onTabListKeyDown }}
                tabListRef={tabListRef}
              >
                {createTab("source", "Source")}
                {createTab("preview", "Preview")}
              </VuiTabs>
            </VuiFlexItem>

            <VuiFlexItem grow={false}>
              <VuiIconButton
                aria-label="Expand preview"
                color="neutral"
                size="s"
                onClick={() => setIsPreviewOpen(true)}
                icon={
                  <VuiIcon>
                    <BiExpandAlt />
                  </VuiIcon>
                }
              />
            </VuiFlexItem>
          </VuiFlexContainer>

          {/* Both panels stay mounted so switching tabs never disturbs the textarea's undo history. */}
          <div className="markdownEditingExample__body">
            <div
              id={getPanelId("source")}
              role="tabpanel"
              aria-labelledby={getTabId("source")}
              hidden={mode !== "source"}
            >
              <VuiTextArea
                className="markdownEditingExample__textArea"
                id={`${idPrefix}-textArea`}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                placeholder="Describe how the agent should behave"
                fullWidth
              />
            </div>

            <div
              id={getPanelId("preview")}
              role="tabpanel"
              aria-labelledby={getTabId("preview")}
              hidden={mode !== "preview"}
              // Focuses the panel so keyboard users can scroll through the preview.
              tabIndex={0}
              className="markdownEditingExample__preview"
            >
              <VuiMarkdown size="s">{value}</VuiMarkdown>
            </div>
          </div>
        </div>
      </VuiFormGroup>

      <VuiMarkdownPreviewModal
        title="Instructions"
        value={value}
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  );
};
