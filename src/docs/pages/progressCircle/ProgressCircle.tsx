import { useState } from "react";
import {
  PROGRESS_CIRCLE_COLOR,
  VuiButtonSecondary,
  VuiFlexContainer,
  VuiProgressCircle,
  VuiSpacer,
  VuiToggle
} from "../../../lib";

export const ProgressCircle = () => {
  const [isLabelVisible, setIsLabelVisible] = useState<boolean>(true);
  const [percentage, setPercentage] = useState<number>(25);
  const label = isLabelVisible ? `${Math.round(percentage)}%` : undefined;

  return (
    <>
      <VuiToggle label="Show label" checked={isLabelVisible} onChange={() => setIsLabelVisible(!isLabelVisible)} />

      <VuiSpacer size="m" />

      <VuiButtonSecondary color="primary" onClick={() => setPercentage(Math.random() * 100)}>
        Change percentage
      </VuiButtonSecondary>

      <VuiSpacer size="m" />

      <VuiFlexContainer alignItems="center" spacing="m">
        {PROGRESS_CIRCLE_COLOR.map((color) => (
          <VuiProgressCircle key={color} color={color} percentage={percentage} label={label} />
        ))}
      </VuiFlexContainer>

      <VuiSpacer size="m" />

      <VuiFlexContainer alignItems="center" spacing="m">
        {PROGRESS_CIRCLE_COLOR.map((color) => (
          <VuiProgressCircle key={color} color={color} percentage={percentage} size="s" />
        ))}
      </VuiFlexContainer>
    </>
  );
};
