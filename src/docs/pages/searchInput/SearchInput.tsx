import { useState } from "react";
import { VuiSearchInput } from "../../../lib";

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
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
  );
};
