import { VuiDurationBar, VuiSpacer, VuiText } from "../../../lib";

export const MinBarWidth = () => {
  return (
    <>
      <VuiText>
        <p>Default minBarWidthPx (4px) for a near-zero-width bar:</p>
      </VuiText>

      <VuiSpacer size="s" />

      <VuiDurationBar window={10000} start={5000} end={5001} color="accent" />

      <VuiSpacer size="m" />

      <VuiText>
        <p>Custom minBarWidthPx (16px) for the same bar:</p>
      </VuiText>

      <VuiSpacer size="s" />

      <VuiDurationBar window={10000} start={5000} end={5001} color="accent" minBarWidthPx={16} />
    </>
  );
};
