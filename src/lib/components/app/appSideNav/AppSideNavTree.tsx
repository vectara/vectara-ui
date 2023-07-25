import { useContext, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { VuiIcon } from "../../icon/Icon";
import { VuiIconButton } from "../../button/IconButton";
import { VuiAppSideNavLink } from "./AppSideNavLink";
import { SideNavContext } from "./AppSideNav";

export type Tree = Array<TreeItem>;

export type TreeItem = {
  name: string;
  path?: string;
  pages?: Tree;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
};

export const buildTree = (items: Tree) => {
  return items.map(({ name, pages, path, iconBefore, iconAfter }) => {
    if (path) {
      if (pages) {
        const childPages = buildTree(pages);

        return (
          <AppSideNavTreeSection key={name} path={path} name={name} iconBefore={iconBefore} iconAfter={iconAfter}>
            {childPages}
          </AppSideNavTreeSection>
        );
      }

      return <VuiAppSideNavLink key={name} path={path} name={name} iconBefore={iconBefore} iconAfter={iconAfter} />;
    }

    return (
      <div key={name} className="vuiAppSideNavTreeSection__subTitle">
        {name}
      </div>
    );
  });
};

type Props = {
  name: string;
  path: string;
  children: React.ReactNode;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
};

const AppSideNavTreeSection = ({ name, path, children, iconBefore, iconAfter }: Props) => {
  const { isCollapsed } = useContext(SideNavContext);
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="vuiAppSideNavTreeSection">
      <VuiAppSideNavLink path={path} name={name} iconBefore={iconBefore} iconAfter={iconAfter} />

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
