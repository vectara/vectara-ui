import { useState } from "react";
import { PROGRESS_BAR_COLOR, VuiButtonSecondary, VuiProgressBar, VuiSpacer, VuiToggle } from "../../../lib";

export const ProgressBar = () => {
  const [isValueVisible, setIsValueVisible] = useState<boolean>(false);
  const [percentage, setPercentage] = useState<number>(25);

  return (
    <>
      <VuiToggle label="Show value" checked={isValueVisible} onChange={() => setIsValueVisible(!isValueVisible)} />

      <VuiSpacer size="m" />

      <VuiButtonSecondary color="primary" onClick={() => setPercentage(Math.random() * 100)}>
        Change percentage
      </VuiButtonSecondary>

      <VuiSpacer size="m" />

      {PROGRESS_BAR_COLOR.map((color) => (
        <>
          <VuiProgressBar
            color={color}
            percentage={percentage}
            value={isValueVisible ? `${Math.round(percentage)}%` : undefined}
          />
          <VuiSpacer size="s" />
        </>
      ))}
    </>
  );
};
