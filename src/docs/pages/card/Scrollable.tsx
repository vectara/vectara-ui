import { VuiCard, VuiText, VuiTitle } from "../../../lib";
import "./scrollableExample.scss";

export const Scrollable = () => {
  return (
    <VuiCard
      className="scrollableCardExample"
      header={
        <VuiTitle size="s">
          <h3>Scrollable card</h3>
        </VuiTitle>
      }
      body={
        <VuiText>
          <p>This is scrollable content within the card body.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
          <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.</p>
          <p>Officia deserunt mollit anim id est laborum.</p>
          <p>Additional content to ensure scrolling is needed.</p>
          <p>More dummy text to fill the space and demonstrate scrolling.</p>
          <p>The content continues here with more paragraphs.</p>
          <p>This demonstrates the overflow behavior within the card.</p>
          <p>Keep scrolling to see more content below.</p>
          <p>Almost at the end of the scrollable content.</p>
          <p>More dummy text to fill the space and demonstrate scrolling.</p>
          <p>The content continues here with more paragraphs.</p>
          <p>This demonstrates the overflow behavior within the card.</p>
          <p>Keep scrolling to see more content below.</p>
          <p>Almost at the end of the scrollable content.</p>
          <p>This is the last paragraph of dummy content.</p>
        </VuiText>
      }
      isScrollable
    />
  );
};
