import { ButtonHTMLAttributes, forwardRef, useState } from "react";
import { VuiPopover, Props as PopoverProps } from "../popover/Popover";
import { VuiTab } from "./Tab";
import { TabRoute } from "./types";
import { VuiTabs } from "./Tabs";
import { useVuiContext } from "../context/Context";
import { VuiIcon } from "../icon/Icon";
import { BiDotsVertical } from "react-icons/bi";
import { VuiFlexContainer } from "../flex/FlexContainer";

export type TabNavigatorRoute = Omit<TabRoute, "render"> & {
  append?: React.ReactNode;
};

type Props = {
  routes: TabNavigatorRoute[];
  popover?: Omit<PopoverProps, "header" | "isOpen" | "setIsOpen" | "button" | "children" | "padding">;
  "data-testid"?: string;
};

// Consumes `isSelected` from VuiPopover, which clones this as its trigger, to keep it off the DOM.
const TabsNavigatorButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & { isSelected?: boolean }
>(({ isSelected, children, ...rest }, ref) => (
  <button className="vuiTabsNavigatorButton" type="button" ref={ref} {...rest}>
    {children}
  </button>
));

export const VuiTabsNavigator = ({ routes, popover, ...rest }: Props) => {
  const { getPath } = useVuiContext();

  const [isOpen, setIsOpen] = useState(false);

  const isRouteActive = (route: TabRoute) => {
    return route.isActive ?? (route.href ? getPath().includes(route.href) : false);
  };

  const activeRoute = routes.find((route) => isRouteActive(route));

  return (
    <VuiPopover
      {...popover}
      isOpen={isOpen}
      setIsOpen={() => setIsOpen(!isOpen)}
      button={
        <TabsNavigatorButton {...rest}>
          <div className="vuiTabsNavigatorButton__inner">
            <VuiIcon size="xs">
              <BiDotsVertical />
            </VuiIcon>

            <div>{activeRoute?.title ?? "No selection"}</div>
          </div>
        </TabsNavigatorButton>
      }
      padding="none"
    >
      <VuiTabs size="s" tabStyle="enclosed" vertical>
        {routes.map((route, index) => {
          const { href, onClick, title, testId, append } = route;

          return (
            <VuiTab
              key={index}
              href={href}
              isActive={isRouteActive(route)}
              data-testid={testId}
              onClick={() => {
                onClick?.();
                setIsOpen(false);
              }}
            >
              <VuiFlexContainer spacing="s" alignItems="center">
                {title}
                {append}
              </VuiFlexContainer>
            </VuiTab>
          );
        })}
      </VuiTabs>
    </VuiPopover>
  );
};
