import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { VuiIcon } from "../../icon/Icon";
import { VuiIconButton } from "../../button/IconButton";
import { VuiAppSideNavLink } from "./AppSideNavLink";
import { Tree, TreeItem } from "../types";

export const buildTree = (items: Tree) => {
  return <div className="vuiAppSideNavTree">{buildTreeItems(items)}</div>;
};

const buildTreeItems = (items: Tree) => {
  return items.map(({ name, pages, path, iconBefore, iconAfter, isSelected, ...rest }) => {
    if (path) {
      if (pages) {
        const childPages = buildTreeItems(pages);

        return (
          <AppSideNavTreeSection
            key={path ?? name}
            path={path}
            name={name}
            iconBefore={iconBefore}
            iconAfter={iconAfter}
            isSelected={isSelected}
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
          isSelected={isSelected}
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

type Props = Pick<TreeItem, "name" | "path" | "iconBefore" | "iconAfter" | "isSelected" | "data-testid"> & {
  children: React.ReactNode;
};

const AppSideNavTreeSection = ({ name, path, children, iconBefore, iconAfter, isSelected, ...rest }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="vuiAppSideNavTreeSection">
      <VuiAppSideNavLink
        path={path ?? "/"}
        name={name}
        iconBefore={iconBefore}
        iconAfter={iconAfter}
        isSelected={isSelected}
        {...rest}
      />

      <VuiIconButton
        aria-label={isOpen ? "Hide section" : "Show section"}
        size="s"
        className="vuiAppSideNavTreeToggleButton"
        onClick={() => setIsOpen(!isOpen)}
        color="neutral"
        icon={<VuiIcon>{isOpen ? <BiChevronUp /> : <BiChevronDown />}</VuiIcon>}
      />

      {isOpen && <div className="vuiAppSideNavTreeChildren">{children}</div>}
    </div>
  );
};
