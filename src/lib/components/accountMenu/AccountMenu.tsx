type AccountMenuInfo = Array<{
  title: string;
  value: string;
}>;

type Props = {
  info?: AccountMenuInfo;
  children?: React.ReactNode;
};

export const VuiAccountMenu = ({ info, children }: Props) => {
  return (
    <>
      {info && info.length > 0 && (
        <div className="vuiAccounrMenuHeader">
          {info.map((item, index) => (
            <div key={index} className="vuiAccountMenuHeaderItem">
              <div className="vuiAccountMenuHeaderItem__title">{item.title}</div>
              <div className="vuiAccountMenuHeaderItem__value">{item.value}</div>
            </div>
          ))}
        </div>
      )}

      {children}
    </>
  );
};
