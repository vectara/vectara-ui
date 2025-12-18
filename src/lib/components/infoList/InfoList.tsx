import { InfoListItemType, VuiInfoListItem } from "./InfoListItem";

export type InfoListType = Array<InfoListItemType>;

type Props = {
  info: InfoListType;
};

export const VuiInfoList = ({ info }: Props) => {
  return (
    <div className="vuiInfoList">
      {info.map((item, index) => (
        <VuiInfoListItem key={index} title={item.title} value={item.value} />
      ))}
    </div>
  );
};
