import { useContext, useState } from "react";
import classNames from "classnames";
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
  iconAfter?: React.ReactNode;
};

export const buildTree = (items: Tree) => {
  return items.map(({ name, pages, path, iconAfter }) => {
    if (path) {
      if (pages) {
        const childPages = buildTree(pages);

        return (
          <AppSideNavTreeSection key={name} path={path} name={name}>
            {childPages}
          </AppSideNavTreeSection>
        );
      }

      return <VuiAppSideNavLink key={name} path={path} name={name} iconAfter={iconAfter} />;
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
};

const AppSideNavTreeSection = ({ name, path, children }: Props) => {
  const { isCollapsed } = useContext(SideNavContext);
  const [isOpen, setIsOpen] = useState(true);

  const classes = classNames("vuiAppSideNavTreeChildren", {
    "vuiAppSideNavTreeChildren-isOpen": isOpen
  });

  return (
    <div className="vuiAppSideNavTreeSection">
      <VuiAppSideNavLink path={path} name={name} />

      <VuiIconButton
        className="vuiAppSideNavTreeToggleButton"
        onClick={() => setIsOpen(!isOpen)}
        color="neutral"
        icon={<VuiIcon>{isOpen ? <BiChevronUp /> : <BiChevronDown />}</VuiIcon>}
        tabIndex={isCollapsed ? -1 : undefined}
      />

      <div className={classes}>{children}</div>
    </div>
  );
};
