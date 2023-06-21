declare const SIZE: readonly ["s", "m"];
type Props = {
    children: React.ReactNode;
    append?: React.ReactNode;
    className?: string;
    size?: (typeof SIZE)[number];
};
export declare const VuiTabs: ({ children, className, append, size }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
