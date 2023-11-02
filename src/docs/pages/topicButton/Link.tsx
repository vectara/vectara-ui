import { VuiSpacer, VuiText, VuiTitle, VuiTopicButton } from "../../../lib";

export const Link = () => {
  return (
    <VuiTopicButton href="https://docs.vectara.com">
      <VuiTitle size="s">
        <h4>Read the docs</h4>
      </VuiTitle>

      <VuiSpacer size="xxs" />

      <VuiText>
        <p>They're full of delicious knowledge!</p>
      </VuiText>
    </VuiTopicButton>
  );
};
