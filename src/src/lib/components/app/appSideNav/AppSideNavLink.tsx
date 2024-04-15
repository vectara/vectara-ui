import classNames from "classnames";
import { VuiFlexContainer } from "../../flex/FlexContainer";
import { VuiFlexItem } from "../../flex/FlexItem";
import { VuiIcon } from "../../icon/Icon";
import { TreeItem } from "../types";
import { useVuiContext } from "../../context/Context";

type Props = Pick<TreeItem, "name" | "path" | "iconBefore" | "iconAfter" | "isActive" | "className">;

export const VuiAppSideNavLink = ({ path, name, iconBefore, iconAfter, isActive, className, ...rest }: Props) => {
  const { createLink, getPath } = useVuiContext();

  const classes = classNames(
    "vuiAppSideNavLink",
    {
      "vuiAppSideNavLink--active": isActive ?? path === getPath()
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
    className: classes,
    children: content,
    href: path ?? "/",
    ...rest
  });
};
