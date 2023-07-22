import classNames from "classnames";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { VuiFlexContainer } from "../../flex/FlexContainer";
import { VuiFlexItem } from "../../flex/FlexItem";
import { VuiIcon } from "../../icon/Icon";
import { SideNavContext } from "./AppSideNav";

type Props = { path: string; name: string; iconAfter?: React.ReactNode };

export const VuiAppSideNavLink = ({ path, name, iconAfter }: Props) => {
  const { isCollapsed } = useContext(SideNavContext);
  const location = useLocation();

  const classes = classNames("vuiAppSideNavLink", {
    "vuiAppSideNavLink--active": path === location.pathname
  });

  const content = iconAfter ? (
    <VuiFlexContainer alignItems="center" spacing="xxs">
      <VuiFlexItem grow={false} shrink={false}>
        {name}
      </VuiFlexItem>

      <VuiFlexItem grow={false} shrink={false}>
        <VuiIcon size="s">{iconAfter}</VuiIcon>
      </VuiFlexItem>
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
