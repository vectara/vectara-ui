import { useState } from "react";
import { VuiButtonPrimary, VuiFlexContainer, VuiFlexItem, VuiSearchInput } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Subsection title="Large size">
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
      </Subsection>

      <Subsection title="Medium size">
        <form>
          <VuiFlexContainer alignItems="center" spacing="s">
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
                size="m"
              />
            </VuiFlexItem>

            <VuiFlexItem>
              <VuiButtonPrimary color="primary" size="m">
                Search
              </VuiButtonPrimary>
            </VuiFlexItem>
          </VuiFlexContainer>
        </form>
      </Subsection>

      <Subsection title="Small size">
        <form>
          <VuiFlexContainer alignItems="center" spacing="xs">
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
                size="s"
              />
            </VuiFlexItem>

            <VuiFlexItem>
              <VuiButtonPrimary color="primary" size="s">
                Search
              </VuiButtonPrimary>
            </VuiFlexItem>
          </VuiFlexContainer>
        </form>
      </Subsection>
    </>
  );
};
