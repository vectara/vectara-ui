import classNames from "classnames";

type Props = {
  reference: string;
  isSelected?: boolean;
  onClick?: () => void;
};

export const VuiSummaryCitation = ({ reference, isSelected, onClick }: Props) => {
  const classes = classNames("vuiSummaryCitation", {
    "vuiSummaryCitation-isSelected": isSelected
  });

  return (
    <button className={classes} onClick={onClick}>
      {reference}
    </button>
  );
};
