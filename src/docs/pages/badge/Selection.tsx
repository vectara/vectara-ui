import { useState } from "react";
import { VuiBadge, VuiFlexContainer, VuiFlexItem } from "../../../lib";

export const Selection = () => {
  const [selected, setSelected] = useState<string[]>(["critical"]);

  const toggleSelected = (value: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <VuiFlexContainer>
      <VuiFlexItem grow={false}>
        <VuiBadge color="danger" onClick={() => toggleSelected("critical")} isSelected={selected.includes("critical")}>
          CRITICAL
        </VuiBadge>
      </VuiFlexItem>

      <VuiFlexItem grow={false}>
        <VuiBadge color="warning" onClick={() => toggleSelected("warning")} isSelected={selected.includes("warning")}>
          WARNING
        </VuiBadge>
      </VuiFlexItem>

      <VuiFlexItem grow={false}>
        <VuiBadge color="success" onClick={() => toggleSelected("success")} isSelected={selected.includes("success")}>
          HEALTHY
        </VuiBadge>
      </VuiFlexItem>
    </VuiFlexContainer>
  );
};
