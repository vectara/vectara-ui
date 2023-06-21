import { ReactElement, ReactNode } from "react";
import { Props as LinkProps } from "../link/Link";
declare const SIZE: readonly ["xs", "s", "m"];
export type Props = {
    children?: ReactNode;
    ref: React.ForwardedRef<HTMLButtonElement | null>;
    icon?: ReactElement | null;
    iconSide?: "left" | "right";
    className?: string;
    size?: (typeof SIZE)[number];
    fullWidth?: boolean;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLAnchorElement, MouseEvent>) => void;
    href?: LinkProps["href"];
    target?: LinkProps["target"];
    track?: LinkProps["track"];
};
export declare const BaseButton: ({ children, ref, icon, iconSide, className, size, fullWidth, onClick, href, target, track, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
