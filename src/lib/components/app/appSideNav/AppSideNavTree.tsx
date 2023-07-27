import { useContext, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { VuiIcon } from "../../icon/Icon";
import { VuiIconButton } from "../../button/IconButton";
import { VuiAppSideNavLink } from "./AppSideNavLink";
import { SideNavContext } from "./AppSideNav";
import { Tree, TreeItem } from "../types";

export const buildTree = (items: Tree) => {
  return items.map(({ name, pages, path, iconBefore, iconAfter, isActive, ...rest }) => {
    if (path) {
      if (pages) {
        const childPages = buildTree(pages);

        return (
          <AppSideNavTreeSection
            key={path ?? name}
            path={path}
            name={name}
            iconBefore={iconBefore}
            iconAfter={iconAfter}
            isActive={isActive}
            {...rest}
          >
            {childPages}
          </AppSideNavTreeSection>
        );
      }

      return (
        <VuiAppSideNavLink
          key={path ?? name}
          path={path}
          name={name}
          iconBefore={iconBefore}
          iconAfter={iconAfter}
          isActive={isActive}
          {...rest}
        />
      );
    }

    return (
      <div key={name} className="vuiAppSideNavTreeSection__subTitle" {...rest}>
        {name}
      </div>
    );
  });
};

type Props = Pick<TreeItem, "name" | "path" | "iconBefore" | "iconAfter" | "isActive" | "data-testid"> & {
  children: React.ReactNode;
};

const AppSideNavTreeSection = ({ name, path, children, iconBefore, iconAfter, isActive, ...rest }: Props) => {
  const { isCollapsed } = useContext(SideNavContext);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="vuiAppSideNavTreeSection">
      <VuiAppSideNavLink
        path={path ?? "/"}
        name={name}
        iconBefore={iconBefore}
        iconAfter={iconAfter}
        isActive={isActive}
        {...rest}
      />

      <VuiIconButton
        className="vuiAppSideNavTreeToggleButton"
        onClick={() => setIsOpen(!isOpen)}
        color="neutral"
        icon={<VuiIcon>{isOpen ? <BiChevronUp /> : <BiChevronDown />}</VuiIcon>}
        tabIndex={isCollapsed ? -1 : undefined}
      />

      {isOpen && <div className="vuiAppSideNavTreeChildren">{children}</div>}
    </div>
  );
};
