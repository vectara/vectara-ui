import { VuiAppSideNav, Props as VuiAppSideNavProps } from "./AppSideNav";

type Props = {
  children: React.ReactNode;
  navItems?: VuiAppSideNavProps["items"];
  nav?: React.ReactNode;
};

export const VuiAppLayout = ({ children, navItems, nav }: Props) => {
  return (
    <div className="vuiAppLayout">
      <div className="vuiAppLayout__sideNav">{navItems ? <VuiAppSideNav items={navItems} /> : nav}</div>

      <div className="vuiAppLayout__content">{children}</div>
    </div>
  );
};
