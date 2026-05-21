import { VuiText, VuiTopicButton } from "../../../lib";

export const Badges = () => {
  return (
    <VuiTopicButton
      href="https://docs.vectara.com"
      title="Ingest agent"
      badges={[
        { label: "Indexing", color: "neutral" },
        { label: "Pipelines", color: "neutral" }
      ]}
    >
      <VuiText>
        <p>Ingest data from multiple sources, parse and transform the data, and index output into corpora.</p>
      </VuiText>
    </VuiTopicButton>
  );
};
