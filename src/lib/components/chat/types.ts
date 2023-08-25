import { SearchResult } from "../searchResult/SearchResult";

export type ChatTurn = {
  question: string;
  isLoading?: boolean;
  error?: {
    code?: string;
    message: string;
  };
  answer?: string;
  query?: string;
  results?: SearchResult[];
};

export const CHAT_STYLE_ORDER = ["closed", "condensed", "tall", "fullScreen"] as const;
export type ChatStyle = (typeof CHAT_STYLE_ORDER)[number];
