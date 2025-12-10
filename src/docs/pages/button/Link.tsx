import { useState } from "react";
import { VuiButtonPrimary, VuiFlexContainer, VuiSpacer, VuiToggle } from "../../../lib";

export const Link = () => {
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isDownload, setIsDownload] = useState<boolean>(false);

  return (
    <>
      <VuiFlexContainer>
        <VuiToggle
          label="Disabled (not clickable, visual)"
          checked={isDisabled}
          onChange={() => setIsDisabled(!isDisabled)}
        />

        <VuiToggle label="File download" checked={isDownload} onChange={() => setIsDownload(!isDownload)} />
      </VuiFlexContainer>

      <VuiSpacer size="m" />

      <VuiButtonPrimary
        color="accent"
        href={isDownload ? `${window.location.origin}/vectara-favicon.png` : "https://vectara.com"}
        target={isDownload ? undefined : "_blank"}
        download={isDownload ? "tiny_vectara_logo.png" : undefined}
        onClick={() => console.log("click")}
        onMouseOver={() => console.log("mouse over")}
        onMouseOut={() => console.log("mouse out")}
        isDisabled={isDisabled}
      >
        Visit Vectara.com
      </VuiButtonPrimary>
    </>
  );
};
