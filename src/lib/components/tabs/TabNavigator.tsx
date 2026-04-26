import { useState } from "react";
import { VuiPopover, Props as PopoverProps } from "../popover/Popover";
import { VuiTab } from "./Tab";
import { TabRoute } from "./types";
import { VuiTabs } from "./Tabs";
import { useVuiContext } from "../context/Context";
import { VuiIcon } from "../icon/Icon";
import { BiDotsVertical } from "react-icons/bi";

type Props = {
  routes: TabRoute[];
  popover?: Omit<PopoverProps, "header" | "isOpen" | "setIsOpen" | "button" | "children" | "padding">;
};

export const VuiTabsNavigator = ({ routes, popover }: Props) => {
  const { getPath } = useVuiContext();

  const [isOpen, setIsOpen] = useState(false);

  const activeRoute = routes.find((route) => route.isActive || getPath().includes(route.href));

  return (
    <VuiPopover
      {...popover}
      isOpen={isOpen}
      setIsOpen={() => setIsOpen(!isOpen)}
      button={
        <button className="vuiTabsNavigatorButton">
          <div className="vuiTabsNavigatorButton__inner">
            <VuiIcon size="xs">
              <BiDotsVertical />
            </VuiIcon>

            <div>{activeRoute?.title ?? "No selection"}</div>
          </div>
        </button>
      }
      padding="none"
    >
      <VuiTabs size="s" tabStyle="enclosed" vertical>
        {routes.map(({ href, title, render, testId, isActive }, index) => {
          const tabLink = (
            <VuiTab
              key={index}
              href={href}
              isActive={isActive ?? getPath().includes(href)}
              data-testid={testId}
              onClick={() => setIsOpen(false)}
            >
              {title}
            </VuiTab>
          );
          if (render) return render(tabLink);
          return tabLink;
        })}
      </VuiTabs>
    </VuiPopover>
  );
};
