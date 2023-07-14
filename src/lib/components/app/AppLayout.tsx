import { VuiAppSideNav, Props as VuiAppSideNavProps } from "./AppSideNav";

type Props = {
  children: React.ReactNode;
  navItems?: VuiAppSideNavProps["items"];
  navContent?: React.ReactNode;
};

export const VuiAppLayout = ({ children, navItems, navContent }: Props) => {
  return (
    <div className="vuiAppLayout">
      <div className="vuiAppLayout__sideNav">
        <VuiAppSideNav items={navItems} content={navContent} />
      </div>

      <div className="vuiAppLayout__content">{children}</div>
    </div>
  );
};
