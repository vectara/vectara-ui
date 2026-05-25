import { useState } from "react";
import { VuiChip, VuiFlexContainer, VuiSpacer, VuiToggle } from "../../../lib";

export const Chip = () => {
  const [hasCounts, setHasCounts] = useState(false);
  const [activeOption, setActiveOption] = useState<"all" | "a" | "b" | "c">("all");

  return (
    <>
      <VuiToggle checked={hasCounts} onChange={() => setHasCounts(!hasCounts)} label="Append counts" />

      <VuiSpacer size="m" />

      <VuiFlexContainer spacing="xs">
        <VuiChip
          onClick={() => setActiveOption("all")}
          isActive={activeOption === "all"}
          append={hasCounts ? 100 : undefined}
        >
          All options
        </VuiChip>

        <VuiChip
          onClick={() => setActiveOption("a")}
          isActive={activeOption === "a"}
          append={hasCounts ? 2 : undefined}
        >
          Option A
        </VuiChip>

        <VuiChip
          onClick={() => setActiveOption("b")}
          isActive={activeOption === "b"}
          append={hasCounts ? 81 : undefined}
        >
          Option B
        </VuiChip>

        <VuiChip
          onClick={() => setActiveOption("c")}
          isActive={activeOption === "c"}
          append={hasCounts ? 16 : undefined}
        >
          Option C
        </VuiChip>
      </VuiFlexContainer>
    </>
  );
};
