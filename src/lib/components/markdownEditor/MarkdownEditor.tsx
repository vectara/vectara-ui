import { ChangeEvent, KeyboardEvent, ReactNode, useMemo, useRef, useState } from "react";
import classNames from "classnames";
import { BiExpandAlt } from "react-icons/bi";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiFormGroup } from "../formGroup/FormGroup";
import { VuiIcon } from "../icon/Icon";
import { VuiIconButton } from "../button/IconButton";
import { VuiMarkdown } from "../markdown/Markdown";
import { VuiTab } from "../tabs/Tab";
import { VuiTabs } from "../tabs/Tabs";
import { VuiText } from "../typography/Text";
import { VuiTextArea } from "../form/textArea/TextArea";
import { VuiTextColor } from "../typography/TextColor";
import { createId } from "../../utils/createId";
import { VuiMarkdownPreviewModal } from "./MarkdownPreviewModal";

const MODE = ["source", "preview"] as const;
type Mode = (typeof MODE)[number];

type ControlProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
  placeholder?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  rows?: number;
  id?: string;
  required?: boolean;
  "aria-describedby"?: string;
  "data-testid"?: string;
};

const MarkdownEditorControl = ({
  value,
  onChange,
  label,
  placeholder,
  isDisabled,
  isInvalid,
  rows = 8,
  id,
  required,
  "aria-describedby": ariaDescribedBy,
  ...rest
}: ControlProps) => {
  const [mode, setMode] = useState<Mode>("source");
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const tabListRef = useRef<HTMLDivElement | null>(null);

  const idPrefix = useMemo(() => `markdownEditor-${createId()}`, []);
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
    tabListRef.current?.querySelector<HTMLButtonElement>(`#${getTabId(nextMode)}`)?.focus();
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

  const isEmpty = !value.trim();

  const previewClasses = classNames("vuiMarkdownEditor__preview", {
    "vuiMarkdownEditor__preview-isEmpty": isEmpty
  });

  const classes = classNames("vuiMarkdownEditor", {
    "vuiMarkdownEditor-isInvalid": isInvalid,
    "vuiMarkdownEditor-isDisabled": isDisabled
  });

  return (
    <>
      <div className={classes} {...rest}>
        <VuiFlexContainer
          className="vuiMarkdownEditor__toolbar"
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
              onClick={() => setIsPreviewModalOpen(true)}
              icon={
                <VuiIcon>
                  <BiExpandAlt />
                </VuiIcon>
              }
            />
          </VuiFlexItem>
        </VuiFlexContainer>

        {/* Both panels stay mounted so switching modes never disturbs the textarea's value or undo history. */}
        <div id={getPanelId("source")} role="tabpanel" aria-labelledby={getTabId("source")} hidden={mode !== "source"}>
          <VuiTextArea
            className="vuiMarkdownEditor__textArea"
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={isDisabled}
            required={required}
            aria-describedby={ariaDescribedBy}
            rows={rows}
            resizable
            fullWidth
          />
        </div>

        <div
          id={getPanelId("preview")}
          role="tabpanel"
          aria-labelledby={getTabId("preview")}
          hidden={mode !== "preview"}
          // Focuses tab panel so keyboard users can scroll through preview window.
          tabIndex={0}
          className={previewClasses}
        >
          {isEmpty ? (
            <VuiText size="s" align="center">
              <p>
                <VuiTextColor color="subdued">Nothing to preview yet.</VuiTextColor>
              </p>
            </VuiText>
          ) : (
            <VuiMarkdown size="s">{value}</VuiMarkdown>
          )}
        </div>
      </div>

      <VuiMarkdownPreviewModal
        title={label ?? "Preview"}
        value={value}
        isOpen={isPreviewModalOpen}
        onClose={() => setIsPreviewModalOpen(false)}
      />
    </>
  );
};

type Props = Omit<ControlProps, "id" | "required" | "isInvalid" | "aria-describedby"> & {
  hint?: ReactNode;
  errors?: string[];
  isRequired?: boolean;
  id?: string;
};

export const VuiMarkdownEditor = ({ label, hint, errors, isRequired, id, ...rest }: Props) => {
  const generatedId = useMemo(() => `markdownEditorTextArea-${createId()}`, []);

  return (
    <VuiFormGroup label={label} labelFor={id ?? generatedId} helpText={hint} errors={errors} isRequired={isRequired}>
      <MarkdownEditorControl label={label} isInvalid={Boolean(errors?.length)} {...rest} />
    </VuiFormGroup>
  );
};
