import { InfoListType, VuiInfoList } from "../infoList/InfoList";
import { Props as PopoverProps, VuiPopover } from "../popover/Popover";

type Props = PopoverProps & {
  info?: InfoListType;
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
            <VuiInfoList info={info} />
          </div>
        )
      }
      {...rest}
    >
      {children}
    </VuiPopover>
  );
};
