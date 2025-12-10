import { useState } from "react";
import { VuiLink, VuiSpacer, VuiToggle } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Link = () => {
  const [isDownload, setIsDownload] = useState<boolean>(false);

  const props = {
    href: isDownload ? `${window.location.origin}/vectara-favicon.png` : "https://vectara.com",
    target: isDownload ? undefined : "_blank",
    download: isDownload ? "tiny_vectara_logo.png" : undefined
  } as const;

  return (
    <>
      <VuiToggle label="File download" checked={isDownload} onChange={() => setIsDownload(!isDownload)} />

      <VuiSpacer size="m" />

      <Subsection title="With href and onClick">
        <VuiLink onClick={() => alert("Clicked link")} {...props}>
          Link
        </VuiLink>
      </Subsection>

      <Subsection title="With href only">
        <VuiLink {...props}>Link</VuiLink>
      </Subsection>

      <Subsection title="With onClick only">
        <div style={{ maxWidth: "220px" }}>
          <VuiLink onClick={() => alert("Clicked link")}>
            Link that's really a button and has long text that will wrap the artifically narrow container
          </VuiLink>{" "}
        </div>
      </Subsection>
    </>
  );
};
