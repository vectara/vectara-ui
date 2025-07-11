import classNames from "classnames";
import { VuiFlexContainer } from "../../flex/FlexContainer";
import { VuiFlexItem } from "../../flex/FlexItem";
import { VuiIcon } from "../../icon/Icon";
import { TreeItem } from "../types";
import { useVuiContext } from "../../context/Context";
import { forwardRef } from "react";

type Props = Pick<TreeItem, "name" | "path" | "iconBefore" | "iconAfter" | "isSelected" | "className"> & {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export const VuiAppSideNavLink = forwardRef<HTMLAnchorElement | null, Props>(
  ({ path, onClick, name, iconBefore, iconAfter, isSelected, className, ...rest }: Props, ref) => {
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

          {iconAfter && (
            <VuiFlexItem grow={false} shrink={false}>
              <VuiIcon size="s">{iconAfter}</VuiIcon>
            </VuiFlexItem>
          )}
        </VuiFlexContainer>
      ) : (
        name
      );

    return createLink({
      ref,
      className: classes,
      children: content,
      href: path,
      onClick,
      ...rest
    });
  }
);
