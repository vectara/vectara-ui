import { forwardRef, useState } from "react";
import { BiExpandVertical } from "react-icons/bi";
import classNames from "classnames";
import { VuiIcon } from "../icon/Icon";
import { VuiInfoMenu } from "../infoMenu/InfoMenu";
import { VuiOptionsList } from "../optionsList/OptionsList";
import { OptionListItem } from "../optionsList/types";
import { InfoListType } from "../infoList/InfoList";
import { BaseButtonProps } from "../button/BaseButton";

const Button = forwardRef<HTMLButtonElement | null, BaseButtonProps>(
  ({ children, isSelected, ...rest }: BaseButtonProps, ref) => {
    const classes = classNames("vuiAccountButton", {
      "vuiAccountButton-isActive": isSelected
    });

    return (
      <button className={classes} type="button" {...rest} ref={ref} aria-expanded={isSelected} aria-haspopup="menu">
        {children}
      </button>
    );
  }
);

type Props = {
  userName: string;
  email: string;
  info?: InfoListType;
  options?: OptionListItem<string>[];
};

export const VuiAccountButton = ({ userName, email, info, options, ...rest }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const areUnique = userName && email && userName !== email;

  const primaryLabel = areUnique ? userName : email;
  const secondaryLabel = areUnique ? email : null;

  const button = (
    <Button isSelected={isOpen} {...rest}>
      <div className="vuiAccountButton__labels">
        <div className="vuiAccountButton__primaryLabel">{primaryLabel}</div>
        {secondaryLabel && <div className="vuiAccountButton__secondaryLabel">{secondaryLabel}</div>}
      </div>

      <VuiIcon size="s" color="neutral" className="vuiAccountButton__icon">
        <BiExpandVertical />
      </VuiIcon>
    </Button>
  );

  return (
    <VuiInfoMenu isOpen={isOpen} setIsOpen={setIsOpen} button={button} info={info} anchorSide="rightUp">
      {options && (
        <VuiOptionsList
          size="l"
          onSelectOption={() => {
            setIsOpen(false);
          }}
          options={options}
        />
      )}
    </VuiInfoMenu>
  );
};
