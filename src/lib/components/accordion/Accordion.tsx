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
  noPadding?: boolean;
  frameless?: boolean;
};

export const VuiAccordion = ({
  header,
  children,
  isOpen,
  setIsOpen,
  headerSize,
  noPadding,
  frameless,
  ...rest
}: Props) => {
  const buttonId = createId();
  const contentId = createId();
  const headerClasses = classNames("vuiAccordionHeader", {
    "vuiAccordionHeader--isOpen": isOpen,
    "vuiAccordionHeader--noPadding": noPadding,
    "vuiAccordionHeader--frameless": frameless
  });
  const bodyClasses = classNames("vuiAccordionBody", {
    "vuiAccordionBody--noPadding": noPadding,
    "vuiAccordionBody--frameless": frameless
  });

  return (
    <>
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

      {isOpen && (
        <div className={bodyClasses} id={contentId} aria-labelledby={buttonId}>
          {children}
        </div>
      )}
    </>
  );
};
