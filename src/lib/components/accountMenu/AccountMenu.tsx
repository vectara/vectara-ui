import { useState } from "react";
import { VuiPopover } from "../popover/Popover";

type AccountMenuInfo = Array<{
  title: string;
  value: string;
}>;

type Props = {
  button: React.ReactElement;
  info?: AccountMenuInfo;
  children?: React.ReactNode;
};

export const VuiAccountMenu = ({ button, info, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <VuiPopover
      isOpen={isOpen}
      setIsOpen={() => setIsOpen(!isOpen)}
      button={button}
      header={
        info &&
        info.length > 0 && (
          <div className="vuiAccounrMenuHeader">
            {info.map((item, index) => (
              <div key={index} className="vuiAccountMenuHeaderItem">
                <div className="vuiAccountMenuHeaderItem__title">{item.title}</div>
                <div className="vuiAccountMenuHeaderItem__value">{item.value}</div>
              </div>
            ))}
          </div>
        )
      }
    >
      {children}
    </VuiPopover>
  );
};
