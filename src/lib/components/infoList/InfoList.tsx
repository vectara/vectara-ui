export type InfoListType = Array<{
  title: string;
  value: React.ReactNode;
}>;

type Props = {
  info: InfoListType;
};

export const VuiInfoList = ({ info }: Props) => {
  return (
    <>
      {info.map((item, index) => (
        <div key={index} className="vuiInfoListItem">
          <div className="vuiInfoListItem__title">{item.title}</div>
          <div className="vuiInfoListItem__value">{item.value}</div>
        </div>
      ))}
    </>
  );
};
