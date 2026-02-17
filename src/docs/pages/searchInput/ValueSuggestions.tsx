import { useState } from "react";
import { SearchSuggestion, VuiFlexContainer, VuiFlexItem, VuiSearchInput } from "../../../lib";

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
    return ops.map((op) => {
      const full = `${firstToken} ${op} `;
      return { label: full, value: full };
    });
  }

  // After attribute + operator → suggest known values, filtering by partial input.
  if (tokens.length >= 2 && matchedAttr) {
    const operator = tokens[1];
    const values = knownValues[firstToken];
    if (values) {
      // Join any tokens after the operator as the partial value typed so far.
      const partialValue = tokens.slice(2).join(" ");
      const filtered = partialValue
        ? values.filter((v) => v.toLowerCase().startsWith(partialValue.toLowerCase()))
        : values;

      return filtered.map((v) => {
        const full = `${firstToken} ${operator} ${v}`;
        return { label: full, value: full };
      });
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
          size="l"
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
    </VuiFlexContainer>
  );
};
