import { useState } from "react";
import { SearchSuggestion, VuiButtonPrimary, VuiFlexContainer, VuiFlexItem, VuiSearchInput } from "../../../lib";

type FilterAttribute = {
  name: string;
  level: "document" | "part";
  type: "text" | "boolean" | "integer";
};

const filterAttributes: FilterAttribute[] = [
  { name: "year", level: "document", type: "integer" },
  { name: "risk", level: "document", type: "text" },
  { name: "isEquity", level: "document", type: "boolean" }
];

const prefixName = (attr: FilterAttribute) => `${attr.level === "document" ? "doc" : "part"}.${attr.name}`;

const operatorsByType: Record<FilterAttribute["type"], string[]> = {
  text: ["=", "<>", "IN", "NOT IN"],
  boolean: ["=", "<>"],
  integer: ["=", "<>", "<", ">", "<=", ">="]
};

const knownValues: Record<string, string[]> = {
  "doc.risk": ["'high'", "'medium'", "'low'"],
  "doc.isEquity": ["true", "false"]
};

// Build suggestions based on the current input value, similar to the
// getFilterSuggestions pattern from fe-sycamore.
const getSuggestions = (value: string): SearchSuggestion[] => {
  const trimmed = value.trimEnd();
  const tokens = trimmed.split(/\s+/).filter(Boolean);
  const endsWithSpace = value.length > 0 && value.endsWith(" ");

  // Empty input → suggest all attribute names.
  if (!tokens.length) {
    return filterAttributes.map((attr) => {
      const name = prefixName(attr);
      return { label: name, value: name + " " };
    });
  }

  const firstToken = tokens[0];
  const matchedAttr = filterAttributes.find((attr) => prefixName(attr) === firstToken);

  // Partial attribute name → filter matching attributes.
  if (tokens.length === 1 && !endsWithSpace) {
    const lower = firstToken.toLowerCase();
    const matches = filterAttributes
      .map((attr) => prefixName(attr))
      .filter((name) => name.toLowerCase().startsWith(lower) && name !== firstToken);

    return matches.map((name) => ({ label: name, value: name + " " }));
  }

  // After complete attribute name → suggest operators.
  if (tokens.length === 1 && endsWithSpace && matchedAttr) {
    const ops = operatorsByType[matchedAttr.type];
    return ops.map((op) => ({ label: op, value: `${firstToken} ${op} ` }));
  }

  // After attribute + operator → suggest known values if available.
  if (tokens.length === 2 && endsWithSpace && matchedAttr) {
    const values = knownValues[firstToken];
    if (values) {
      return values.map((v) => ({ label: v, value: `${firstToken} ${tokens[1]} ${v}` }));
    }
  }

  return [];
};

export const ValueSuggestions = () => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>(getSuggestions(""));

  const updateSuggestions = (value: string) => {
    setSearchValue(value);
    setSuggestions(getSuggestions(value));
  };

  return (
    <VuiFlexContainer alignItems="center">
      <VuiFlexItem grow={1}>
        <VuiSearchInput
          isClearable
          placeholder="Type a filter expression"
          value={searchValue}
          onChange={(e) => updateSuggestions(e.target.value)}
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Filter: ${searchValue}`);
          }}
          onClear={() => updateSuggestions("")}
          suggestions={suggestions}
          onSelectSuggestion={(suggestion) => updateSuggestions(suggestion.value ?? "")}
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
