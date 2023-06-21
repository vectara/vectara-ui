import { Props as BaseButtonProps } from "./BaseButton";
declare const COLOR: readonly ["accent", "primary", "danger", "warning", "normal"];
type Props = {
    children?: BaseButtonProps["children"];
    icon?: BaseButtonProps["icon"];
    iconSide?: BaseButtonProps["iconSide"];
    color: (typeof COLOR)[number];
    size?: BaseButtonProps["size"];
    className?: BaseButtonProps["className"];
    fullWidth?: BaseButtonProps["fullWidth"];
    onClick?: BaseButtonProps["onClick"];
    href?: BaseButtonProps["href"];
    target?: BaseButtonProps["target"];
    track?: BaseButtonProps["track"];
};
export declare const VuiButtonTertiary: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLButtonElement | null>>;
export {};
