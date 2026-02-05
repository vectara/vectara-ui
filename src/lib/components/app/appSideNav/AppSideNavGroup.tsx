import { VuiSpacer } from "../../spacer/Spacer";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const VuiAppSideNavGroup = ({ title, children }: Props) => {
  return (
    <>
      <div className="vuiAppSideNavGroup__title">{title}</div>
      <VuiSpacer size="xxs" />
      {children}
    </>
  );
};
