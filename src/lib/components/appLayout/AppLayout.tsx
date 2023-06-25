import { VuiAppSideNav, Props as VuiAppSideNavProps } from "../appSideNav/AppSideNav";

type Props = {
  children: React.ReactNode;
  navItems: VuiAppSideNavProps["items"];
};

export const VuiAppLayout = ({ children, navItems }: Props) => {
  return (
    <div className="vuiAppLayout">
      <div className="vuiAppLayout__sideNav">
        <VuiAppSideNav items={navItems} />
      </div>

      <div className="vuiAppLayout__content">{children}</div>
    </div>
  );
};
