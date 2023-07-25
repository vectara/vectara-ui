import classNames from "classnames";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { VuiFlexContainer } from "../../flex/FlexContainer";
import { VuiFlexItem } from "../../flex/FlexItem";
import { VuiIcon } from "../../icon/Icon";
import { SideNavContext } from "./AppSideNav";

type Props = { path: string; name: string; iconBefore?: React.ReactNode; iconAfter?: React.ReactNode };

export const VuiAppSideNavLink = ({ path, name, iconBefore, iconAfter }: Props) => {
  const { isCollapsed } = useContext(SideNavContext);
  const location = useLocation();

  const classes = classNames("vuiAppSideNavLink", {
    "vuiAppSideNavLink--active": path === location.pathname
  });

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

  return (
    <Link className={classes} to={path} key={name} tabIndex={isCollapsed ? -1 : undefined}>
      {content}
    </Link>
  );
};
