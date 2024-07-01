import { Props as PopoverProps, VuiPopover } from "../popover/Popover";
import { VuiSpacer } from "../spacer/Spacer";

type InfoMenuInfo = Array<{
  title: string;
  value: React.ReactNode;
}>;

type Props = PopoverProps & {
  info?: InfoMenuInfo;
};

export const VuiInfoMenu = ({ isOpen, setIsOpen, button, info, children, ...rest }: Props) => {
  return (
    <VuiPopover
      className="vuiInfoMenu"
      isOpen={isOpen}
      setIsOpen={() => setIsOpen(!isOpen)}
      button={button}
      header={
        info &&
        info.length > 0 && (
          <div className="vuiInfoMenuHeader">
            {info.map((item, index) => (
              <div key={index} className="vuiInfoMenuHeaderItem">
                <div className="vuiInfoMenuHeaderItem__title">{item.title}</div>
                <div className="vuiInfoMenuHeaderItem__value">{item.value}</div>
                {index < info.length - 1 && <VuiSpacer size="m" />}
              </div>
            ))}
          </div>
        )
      }
      {...rest}
    >
      {children}
    </VuiPopover>
  );
};
