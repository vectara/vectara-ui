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
    <div className="vuiSearchInputSuggestionsContainer">
      <div className="vuiSearchInputSuggestions">
        <div id={id} className="vuiSearchInputSuggestions__suggestionsList" role="listbox">
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

      <div className="vuiSearchInputSuggestions__bottomSpacer" />
    </div>
  );
};
