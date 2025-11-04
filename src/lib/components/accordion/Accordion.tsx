import classNames from "classnames";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiIcon } from "../icon/Icon";
import { createId } from "../../utils/createId";

type Props = {
  header: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const VuiAccordion = ({ header, children, isOpen, setIsOpen, ...rest }: Props) => {
  const buttonId = createId();
  const contentId = createId();
  const classes = classNames("vuiAccordionHeader", {
    "vuiAccordionHeader--isOpen": isOpen
  });

  return (
    <>
      <button
        className={classes}
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
            {header}
          </VuiFlexItem>
        </VuiFlexContainer>
      </button>

      {isOpen && (
        <div className="vuiAccordionBody" id={contentId} aria-labelledby={buttonId}>
          {children}
        </div>
      )}
    </>
  );
};
