import { useState } from "react";
import { VuiButtonPrimary, VuiFlexContainer, VuiFlexItem, VuiSearchInput } from "../../../lib";

export const Large = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <VuiFlexContainer alignItems="center">
      <VuiFlexItem grow={1}>
        <VuiSearchInput
          size="l"
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
        <VuiButtonPrimary color="primary" size="l">
          Search
        </VuiButtonPrimary>
      </VuiFlexItem>
    </VuiFlexContainer>
  );
};
