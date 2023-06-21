import { MouseEvent } from "react";
import { To } from "react-router-dom";
type Props = {
    children: React.ReactNode;
    className?: string;
    to: To;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
    isActive?: boolean;
};
export declare const VuiTab: ({ children, className, to, onClick, isActive, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
