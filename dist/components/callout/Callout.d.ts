import { ReactNode } from "react";
declare const COLOR: readonly ["accent", "primary", "success", "warning", "danger"];
declare const SIZE: readonly ["s", "m"];
declare const HEADING_ELEMENT: readonly ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
type Props = {
    children?: ReactNode;
    title: string;
    headingElement: (typeof HEADING_ELEMENT)[number];
    color: (typeof COLOR)[number];
    size?: (typeof SIZE)[number];
};
export declare const VuiCallout: ({ children, title, headingElement, color, size }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
