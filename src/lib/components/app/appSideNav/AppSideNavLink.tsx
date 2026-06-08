import classNames from "classnames";
import { VuiFlexContainer } from "../../flex/FlexContainer";
import { VuiFlexItem } from "../../flex/FlexItem";
import { VuiIcon } from "../../icon/Icon";
import { TreeItem } from "../types";
import { useVuiContext } from "../../context/Context";
import { forwardRef } from "react";

type Props = Pick<TreeItem, "name" | "path" | "iconBefore" | "iconAfter" | "isSelected" | "className"> & {
  onClick?: React.MouseEventHandler<HTMLElement>;
  iconAfterAlignEnd?: boolean;
  after?: React.ReactNode;
};

export const VuiAppSideNavLink = forwardRef<HTMLAnchorElement | HTMLButtonElement, Props>(
  (
    { path, onClick, name, iconBefore, iconAfter, after, isSelected, className, iconAfterAlignEnd, ...rest }: Props,
    ref
  ) => {
    const { createLink, getPath } = useVuiContext();

    const classes = classNames(
      "vuiAppSideNavLink",
      {
        "vuiAppSideNavLink--active": isSelected ?? path === getPath()
      },
      className
    );

    const content =
      iconBefore || iconAfter ? (
        <VuiFlexContainer alignItems="center" spacing="xxs">
          {iconBefore && (
            <VuiFlexItem grow={false} shrink={false}>
              <VuiIcon size="s">{iconBefore}</VuiIcon>
            </VuiFlexItem>
          )}

          <VuiFlexItem grow={false} shrink={false}>
            {name}
          </VuiFlexItem>

          {(iconAfter || after) && (
            <VuiFlexItem
              grow={false}
              shrink={false}
              className={iconAfterAlignEnd ? "vuiAppSideNavLink__iconAfter--alignEnd" : undefined}
            >
              <VuiFlexContainer alignItems="center" spacing="xxs">
                {after}
                {iconAfter && <VuiIcon size="s">{iconAfter}</VuiIcon>}
              </VuiFlexContainer>
            </VuiFlexItem>
          )}
        </VuiFlexContainer>
      ) : (
        name
      );

    if (!path) {
      return (
        <button
          className={classes}
          onClick={onClick}
          type="button"
          ref={ref as React.ForwardedRef<HTMLButtonElement>}
          {...rest}
        >
          {content}
        </button>
      );
    }

    return createLink({
      ref: ref as React.ForwardedRef<HTMLAnchorElement | null>,
      className: classes,
      children: content,
      href: path,
      onClick,
      ...rest
    });
  }
);
