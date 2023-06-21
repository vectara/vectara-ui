import React from "react";
type Props = {
    button: React.ReactElement;
    children: React.ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
};
export declare const VuiPopover: ({ button: originalButton, children, isOpen, setIsOpen, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
