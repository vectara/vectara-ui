import { KeyboardEvent, MutableRefObject } from "react";
import { SearchSuggestion } from "./types";

type Props = {
  id: string;
  suggestions: SearchSuggestion[];
  onSuggestionKeyDown: (e: KeyboardEvent<HTMLAnchorElement>, index: number) => void;
  suggestionRefs: MutableRefObject<(HTMLAnchorElement | null)[]>;
};

export const VuiSearchInputSuggestions = ({ id, suggestions, onSuggestionKeyDown, suggestionRefs }: Props) => {
  return (
    <div id={id} className="vuiSearchInputSuggestions" role="listbox">
      <div className="vuiSearchInputSuggestions__suggestionsList">
        {suggestions.map((suggestion, index) => (
          <a
            href={suggestion.href}
            key={index}
            className="vuiSearchInputSuggestions__suggestion"
            ref={(el) => (suggestionRefs.current[index] = el)}
            onKeyDown={(e) => onSuggestionKeyDown(e, index)}
            role="option"
            aria-selected="false"
          >
            {suggestion.label}
          </a>
        ))}
      </div>
    </div>
  );
};
