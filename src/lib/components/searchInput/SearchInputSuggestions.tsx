import { KeyboardEvent, MutableRefObject } from "react";
import { SearchSuggestion } from "./types";

type Props = {
  id: string;
  suggestions: SearchSuggestion[];
  onSuggestionKeyDown: (e: KeyboardEvent<HTMLElement>, index: number) => void;
  suggestionRefs: MutableRefObject<(HTMLElement | null)[]>;
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void;
};

export const VuiSearchInputSuggestions = ({
  id,
  suggestions,
  onSuggestionKeyDown,
  suggestionRefs,
  onSelectSuggestion
}: Props) => {
  return (
    <div className="vuiSearchInputSuggestionsContainer">
      <div className="vuiSearchInputSuggestions">
        <div id={id} className="vuiSearchInputSuggestions__suggestionsList" role="listbox">
          {suggestions.map((suggestion, index) => {
            const sharedProps = {
              key: index,
              className: "vuiSearchInputSuggestions__suggestion",
              ref: (el: HTMLElement | null) => (suggestionRefs.current[index] = el),
              onKeyDown: (e: KeyboardEvent<HTMLElement>) => onSuggestionKeyDown(e, index),
              role: "option" as const,
              "aria-selected": "false" as const
            };

            if (suggestion.href) {
              return (
                <a href={suggestion.href} {...sharedProps}>
                  {suggestion.label}
                </a>
              );
            }

            return (
              <button
                type="button"
                {...sharedProps}
                onClick={() => onSelectSuggestion?.(suggestion)}
              >
                {suggestion.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="vuiSearchInputSuggestions__bottomSpacer" />
    </div>
  );
};
