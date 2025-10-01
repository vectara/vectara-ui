import { ChangeEventHandler, FormEventHandler, useRef, useState, KeyboardEvent, useEffect, useMemo } from "react";
import classNames from "classnames";
import { VuiIconButton } from "../button/IconButton";
import { BiX } from "react-icons/bi";
import { VuiIcon } from "../icon/Icon";
import { VuiSearchInputSuggestions } from "./SearchInputSuggestions";
import { SearchSuggestion } from "./types";
import { createId } from "../../utils/createId";

const SIZE = ["m", "l"] as const;

type Props = {
  className?: string;
  value?: string;
  size?: (typeof SIZE)[number];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  autoFocus?: boolean;
  onSubmit?: FormEventHandler;
  suggestions?: SearchSuggestion[];
};

type ClearableProps =
  | {
      isClearable?: true;
      onClear: () => void;
    }
  | {
      isClearable?: false;
      onClear?: never;
    };

export const VuiSearchInput = ({
  className,
  size = "m",
  value,
  onChange,
  placeholder,
  autoFocus,
  onSubmit,
  isClearable,
  onClear,
  suggestions,
  ...rest
}: Props & ClearableProps) => {
  const classes = classNames("vuiSearchInput", `vuiSearchInput--${size}`, className);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [areSuggestionsVisible, setAreSuggestionsVisible] = useState(true);
  const suggestionRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleClickOutside = () => {
      setAreSuggestionsVisible(false);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputFocus = () => {
    // Show suggestions when input receives focus (if suggestions exist).
    if (suggestions && suggestions.length > 0) {
      setAreSuggestionsVisible(true);
    }
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();

        // Show suggestions if hidden, or move to first suggestion.
        if (suggestions && suggestions.length > 0) {
          if (!areSuggestionsVisible) {
            setAreSuggestionsVisible(true);
          } else {
            suggestionRefs.current[0]?.focus();
          }
        }
        break;
      }

      case "Escape": {
        e.preventDefault();
        setAreSuggestionsVisible(false);
        inputRef.current?.focus();
        break;
      }

      case "Tab": {
        // Hide suggestions and allow default tab behavior.
        setAreSuggestionsVisible(false);
        break;
      }
    }
  };

  const handleSuggestionKeyDown = (e: KeyboardEvent<HTMLAnchorElement>, index: number) => {
    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        // Move to next suggestion, or wrap to first.
        const nextIndex = index + 1;
        if (nextIndex < suggestionRefs.current.length) {
          suggestionRefs.current[nextIndex]?.focus();
        } else {
          suggestionRefs.current[0]?.focus();
        }
        break;
      }

      case "ArrowUp": {
        e.preventDefault();
        if (index === 0) {
          // Move back to input.
          inputRef.current?.focus();
        } else {
          // Move to previous suggestion.
          suggestionRefs.current[index - 1]?.focus();
        }
        break;
      }

      case "Escape": {
        e.preventDefault();
        setAreSuggestionsVisible(false);
        inputRef.current?.focus();
        break;
      }

      case "Tab": {
        // Hide suggestions and allow default tab behavior.
        setAreSuggestionsVisible(false);
        break;
      }
    }
  };

  // Reset suggestions visibility when suggestions change
  const prevSuggestionsRef = useRef(suggestions);
  if (prevSuggestionsRef.current !== suggestions) {
    prevSuggestionsRef.current = suggestions;
    if (suggestions && suggestions.length > 0) {
      setAreSuggestionsVisible(true);
    }
  }

  const hasSuggestions = suggestions && suggestions.length > 0 && areSuggestionsVisible;
  const controlsId = useMemo(() => `searchSuggestions-${createId()}`, []);

  return (
    <form onSubmit={onSubmit}>
      <div ref={containerRef} className={classes}>
        <input
          ref={inputRef}
          className="vuiSearchInput__input"
          type="text"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck="false"
          autoFocus={autoFocus}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={handleInputFocus}
          onKeyDown={handleInputKeyDown}
          aria-autocomplete="list"
          aria-controls={hasSuggestions ? controlsId : undefined}
          {...rest}
        />

        {isClearable && value && (
          <VuiIconButton
            aria-label="Clear input"
            className="vuiSearchInput__clearButton"
            icon={
              <VuiIcon>
                <BiX />
              </VuiIcon>
            }
            onClick={(e) => {
              e.preventDefault();
              onClear();
            }}
          />
        )}

        {hasSuggestions && (
          <VuiSearchInputSuggestions
            id={controlsId}
            suggestions={suggestions}
            onSuggestionKeyDown={handleSuggestionKeyDown}
            suggestionRefs={suggestionRefs}
          />
        )}
      </div>
    </form>
  );
};
