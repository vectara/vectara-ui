import { useState } from "react";
import { VuiButtonPrimary, VuiDiffViewer } from "../../../lib";

const original = `# Release checklist

- Bump the version
- Update the changelog
- Publish to npm`;

const edited = `# Release checklist

- Bump the version number
- Update the changelog
- Tag the release
- Publish to npm
- Announce in Slack`;

export const InlineDefault = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <VuiButtonPrimary color="primary" onClick={() => setIsOpen(true)}>
        Open inline diff
      </VuiButtonPrimary>

      <VuiDiffViewer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="CHANGELOG.md"
        defaultView="inline"
        original={original}
        edited={edited}
      />
    </>
  );
};
