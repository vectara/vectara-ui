import { Toaster, ToasterProps } from "sonner";
import { VuiPortal } from "../portal/Portal";

export const VuiNotifications = (props: ToasterProps) => {
  const finalProps = {
    position: "top-right",
    ...props
  } as const;

  // Render inside portal so notifications can appear above everything else, including drawers.
  return (
    <VuiPortal>
      <Toaster {...finalProps} />
    </VuiPortal>
  );
};
