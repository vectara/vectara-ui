import { TabRoute, TabSize } from "./types";
import { VuiTabs } from "./Tabs";
import { VuiTab } from "./Tab";
import { VuiSpacer } from "../spacer/Spacer";
import { useVuiContext } from "../context/Context";

type Props = {
  tabs: TabRoute[];
  size?: TabSize;
  sideContent?: React.ReactNode;
  children?: React.ReactNode;
};

export const VuiTabbedRoutes = ({ tabs, size, sideContent, children }: Props) => {
  const { getPath } = useVuiContext();

  return (
    <>
      <VuiTabs append={sideContent} size={size}>
        {tabs.map(({ href, title, render, testId, isActive }, index) => {
          const tabLink = (
            <VuiTab
              key={index}
              href={href}
              isActive={isActive ?? (href ? getPath().includes(href) : false)}
              data-testid={testId}
            >
              {title}
            </VuiTab>
          );
          if (render) return render(tabLink);
          return tabLink;
        })}
      </VuiTabs>

      <VuiSpacer size="m" />

      {children}
    </>
  );
};
