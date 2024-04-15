import { VuiLinkInternal, VuiSpacer, VuiText } from "../../../lib";

export const Internal = () => {
  return (
    <>
      <VuiText>
        <p>
          Links to Vectara-managed destinations need to be configured with properties that enable analytics tracking.
        </p>
      </VuiText>

      <VuiSpacer size="m" />

      <VuiLinkInternal href="https://vectara.com" target="_blank" onClick={() => alert("Clicked link")}>
        Automatically has tracking props
      </VuiLinkInternal>
    </>
  );
};
