import { ReactNode } from "react";
declare const COLOR: readonly ["inherit", "accent", "primary", "success", "warning", "danger", "subdued", "normal", "empty"];
declare const SIZE: readonly ["s", "m", "l", "xl", "xxl"];
type Props = {
    children: ReactNode;
    color?: (typeof COLOR)[number];
    className?: string;
    size?: (typeof SIZE)[number];
};
export declare const VuiIcon: ({ children, size, color, className }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
