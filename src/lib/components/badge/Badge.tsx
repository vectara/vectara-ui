import { MouseEvent } from "react";
import classNames from "classnames";
import { ColorTranslator } from "colortranslator";
import { BiCheck, BiX } from "react-icons/bi";
import { getTrackingProps } from "../../utils/getTrackingProps";
import { useVuiContext } from "../context/Context";
import { LinkProps } from "../link/types";
import { VuiIconButton } from "../button/IconButton";
import { VuiIcon } from "../icon/Icon";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { createId } from "../../utils/createId";

export const BADGE_COLOR = ["accent", "primary", "danger", "warning", "success", "neutral"] as const;

type HexColor = `#${string}`;

const LIGHT_TEXT_COLOR = "#ffffff";
const DARK_TEXT_COLOR = "#000000";

// WCAG relative luminance, from 0 (black) to 1 (white).
const getRelativeLuminance = (hex: HexColor) => {
  const { R, G, B } = new ColorTranslator(hex);
  const [r, g, b] = [R, G, B].map((channel) => {
    const value = channel / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

// Choose whichever of light or dark text has the higher WCAG contrast ratio
// against the background.
const getContrastingTextColor = (backgroundColor: HexColor) => {
  const luminance = getRelativeLuminance(backgroundColor);
  const contrastWithLight = 1.05 / (luminance + 0.05);
  const contrastWithDark = (luminance + 0.05) / 0.05;
  return contrastWithLight > contrastWithDark ? LIGHT_TEXT_COLOR : DARK_TEXT_COLOR;
};

const isHexColor = (color: Props["color"]): color is HexColor => color.startsWith("#");

type Props = {
  children: React.ReactNode;
  className?: string;
  color: (typeof BADGE_COLOR)[number] | HexColor;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onClose?: () => void;
  href?: LinkProps["href"];
  target?: LinkProps["target"];
  track?: LinkProps["track"];
  isSelected?: boolean;
  size?: "s" | "m" | "l";
};

export const VuiBadge = ({
  children,
  className,
  color,
  onClick,
  onClose,
  href,
  target,
  track,
  isSelected,
  size = "m",
  ...rest
}: Props) => {
  const { createLink } = useVuiContext();
  const id = onClose ? createId() : undefined;
  const isCustomColor = isHexColor(color);

  const classes = classNames(className, "vuiBadge", `vuiBadge--${size}`, {
    [`vuiBadge--${color}`]: !isCustomColor,
    "vuiBadge--custom": isCustomColor,
    "vuiBadge--clickable": onClick ?? href
  });

  const style = isCustomColor ? { backgroundColor: color, color: getContrastingTextColor(color) } : undefined;

  const content = (
    <VuiFlexContainer alignItems="center" spacing="xxs">
      {isSelected && (
        <VuiFlexItem>
          <VuiIcon size="xs" color="inherit" className="vuiBadge__icon">
            <BiCheck />
          </VuiIcon>
        </VuiFlexItem>
      )}

      <VuiFlexItem id={id}>
        <div className="vuiBadge__content">{children}</div>
      </VuiFlexItem>

      {onClose && (
        <VuiFlexItem>
          <VuiIconButton
            aria-label="Remove"
            aria-describedby={id}
            size="xs"
            color="subdued"
            className="vuiBadge__icon"
            onClick={(e) => {
              e.stopPropagation();
              onClose?.();
            }}
            icon={
              <VuiIcon size="xs">
                <BiX />
              </VuiIcon>
            }
          />
        </VuiFlexItem>
      )}
    </VuiFlexContainer>
  );

  if (onClick) {
    return (
      <button className={classes} style={style} onClick={onClick} type="button" {...rest}>
        {content}
      </button>
    );
  }

  if (href) {
    return createLink({
      className: classes,
      style,
      href,
      onClick,
      children: content,
      target,
      ...getTrackingProps(track)
    });
  }

  return (
    <div className={classes} style={style} {...rest}>
      {content}
    </div>
  );
};
