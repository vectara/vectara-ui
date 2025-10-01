import { useEffect, useState } from "react";
import { SearchSuggestion, VuiButtonPrimary, VuiFlexContainer, VuiFlexItem, VuiSearchInput } from "../../../lib";

export const Suggestions = () => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);

  useEffect(() => {
    if (!searchValue) {
      setSuggestions([]);
      return;
    }

    const timeout = setTimeout(() => {
      setSuggestions([
        { label: "Glorp", href: "https://www.vectara.com" },
        { label: "Gronkus", href: "https://www.vectara.com" },
        { label: "Glargulon", href: "https://www.vectara.com" },
        { label: "Glarb", href: "https://www.vectara.com" },
        { label: "Gloopty", href: "https://www.vectara.com" },
        { label: "Glarp", href: "https://www.vectara.com" },
        { label: "Gronk", href: "https://www.vectara.com" },
        { label: "Glurble", href: "https://www.vectara.com" },
        { label: "Glarf", href: "https://www.vectara.com" },
        { label: "Gloop", href: "https://www.vectara.com" },
        { label: "Glip", href: "https://www.vectara.com" },
        { label: "Glarb", href: "https://www.vectara.com" },
        { label: "Gronk", href: "https://www.vectara.com" },
        { label: "Glurble", href: "https://www.vectara.com" },
        { label: "Glarf", href: "https://www.vectara.com" },
        { label: "Gloop", href: "https://www.vectara.com" },
        { label: "Glip", href: "https://www.vectara.com" }
      ]);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [searchValue]);

  return (
    <VuiFlexContainer alignItems="center">
      <VuiFlexItem grow={1}>
        <VuiSearchInput
          isClearable
          autoFocus
          placeholder="Ask a question"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Submit ${searchValue}`);
          }}
          onClear={() => setSearchValue("")}
          suggestions={suggestions}
        />
      </VuiFlexItem>

      <VuiFlexItem>
        <VuiButtonPrimary color="primary" size="m">
          Search
        </VuiButtonPrimary>
      </VuiFlexItem>
    </VuiFlexContainer>
  );
};
