import { ReactNode, useEffect, useRef } from "react";
import classNames from "classnames";
import { FocusOn } from "react-focus-on";
import { BiX } from "react-icons/bi";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiIconButton } from "../button/IconButton";
import { VuiIcon } from "../icon/Icon";
import { VuiPortal } from "../portal/Portal";
import { VuiScreenBlock } from "../screenBlock/ScreenBlock";
import { useVuiContext } from "../context/Context";

const COLOR = ["primary", "danger"] as const;

type Props = {
  className?: string;
  title: ReactNode;
  icon?: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  color?: (typeof COLOR)[number];
};

export const VuiDrawer = ({ className, color = "primary", title, icon, children, isOpen, onClose, ...rest }: Props) => {
  const { DrawerTitle } = useVuiContext();
  const returnFocusElRef = useRef<HTMLElement | null>(null);

  // Return focus on unmount.
  useEffect(() => {
    if (isOpen) {
      returnFocusElRef.current = document.activeElement as HTMLElement;
    } else {
      returnFocusElRef.current?.focus();
      returnFocusElRef.current = null;
    }
  }, [isOpen]);

  // Allow contents to respond to blur events before unmounting.
  const onCloseDelayed = () => {
    window.setTimeout(() => {
      onClose?.();
    }, 0);
  };

  const classes = classNames("vuiDrawer", `vuiDrawer--${color}`, className);

  return (
    <VuiPortal>
      {isOpen && (
        <VuiScreenBlock>
          <FocusOn
            onEscapeKey={onCloseDelayed}
            onClickOutside={onCloseDelayed}
            // Enable manual focus return to work.
            returnFocus={false}
            // Enable focus on contents when it's open,
            // but enable manual focus return to work when it's closed.
            autoFocus={isOpen}
          >
            <div className={classes} {...rest}>
              <div className="vuiDrawerHeader">
                <VuiFlexContainer justifyContent="spaceBetween" alignItems="center">
                  <VuiFlexItem grow={false}>
                    <VuiFlexContainer alignItems="center" spacing="xs">
                      {icon && (
                        <VuiFlexItem grow={false} shrink={false}>
                          <VuiIcon size="l">{icon}</VuiIcon>
                        </VuiFlexItem>
                      )}

                      <VuiFlexItem grow={false}>
                        <div className="vuiDrawerHeader__title">
                          <DrawerTitle>{title}</DrawerTitle>
                        </div>
                      </VuiFlexItem>
                    </VuiFlexContainer>
                  </VuiFlexItem>

                  {onClose && (
                    <VuiFlexItem>
                      <VuiIconButton
                        data-testid="drawerCloseButton"
                        onClick={onCloseDelayed}
                        color="neutral"
                        icon={
                          <VuiIcon size="m" color="neutral">
                            <BiX />
                          </VuiIcon>
                        }
                      />
                    </VuiFlexItem>
                  )}
                </VuiFlexContainer>
              </div>

              <div className="vuiDrawerContent">
                <div className="vuiDrawerContent__inner">{children}</div>
              </div>
            </div>
          </FocusOn>
        </VuiScreenBlock>
      )}
    </VuiPortal>
  );
};
