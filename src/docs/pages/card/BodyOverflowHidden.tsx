import { VuiCard, VuiFlexContainer, VuiSpacer, VuiText, VuiTitle } from "../../../lib";

export const BodyOverflowHidden = () => {
  return (
    <>
      <VuiText>
        <p>
          This example demonstrates the body overflow hidden prop. This can be helpful when you have content within the
          card's body that needs to be scrollable. The first card's scrollable div can be scrolled and adheres to the
          card's boundaries.
        </p>
      </VuiText>

      <VuiSpacer size="m" />

      <VuiFlexContainer>
        <div style={{ height: "300px" }}>
          <VuiCard
            header={
              <VuiTitle size="s">
                <h3>With overflow hidden</h3>
              </VuiTitle>
            }
            bodyOverflowYHidden
            body={
              <div style={{ overflowY: "scroll" }}>
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
              </div>
            }
            fullHeight
          />
        </div>
        <div style={{ height: "300px" }}>
          <VuiCard
            header={
              <VuiTitle size="s">
                <h3>Without overflow hidden</h3>
              </VuiTitle>
            }
            body={
              <div style={{ overflowY: "scroll" }}>
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
              </div>
            }
            fullHeight
          />
        </div>
      </VuiFlexContainer>
    </>
  );
};
