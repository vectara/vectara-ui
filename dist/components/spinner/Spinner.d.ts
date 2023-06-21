declare const sizeToClassNameMap: {
    readonly xs: "vuiSpinner--xs";
    readonly s: "vuiSpinner--s";
    readonly m: "vuiSpinner--m";
    readonly l: "vuiSpinner--l";
    readonly xl: "vuiSpinner--xl";
    readonly xxl: "vuiSpinner--xxl";
    readonly xxxl: "vuiSpinner--xxxl";
};
type Props = {
    size?: keyof typeof sizeToClassNameMap;
};
export declare const VuiSpinner: ({ size }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
