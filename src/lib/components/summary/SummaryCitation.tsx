import { VuiButtonSecondary } from "../button/ButtonSecondary";

type Props = {
  children: string;
  marginBefore?: boolean;
  marginAfter?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
};

export const VuiSummaryCitation = ({ children, marginBefore, marginAfter, isSelected, onClick }: Props) => {
  return (
    <VuiButtonSecondary
      color="primary"
      size="xs"
      className="vuiSummaryCitation"
      onClick={onClick}
      isSelected={isSelected}
    >
      {children}
    </VuiButtonSecondary>
  );
};
