import { useState } from "react";
import { VuiButtonPrimary, VuiFlexContainer, VuiFlexItem, VuiSearchInput } from "../../../lib";

export const ClearableSearchInput = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <VuiFlexContainer alignItems="center">
      <VuiFlexItem grow={1}>
        <VuiSearchInput
          isClearable
          autoFocus
          placeholder="Clearable search input"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Submit ${searchValue}`);
          }}
          onClear={() => setSearchValue("")}
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
