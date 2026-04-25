import { ReactNode, useEffect, useRef, useState } from "react";
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
import { getOverlayProps } from "../../utils/getOverlayProps";

const COLOR = ["primary", "danger"] as const;

type Props = {
  className?: string;
  title: ReactNode;
  icon?: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  color?: (typeof COLOR)[number];
  footer?: ReactNode;
};

export const VuiDrawer = ({
  className,
  color = "primary",
  title,
  icon,
  children,
  isOpen,
  onClose,
  footer,
  ...rest
}: Props) => {
  const { DrawerTitle } = useVuiContext();
  const returnFocusElRef = useRef<HTMLElement | null>(null);
  // Uncouple open state from visibile state so that when the popover is closed,
  // we can set the button to be unselected immediately while the popover content
  // is still transitioning out.
  const [showTransition, setShowTransition] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  // Return focus on unmount.
  useEffect(() => {
    if (isOpen) {
      returnFocusElRef.current = document.activeElement as HTMLElement;
      setIsContentVisible(true);
      requestAnimationFrame(() => {
        setShowTransition(true);
      });
    } else {
      returnFocusElRef.current?.focus();
      returnFocusElRef.current = null;
      setShowTransition(false);
    }
  }, [isOpen]);

  // Allow contents to respond to blur events before unmounting.
  const onCloseDelayed = () => {
    window.setTimeout(() => {
      // First remove the transition class to trigger the exit animation.
      setShowTransition(false);
      onClose?.();

      // Wait for the transition to complete before unmounting.
      // This duration should match the CSS transition speed.
      window.setTimeout(() => {
        setIsContentVisible(false);
      }, 200);
    }, 0);
  };

  // Handle outside clicks, but ignore clicks on notifications.
  const handleClickOutside = (event: Event) => {
    const target = event.target as HTMLElement;
    // Check if the click is within a notification.
    if (target.closest("[data-awareness='notification']")) {
      return;
    }
    onCloseDelayed();
  };

  const classes = classNames("vuiDrawer", `vuiDrawer--${color}`, className, {
    "vuiDrawer-isLoaded": showTransition
  });

  return (
    <VuiPortal>
      {(isOpen || isContentVisible || showTransition) && (
        <VuiScreenBlock isHidden={!isOpen}>
          <FocusOn
            onEscapeKey={onCloseDelayed}
            onClickOutside={handleClickOutside}
            // Enable manual focus return to work.
            returnFocus={false}
            // Enable focus on contents when it's open,
            // but enable manual focus return to work when it's closed.
            autoFocus={isOpen}
          >
            <div className={classes} {...rest} {...getOverlayProps("drawerTitle")}>
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
                        <div className="vuiDrawerHeader__title" data-testid="drawerTitle">
                          <DrawerTitle id="drawerTitle">{title}</DrawerTitle>
                        </div>
                      </VuiFlexItem>
                    </VuiFlexContainer>
                  </VuiFlexItem>

                  {onClose && (
                    <VuiFlexItem>
                      <VuiIconButton
                        aria-label="Close"
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

              {footer && <div className="vuiDrawerFooter">{footer}</div>}
            </div>
          </FocusOn>
        </VuiScreenBlock>
      )}
    </VuiPortal>
  );
};
