import { useState } from "react";
import { VuiButtonPrimary, VuiFlexContainer, VuiFlexItem, VuiSearchInput } from "../../../lib";

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <form>
      <VuiFlexContainer alignItems="center">
        <VuiFlexItem grow={1}>
          <VuiSearchInput
            autoFocus
            placeholder="Ask a question"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onSubmit={(e) => {
              e.preventDefault();
              alert(`Submit ${searchValue}`);
            }}
          />
        </VuiFlexItem>

        <VuiFlexItem>
          <VuiButtonPrimary color="primary" size="m">
            Search
          </VuiButtonPrimary>
        </VuiFlexItem>
      </VuiFlexContainer>
    </form>
  );
};
