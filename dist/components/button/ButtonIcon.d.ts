import { ReactNode } from "react";
import { Props as LinkProps } from "../link/Link";
declare const COLOR: readonly ["accent", "primary", "danger", "normal"];
type Props = {
    className?: string;
    icon: ReactNode;
    color?: (typeof COLOR)[number];
    onClick?: () => void;
    href?: LinkProps["href"];
    target?: LinkProps["target"];
    track?: LinkProps["track"];
};
export declare const VuiButtonIcon: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLButtonElement | null>>;
export {};
