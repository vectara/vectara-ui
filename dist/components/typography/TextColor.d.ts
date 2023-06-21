import { ReactNode } from "react";
export declare const COLOR: readonly ["accent", "primary", "success", "warning", "danger", "subdued", "normal"];
export type TextColor = (typeof COLOR)[number];
type Props = {
    children?: ReactNode;
    color: TextColor;
    className?: string;
};
export declare const VuiTextColor: ({ children, color, className }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
