export type SearchResultType = {
    title?: string;
    url?: string;
    date?: string;
    snippet: {
        pre: string;
        text: string;
        post: string;
    };
};
type Props = {
    result: SearchResultType;
    position: number;
    isSelected?: boolean;
    subTitle?: React.ReactNode;
    children?: React.ReactNode;
    className?: string;
    snippetProps?: any;
};
export declare const VuiSearchResult: import("react").ForwardRefExoticComponent<Props & import("react").RefAttributes<HTMLDivElement | null>>;
export {};
