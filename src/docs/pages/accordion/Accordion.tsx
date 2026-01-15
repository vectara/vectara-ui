import { useState } from "react";
import {
  VuiAccordion,
  VuiText,
  VuiSelect,
  VuiSpacer,
  VuiCheckbox,
  VuiFlexContainer,
  VuiFlexItem,
  VuiFormGroup,
  VuiPopover,
  VuiOptionsList,
  VuiIcon,
  VuiIconButton
} from "../../../lib";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const headerSizeOptions = [
  { text: "Extra small (xs)", value: "xs" },
  { text: "Small (s)", value: "s" },
  { text: "Medium (m)", value: "m" },
  { text: "Large (l)", value: "l" }
];

const paddingOptions = [
  { text: "Medium (m)", value: "m" },
  { text: "None", value: "none" }
];

const appendOptions = [
  { value: "edit", label: "Edit" },
  { value: "duplicate", label: "Duplicate" },
  { value: "delete", label: "Delete" }
];

export const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [headerSize, setHeaderSize] = useState<"xs" | "s" | "m" | "l">("s");
  const [padding, setPadding] = useState<"m" | "none">("m");
  const [frame, setFrame] = useState(true);
  const [showAppend, setShowAppend] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <>
      <VuiFlexContainer spacing="m" alignItems="start">
        <VuiFlexItem>
          <VuiFormGroup label="Header size" labelFor="headerSizeSelect">
            <VuiSelect
              id="headerSizeSelect"
              options={headerSizeOptions}
              value={headerSize}
              onChange={(e) => setHeaderSize(e.target.value as "xs" | "s" | "m" | "l")}
            />
          </VuiFormGroup>
        </VuiFlexItem>

        <VuiFlexItem>
          <VuiFormGroup label="Padding" labelFor="paddingSelect">
            <VuiSelect
              id="paddingSelect"
              options={paddingOptions}
              value={padding}
              onChange={(e) => setPadding(e.target.value as "m" | "none")}
            />
          </VuiFormGroup>
        </VuiFlexItem>

        <VuiFlexItem>
          <VuiCheckbox
            label="Frame"
            checked={frame}
            onChange={(e) => setFrame(e.target.checked)}
          />
        </VuiFlexItem>

        <VuiFlexItem>
          <VuiCheckbox
            label="Append"
            checked={showAppend}
            onChange={(e) => setShowAppend(e.target.checked)}
          />
        </VuiFlexItem>
      </VuiFlexContainer>

      <VuiSpacer size="m" />

      <VuiAccordion
        header="Accordion header"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        headerSize={headerSize}
        padding={padding}
        frame={frame}
        append={
          showAppend ? (
            <VuiPopover
              isOpen={isPopoverOpen}
              setIsOpen={setIsPopoverOpen}
              button={
                <VuiIconButton
                  aria-label="More options"
                  icon={
                    <VuiIcon>
                      <BiDotsHorizontalRounded />
                    </VuiIcon>
                  }
                  color="neutral"
                />
              }
            >
              <VuiOptionsList onSelectOption={() => setIsPopoverOpen(false)} options={appendOptions} />
            </VuiPopover>
          ) : undefined
        }
      >
        <VuiText>
          <p>Accordion content goes here.</p>
        </VuiText>
      </VuiAccordion>
    </>
  );
};
