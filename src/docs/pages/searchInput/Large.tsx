import { useState } from "react";
import { VuiSearchInput } from "../../../lib";

export const Large = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
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
  );
};
