declare const SIZE: readonly ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
interface Props {
    size: (typeof SIZE)[number];
}
export declare const VuiSpacer: ({ size }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
