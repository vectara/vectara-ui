import { BiX } from "react-icons/bi";
import classNames from "classnames";
import { VuiIconButton } from "../../button/IconButton";
import { VuiFlexContainer } from "../../flex/FlexContainer";
import { VuiFlexItem } from "../../flex/FlexItem";
import { VuiIcon } from "../../icon/Icon";
import { ForwardedRef, forwardRef } from "react";

type Props<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  onClearAll?: () => void;
  className?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  fullWidth?: boolean;
  "data-testid"?: string;
};

const VuiItemsInputComponent = <T,>(
  { items, renderItem, onClearAll, className, onKeyDown, onClick, fullWidth, ...rest }: Props<T>,
  ref: ForwardedRef<HTMLDivElement>
) => {
  const classes = classNames(
    "vuiItemsInput",
    {
      "vuiItemsInput--fullWidth": fullWidth
    },
    className
  );

  return (
    <div className={classes} tabIndex={0} onKeyDown={onKeyDown} onClick={onClick} ref={ref} {...rest}>
      <VuiFlexContainer className="vuiTextArea" justifyContent="spaceBetween" spacing="xxs">
        <VuiFlexItem grow={1}>
          <VuiFlexContainer alignItems="center" spacing="xxs" wrap>
            {items.map((item, ix) => (
              <VuiFlexItem key={ix}>{renderItem(item)}</VuiFlexItem>
            ))}
          </VuiFlexContainer>
        </VuiFlexItem>

        {onClearAll && items.length > 0 && (
          <VuiFlexItem>
            <VuiIconButton
              aria-label="Remove all"
              size="xs"
              color="neutral"
              onClick={(e) => {
                e.stopPropagation();
                onClearAll?.();
              }}
              icon={
                <VuiIcon size="s">
                  <BiX />
                </VuiIcon>
              }
            />
          </VuiFlexItem>
        )}
      </VuiFlexContainer>
    </div>
  );
};

export const VuiItemsInput = forwardRef(VuiItemsInputComponent) as <T>(
  props: Props<T> & React.RefAttributes<HTMLDivElement>
) => React.JSX.Element;
