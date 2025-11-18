import { PortalContainer } from "./PortalContainer";

const PortalContainerSource = require("!!raw-loader!./PortalContainer");

export const portalContainer = {
  name: "Portal Container",
  path: "/portal-container",
  examples: [
    {
      name: "Custom portal container",
      component: <PortalContainer />,
      source: PortalContainerSource.default.toString()
    }
  ]
};
