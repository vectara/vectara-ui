import { Toaster, ToasterProps } from "sonner";

export const VuiNotifications = (props: ToasterProps) => {
  const finalProps = {
    position: "top-right",
    ...props
  } as const;

  return <Toaster {...finalProps} />;
};
