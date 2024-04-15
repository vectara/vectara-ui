import { VuiText, VuiTopicButton } from "../../../lib";

export const Link = () => {
  return (
    <VuiTopicButton href="https://docs.vectara.com" title="Read the docs">
      <VuiText>
        <p>They're full of delicious knowledge!</p>
      </VuiText>
    </VuiTopicButton>
  );
};
