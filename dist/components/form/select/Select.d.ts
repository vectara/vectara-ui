declare const SIZE: readonly ["m", "l"];
type Props = {
    className?: string;
    id?: string;
    options: {
        text: string;
        value: string;
    }[];
    value: string;
    size?: (typeof SIZE)[number];
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
export declare const VuiSelect: ({ className, id, options, value, size, onChange, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
