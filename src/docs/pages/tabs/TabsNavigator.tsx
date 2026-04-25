import { useLocation } from "react-router-dom";
import { VuiTabsNavigator } from "../../../lib";

export const TabsNavigator = () => {
  const { hash } = useLocation();

  const routes = [
    {
      href: "#home",
      title: "Home",
      testId: "home-tab",
      isActive: hash.endsWith("#home")
    },
    {
      href: "#profile",
      title: "Profile",
      testId: "profile-tab",
      isActive: hash.endsWith("#profile")
    },
    {
      href: "#settings",
      title: "Settings",
      testId: "settings-tab",
      isActive: hash.endsWith("#settings")
    }
  ];

  return <VuiTabsNavigator routes={routes} popover={{ anchorSide: "left" }} />;
};
