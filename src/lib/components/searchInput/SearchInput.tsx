import { ChangeEventHandler, FormEventHandler, useRef, useState, KeyboardEvent, useEffect, useMemo } from "react";
import classNames from "classnames";
import { VuiIconButton } from "../button/IconButton";
import { BiSearch, BiX } from "react-icons/bi";
import { VuiIcon } from "../icon/Icon";
import { VuiSearchInputSuggestions } from "./SearchInputSuggestions";
import { SearchSuggestion } from "./types";
import { createId } from "../../utils/createId";
import { VuiSpinner } from "../spinner/Spinner";

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
  isLoading?: boolean;
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
  isLoading,
  ...rest
}: Props & ClearableProps) => {
  const classes = classNames("vuiSearchInput", `vuiSearchInput--${size}`, className);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [areSuggestionsVisible, setAreSuggestionsVisible] = useState(true);
  const suggestionRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const suppressNextFocus = useRef(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setAreSuggestionsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputFocus = () => {
    // Don't show suggestions if focus was triggered by Escape key
    if (suppressNextFocus.current) {
      suppressNextFocus.current = false;
      return;
    }

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
        suppressNextFocus.current = true;
        inputRef.current?.focus();
        break;
      }

      case "Tab": {
        // Hide suggestions and allow default tab behavior.
        setAreSuggestionsVisible(false);
        break;
      }

      case "Enter": {
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
        suppressNextFocus.current = true;
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
  const inputClasses = classNames("vuiSearchInput__input", {
    "vuiSearchInput__input--hasSuggestions": hasSuggestions
  });

  return (
    <form onSubmit={onSubmit} role="search">
      <div
        ref={containerRef}
        className={classes}
        aria-live="polite"
        aria-atomic="true"
        aria-busy={isLoading ? "true" : "false"}
      >
        <input
          ref={inputRef}
          className={inputClasses}
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

        <div className="vuiSearchInput__icon">
          {isLoading ? (
            <VuiSpinner size={size === "m" ? "s" : "m"} />
          ) : (
            <VuiIcon color="subdued" size={size === "m" ? "s" : "m"}>
              <BiSearch />
            </VuiIcon>
          )}
        </div>

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
