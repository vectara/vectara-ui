import { ReactNode } from "react";
declare const GROW: readonly [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
type Props = {
    children?: ReactNode;
    grow?: (typeof GROW)[number] | boolean;
    className?: string;
};
export declare const VuiFlexItem: ({ children, grow, className, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
