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
