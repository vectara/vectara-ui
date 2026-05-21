import { BiData } from "react-icons/bi";
import { VuiIcon, VuiText, VuiTextColor, VuiTopicButton, VuiSpacer } from "../../../lib";

export const CompactRow = () => {
  return (
    <>
      <VuiTopicButton
        href="#"
        title="Customer support"
        buttonStyle="compactRow"
        badges={[
          { label: "Support", color: "neutral" },
          { label: "Technical", color: "neutral" }
        ]}
        fullWidth
      >
        <VuiText size="s">
          <p>
            <VuiTextColor color="subdued">
              Ingest data from multiple sources, parse and transform, and index into corpora.
            </VuiTextColor>
          </p>
        </VuiText>
      </VuiTopicButton>

      <VuiSpacer size="m" />

      <VuiTopicButton
        href="#"
        title="Ingest agent"
        buttonStyle="compactRow"
        icon={
          <VuiIcon size="s" color="primary">
            <BiData />
          </VuiIcon>
        }
        badges={[
          { label: "Indexing", color: "neutral" },
          { label: "Pipelines", color: "neutral" }
        ]}
        fullWidth
      >
        <VuiText size="s">
          <p>
            <VuiTextColor color="subdued">
              Ingest data from multiple sources, parse and transform, and index into corpora.
            </VuiTextColor>
          </p>
        </VuiText>
      </VuiTopicButton>
    </>
  );
};
