export type InfoListItemType = {
  title: string;
  value: React.ReactNode;
};

type Props = InfoListItemType;

export const VuiInfoListItem = ({ title, value }: Props) => {
  return (
    <div className="vuiInfoListItem">
      <div className="vuiInfoListItem__title">{title}</div>
      <div className="vuiInfoListItem__value">{value}</div>
    </div>
  );
};
