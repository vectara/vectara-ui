import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiButtonTertiary } from "../button/ButtonTertiary";
import { VuiIcon } from "../icon/Icon";

export type Props = {
  onSelectPreviousPage?: () => void;
  onSelectNextPage?: () => void;
};

export const VuiTablePager = ({ onSelectPreviousPage, onSelectNextPage }: Props) => {
  return (
    <VuiFlexContainer justifyContent="center" alignItems="center">
      <VuiFlexItem grow={false} shrink={false}>
        <VuiButtonTertiary
          icon={
            <VuiIcon>
              <BiLeftArrowAlt />
            </VuiIcon>
          }
          color="neutral"
          size="s"
          onClick={() => onSelectPreviousPage?.()}
          isDisabled={!onSelectPreviousPage}
        >
          Previous
        </VuiButtonTertiary>
      </VuiFlexItem>

      <VuiFlexItem grow={false} shrink={false}>
        <VuiButtonTertiary
          icon={
            <VuiIcon>
              <BiRightArrowAlt />
            </VuiIcon>
          }
          iconSide="right"
          color="neutral"
          size="s"
          onClick={() => onSelectNextPage?.()}
          isDisabled={!onSelectNextPage}
        >
          Next
        </VuiButtonTertiary>
      </VuiFlexItem>
    </VuiFlexContainer>
  );
};
