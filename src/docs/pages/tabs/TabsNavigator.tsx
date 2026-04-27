import { useLocation } from "react-router-dom";
import { VuiTabsNavigator } from "../../../lib";

export const TabsNavigator = () => {
  const { hash } = useLocation();

  const routes = [
    {
      href: "#home",
      title: "Home",
      testId: "home-tab",
      isActive: hash.endsWith("#home"),
      onClick: () => console.log("Home tab clicked")
    },
    {
      href: "#profile",
      title: "Profile",
      testId: "profile-tab",
      isActive: hash.endsWith("#profile"),
      onClick: () => console.log("Profile tab clicked")
    },
    {
      href: "#settings",
      title: "Settings",
      testId: "settings-tab",
      isActive: hash.endsWith("#settings"),
      onClick: () => console.log("Settings tab clicked")
    }
  ];

  return <VuiTabsNavigator routes={routes} popover={{ anchorSide: "left" }} />;
};
