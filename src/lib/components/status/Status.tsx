import { BiCheck, BiError, BiInfoCircle, BiSolidHand } from "react-icons/bi";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { AlignItemsPosition, FlexSpacing } from "../flex/types";
import { VuiIcon } from "../icon/Icon";
import { VuiText } from "../typography/Text";
import { VuiTextColor } from "../typography/TextColor";

type Props = {
  status: "error" | "warning" | "success" | "info";
  label: string;
  gap?: FlexSpacing;
  align?: AlignItemsPosition;
};

const statusToColor = {
  error: "danger",
  warning: "warning",
  success: "success",
  info: "primary"
} as const;

const statusToIcon = {
  error: <BiError />,
  warning: <BiSolidHand />,
  success: <BiCheck />,
  info: <BiInfoCircle />
} as const;

export const VuiStatus = ({ status, label, gap = "xs", align = "center" }: Props) => {
  const color = statusToColor[status];
  const icon = statusToIcon[status];

  return (
    <VuiFlexContainer alignItems={align} spacing={gap}>
      <VuiFlexItem grow={false}>
        <VuiIcon color={color}>{icon}</VuiIcon>
      </VuiFlexItem>

      <VuiFlexItem grow={false}>
        <VuiText>
          <p>
            <VuiTextColor color={color}>{label}</VuiTextColor>
          </p>
        </VuiText>
      </VuiFlexItem>
    </VuiFlexContainer>
  );
};
