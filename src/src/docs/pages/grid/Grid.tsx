import { VuiGrid, VuiTopicButton, VuiText } from "../../../lib";

export const Grid = () => (
  <VuiGrid columns={3}>
    <VuiTopicButton href="https://docs.vectara.com" title="Read the docs">
      <VuiText>
        <p>They're full of delicious knowledge!</p>
      </VuiText>
    </VuiTopicButton>

    <VuiTopicButton href="https://www.vectara.com" title="Check out our thoughtful blog posts">
      <VuiText>
        <p>We share the things we've built and learned in this excited GenAI space.</p>
      </VuiText>
    </VuiTopicButton>

    <VuiTopicButton href="https://vectara.github.io/vectara-ui/" title="Bask in VUI">
      <VuiText>
        <p>You're already doing it!</p>
      </VuiText>
    </VuiTopicButton>
  </VuiGrid>
);
