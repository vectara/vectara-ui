import { TabSize } from "./types";
import { VuiTabs } from "./Tabs";
import { VuiTab } from "./Tab";
import { VuiSpacer } from "../spacer/Spacer";
import { useVuiContext } from "../context/Context";

type Props = {
  tabs: Array<{
    href: string;
    title: string;
    render?: (tabLink: React.ReactNode) => React.ReactNode;
    component: React.ReactNode;
    testId?: string;
  }>;
  size?: TabSize;
  sideContent?: React.ReactNode;
  children?: React.ReactNode;
};

export const VuiTabbedRoutes = ({ tabs, size, sideContent, children }: Props) => {
  const { getPath } = useVuiContext();

  return (
    <>
      <VuiTabs append={sideContent} size={size}>
        {tabs.map(({ href, title, render, testId }, index) => {
          const isActive = getPath().includes(href);
          const tabLink = (
            <VuiTab key={index} href={href} isActive={isActive} data-testid={testId}>
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
