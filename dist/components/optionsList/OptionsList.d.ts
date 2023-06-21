import { TextColor } from "../typography/TextColor";
type Props = {
    options: {
        value: string;
        label: string;
        color?: TextColor;
    }[];
    onSelectOption: (value: string) => void;
    selectedOption: string;
    isSelectable?: boolean;
};
export declare const VuiOptionsList: ({ options, onSelectOption, selectedOption, isSelectable, ...rest }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
