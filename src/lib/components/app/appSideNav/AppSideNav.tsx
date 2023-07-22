import { createContext, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { BiChevronRight } from "react-icons/bi";
import { VuiIconButton } from "../../button/IconButton";
import { VuiIcon } from "../../icon/Icon";
import { buildSideNavItems, Sections, Tree } from "./utils";

export type Props = {
  items?: Sections | Tree;
  content?: React.ReactNode;
};

export const SideNavContext = createContext({ isCollapsed: false });

export const VuiAppSideNav = ({ items = [], content }: Props) => {
  const collapseButtonRef = useRef<HTMLButtonElement>(null);
  const expandButtonRef = useRef<HTMLButtonElement>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (isCollapsed) {
      expandButtonRef.current?.focus();
    } else {
      collapseButtonRef.current?.focus();
    }
  }, [isCollapsed]);

  const classes = classNames("vuiAppSideNav", {
    "vuiAppSideNav-isCollapsed": isCollapsed
  });

  const contentClasses = classNames("vuiAppSideNavContent", {
    "vuiAppSideNavContent-isHidden": isCollapsed
  });

  const navItems = buildSideNavItems(items);

  return (
    <div className={classes}>
      <div className="vuiAppSideNav__inner">
        {isCollapsed ? (
          <VuiIconButton
            ref={expandButtonRef}
            aria-label="Expand nav"
            onClick={() => setIsCollapsed(false)}
            className="vuiAppSideNavExpandButton"
            color="neutral"
            icon={
              <VuiIcon>
                <BiChevronRight />
              </VuiIcon>
            }
          />
        ) : (
          <>
            <button
              ref={collapseButtonRef}
              className="vuiAppSideNavCollapseButton"
              onClick={() => setIsCollapsed(true)}
            >
              Collapse nav
            </button>
          </>
        )}

        <SideNavContext.Provider value={{ isCollapsed }}>
          <div className={contentClasses}>
            {navItems}
            {content}
          </div>
        </SideNavContext.Provider>
      </div>
    </div>
  );
};
