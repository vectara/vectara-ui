import { VuiButtonPrimary, VuiSpacer } from "../../../lib";

export const Link = () => {
  return (
    <>
      <VuiButtonPrimary color="accent" href="https://vectara.com" target="_blank">
        Visit Vectara.com
      </VuiButtonPrimary>

      <VuiSpacer size="m" />

      <VuiButtonPrimary isAnchor color="accent" href="https://vectara.com" target="_blank">
        Visit Vectara.com (anchor)
      </VuiButtonPrimary>
    </>
  );
};
