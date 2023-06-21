import { ReactElement } from "react";
declare const SIZE: readonly ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
declare const TEXT_ALIGN: readonly ["left", "center", "right"];
interface Props {
    children: ReactElement<any>;
    className?: string;
    size: (typeof SIZE)[number];
    align?: (typeof TEXT_ALIGN)[number];
}
export declare const VuiTitle: ({ children, className, size, align, ...rest }: Props) => ReactElement<any, string | import("react").JSXElementConstructor<any>>;
export {};
