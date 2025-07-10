import classNames from "classnames";
import { toast as sonnerToast } from "sonner";
import { BiCheck, BiError, BiInfoCircle, BiSolidHand, BiX } from "react-icons/bi";
import { VuiText } from "../typography/Text";
import { VuiTextColor } from "../typography/TextColor";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiIconButton } from "../button/IconButton";
import { VuiIcon } from "../icon/Icon";
import { VuiSpacer } from "../spacer/Spacer";

export const addNotification = (props: Omit<Props, "onDismiss">) => {
  return sonnerToast.custom((id) => (
    <VuiNotification
      onDismiss={() => {
        sonnerToast.dismiss(id);
      }}
      {...props}
    />
  ));
};

type Props = {
  color: "primary" | "success" | "warning" | "danger";
  message: string;
  onDismiss: () => void;
  children?: React.ReactNode;
};

export const VuiNotification = ({ color, message, onDismiss, children }: Props) => {
  const classes = classNames("vuiNotification", `vuiNotification--${color}`);

  let icon;

  switch (color) {
    case "primary":
      icon = (
        <VuiIcon color="primary">
          <BiInfoCircle />
        </VuiIcon>
      );
      break;
    case "success":
      icon = (
        <VuiIcon color="success">
          <BiCheck />
        </VuiIcon>
      );
      break;
    case "warning":
      icon = (
        <VuiIcon color="warning">
          <BiError />
        </VuiIcon>
      );
      break;
    case "danger":
      icon = (
        <VuiIcon color="danger">
          <BiSolidHand />
        </VuiIcon>
      );
      break;
    default:
      icon = null;
  }

  return (
    <div className={classes}>
      <VuiFlexContainer alignItems="start" spacing="s">
        <VuiFlexItem grow={1}>
          <VuiFlexContainer alignItems="start" spacing="xs">
            {icon}

            <div>
              <VuiText>
                <VuiTextColor color={color}>{message}</VuiTextColor>
              </VuiText>

              {children && (
                <>
                  <VuiSpacer size="s" />
                  {children}
                </>
              )}
            </div>
          </VuiFlexContainer>
        </VuiFlexItem>

        <VuiFlexItem grow={false}>
          <VuiIconButton
            aria-label="Dismiss message"
            size="xs"
            color="neutral"
            icon={
              <VuiIcon>
                <BiX />
              </VuiIcon>
            }
            onClick={() => onDismiss()}
          />
        </VuiFlexItem>
      </VuiFlexContainer>
    </div>
  );
};
