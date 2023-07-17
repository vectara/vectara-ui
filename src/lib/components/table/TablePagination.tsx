import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiButtonTertiary } from "../button/ButtonTertiary";
import { VuiIcon } from "../icon/Icon";
import { createPagination } from "./createPagination";

export type Props = {
  page: number;
  numPages: number;
  onSelectPage: (page: number) => void;
};

export const VuiTablePagination = ({ page, numPages, onSelectPage }: Props) => {
  const { items, activeIndex } = createPagination(page, numPages);

  return (
    <VuiFlexContainer justifyContent="center" alignItems="center">
      <VuiFlexItem grow={false} shrink={false}>
        <VuiFlexContainer spacing="none" alignItems="center">
          <VuiFlexItem grow={false} shrink={false}>
            <VuiButtonTertiary
              icon={
                <VuiIcon>
                  <BiLeftArrowAlt />
                </VuiIcon>
              }
              color="neutral"
              size="s"
              onClick={() => onSelectPage(page - 1)}
              isDisabled={page === 1}
            >
              Previous
            </VuiButtonTertiary>
          </VuiFlexItem>

          {items.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <VuiFlexItem grow={false} shrink={false} key={index}>
                {item === "..." ? (
                  <div className="vuiTableManyPagesToken">{item}</div>
                ) : (
                  <VuiButtonTertiary
                    color={isActive ? "primary" : "neutral"}
                    isInert={isActive}
                    isSelected={isActive}
                    size="s"
                    onClick={() => onSelectPage(item)}
                  >
                    {item}
                  </VuiButtonTertiary>
                )}
              </VuiFlexItem>
            );
          })}

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
              onClick={() => onSelectPage(page + 1)}
              isDisabled={page === numPages}
            >
              Next
            </VuiButtonTertiary>
          </VuiFlexItem>
        </VuiFlexContainer>
      </VuiFlexItem>
    </VuiFlexContainer>
  );
};
