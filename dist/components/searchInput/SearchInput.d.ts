import { ChangeEventHandler, FormEventHandler } from "react";
declare const SIZE: readonly ["m", "l"];
type Props = {
    className?: string;
    value?: string;
    size?: (typeof SIZE)[number];
    onChange?: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    autoFocus?: boolean;
    onSubmit?: FormEventHandler;
};
export declare const VuiSearchInput: ({ className, size, value, onChange, placeholder, autoFocus, onSubmit, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
