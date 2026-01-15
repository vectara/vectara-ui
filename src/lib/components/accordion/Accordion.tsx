import classNames from "classnames";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiIcon } from "../icon/Icon";
import { VuiText } from "../typography/Text";
import { createId } from "../../utils/createId";
import { TEXT_SIZE } from "../typography/types";

type Props = {
  header: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  headerSize?: (typeof TEXT_SIZE)[number];
  padding?: "m" | "none";
  frame?: boolean;
  append?: React.ReactNode;
};

export const VuiAccordion = ({
  header,
  children,
  isOpen,
  setIsOpen,
  headerSize,
  padding = "m",
  frame = true,
  append,
  ...rest
}: Props) => {
  const buttonId = createId();
  const contentId = createId();
  const headerClasses = classNames("vuiAccordionHeader", {
    "vuiAccordionHeader--isOpen": isOpen,
    "vuiAccordionHeader--noPadding": padding === "none",
    "vuiAccordionHeader--frameless": !frame || append
  });
  const bodyClasses = classNames("vuiAccordionBody", {
    "vuiAccordionBody--noPadding": padding === "none",
    "vuiAccordionBody--frameless": !frame
  });

  const button = (
    <button
      className={headerClasses}
      onClick={() => setIsOpen(!isOpen)}
      id={buttonId}
      aria-controls={contentId}
      aria-expanded={isOpen}
      type="button"
      {...rest}
    >
      <VuiFlexContainer alignItems="center" justifyContent="start" spacing="xxs">
        <VuiFlexItem grow={false} shrink={false}>
          <VuiIcon size="m" color="neutral">
            {isOpen ? <BiChevronDown /> : <BiChevronRight />}
          </VuiIcon>
        </VuiFlexItem>

        <VuiFlexItem className="vuiAccordionHeader__title" grow={1}>
          <VuiText size={headerSize}>{header}</VuiText>
        </VuiFlexItem>
      </VuiFlexContainer>
    </button>
  );

  return (
    <>
      {append ? (
        <VuiFlexContainer
          className={classNames("vuiAccordionHeader__wrapper", {
            "vuiAccordionHeader__wrapper--isOpen": isOpen,
            "vuiAccordionHeader__wrapper--frameless": !frame
          })}
          alignItems="center"
          justifyContent="spaceBetween"
        >
          <VuiFlexItem grow={1}>{button}</VuiFlexItem>
          <VuiFlexItem grow={false} shrink={false}>
            {append}
          </VuiFlexItem>
        </VuiFlexContainer>
      ) : (
        button
      )}

      {isOpen && (
        <div className={bodyClasses} id={contentId} aria-labelledby={buttonId}>
          {children}
        </div>
      )}
    </>
  );
};
