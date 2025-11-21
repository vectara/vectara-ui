import { createId } from "../../utils/createId";
import { VuiSpacer } from "../spacer/Spacer";
import { VuiTitle } from "../typography/Title";

type Props = {
  title: string;
  text: string;
};

export const VuiStat = ({ title, text }: Props) => {
  const id = createId();
  return (
    <>
      <VuiTitle size="xl">
        <p aria-labelledby={id}>{text}</p>
      </VuiTitle>

      <VuiSpacer size="xxs" />

      <VuiTitle size="xxs">
        <p id={id}>{title}</p>
      </VuiTitle>
    </>
  );
};
