import { useState } from "react";
import classNames from "classnames";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { VuiIcon } from "../../icon/Icon";
import { VuiIconButton } from "../../button/IconButton";
import { VuiAppSideNavLink } from "./AppSideNavLink";

type Props = {
  name: string;
  path: string;
  children: React.ReactNode;
};

export const AppSideNavTreeSection = ({ name, path, children }: Props) => {
  const [isOpen, setIsOpen] = useState(true);

  const classes = classNames("appSideNavTreeChildren", {
    "appSideNavTreeChildren-isOpen": isOpen
  });

  return (
    <div className="appSideNavTreeSection">
      <VuiAppSideNavLink path={path} name={name} />

      <VuiIconButton
        className="appSideNavTreeToggleButton"
        onClick={() => setIsOpen(!isOpen)}
        color="neutral"
        icon={
          <VuiIcon className="appSideNavTreeToggleButton__icon">{isOpen ? <BiChevronUp /> : <BiChevronDown />}</VuiIcon>
        }
      />

      <div className={classes}>{children}</div>
    </div>
  );
};
