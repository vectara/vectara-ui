import { SearchResult } from "../searchResult/SearchResult";

export type ChatTurn = {
  question: string;
  answer?: string;
  query?: string;
  results?: SearchResult[];
};
