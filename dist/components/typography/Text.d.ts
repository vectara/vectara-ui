import { ReactNode } from "react";
declare const SIZE: readonly ["xs", "s", "m", "l"];
declare const TEXT_ALIGN: readonly ["left", "center", "right"];
type Props = {
    className?: string;
    id?: string;
    children?: ReactNode;
    size?: (typeof SIZE)[number];
    align?: (typeof TEXT_ALIGN)[number];
};
export declare const VuiText: ({ children, className, id, size, align }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
