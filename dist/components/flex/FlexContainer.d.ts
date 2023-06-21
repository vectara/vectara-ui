import { ReactNode } from "react";
declare const alignItemsToClassNameMap: {
    readonly baseline: "vuiFlexContainer--alignItemsBaseline";
    readonly center: "vuiFlexContainer--alignItemsCenter";
    readonly end: "vuiFlexContainer--alignItemsEnd";
    readonly start: "vuiFlexContainer--alignItemsStart";
    readonly stretch: "vuiFlexContainer--alignItemsStretch";
};
declare const directionToClassNameMap: {
    readonly column: "vuiFlexContainer--directionColumn";
    readonly columnReverse: "vuiFlexContainer--directionColumnReverse";
    readonly row: "vuiFlexContainer--directionRow";
    readonly rowReverse: "vuiFlexContainer--directionRowReverse";
};
declare const justifyContentToClassNameMap: {
    readonly center: "vuiFlexContainer--justifyContentCenter";
    readonly end: "vuiFlexContainer--justifyContentEnd";
    readonly start: "vuiFlexContainer--justifyContentStart";
    readonly spaceAround: "vuiFlexContainer--justifyContentSpaceAround";
    readonly spaceBetween: "vuiFlexContainer--justifyContentSpaceBetween";
    readonly spaceEvenly: "vuiFlexContainer--justifyContentSpaceEvenly";
};
declare const spacingToClassNameMap: {
    readonly none: "vuiFlexContainer--spacingNone";
    readonly xxs: "vuiFlexContainer--spacingXxs";
    readonly xs: "vuiFlexContainer--spacingXs";
    readonly s: "vuiFlexContainer--spacingS";
    readonly m: "vuiFlexContainer--spacingM";
    readonly l: "vuiFlexContainer--spacingL";
    readonly xl: "vuiFlexContainer--spacingXl";
};
export type Props = {
    children?: ReactNode;
    alignItems?: keyof typeof alignItemsToClassNameMap;
    direction?: keyof typeof directionToClassNameMap;
    justifyContent?: keyof typeof justifyContentToClassNameMap;
    spacing?: keyof typeof spacingToClassNameMap;
    wrap?: boolean;
    className?: string;
};
export declare const VuiFlexContainer: ({ children, alignItems, direction, justifyContent, spacing, wrap, className, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
