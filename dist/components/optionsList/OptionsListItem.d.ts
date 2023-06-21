import React from "react";
type Props = {
    value: string;
    children: React.ReactNode;
    isSelectable?: boolean;
    isSelected: boolean;
    onClick: (value: string) => void;
};
export declare const VuiOptionsListItem: ({ value, children, isSelectable, isSelected, onClick, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
