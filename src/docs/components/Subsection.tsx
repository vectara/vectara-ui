import { VuiSpacer, VuiTitle } from "../../lib";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const Subsection = ({ title, children }: Props) => {
  return (
    <>
      <VuiTitle size="xxs">
        <h4>{title}</h4>
      </VuiTitle>

      <VuiSpacer size="s" />

      {children}

      <VuiSpacer size="m" />
    </>
  );
};
