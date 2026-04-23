import { VuiGrid, VuiGridItem, VuiCard, VuiText, VuiSpacer, VuiTitle } from "../../../lib";

export const GridAutoRows = () => {
  const longContent = (
    <>
      <VuiText>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </VuiText>
      <VuiSpacer size="s" />
      <VuiText>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </p>
      </VuiText>
      <VuiSpacer size="s" />
      <VuiText>
        <p>
          Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
          magni dolores eos qui ratione voluptatem sequi nesciunt.
        </p>
      </VuiText>
      <VuiSpacer size="s" />
      <VuiText>
        <p>
          Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
          numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </VuiText>
    </>
  );

  return (
    <>
      <VuiTitle size="s">
        <h3>Grid with autoRows="200px"</h3>
      </VuiTitle>

      <VuiSpacer size="m" />

      <VuiText>
        <p>
          This grid uses autoRows="200px" to set a fixed height of 200px for all implicitly created rows. Notice how all
          rows have the same height regardless of content, and cards with long content become scrollable. This becomes
          particularly relevant as the number of rows increases as the size of the container gets smaller.
        </p>
      </VuiText>

      <VuiSpacer size="m" />

      <VuiGrid
        templateColumns={{
          sm: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)"
        }}
        spacing="m"
        autoRows="200px"
      >
        <VuiGridItem>
          <VuiCard fullHeight isScrollable padding="m" header={<VuiText size="m">Card 1</VuiText>} body={longContent} />
        </VuiGridItem>

        <VuiGridItem>
          <VuiCard
            fullHeight
            isScrollable
            padding="m"
            header={<VuiText size="m">Card 2</VuiText>}
            body={
              <VuiText>
                <p>Short content in this card.</p>
              </VuiText>
            }
          />
        </VuiGridItem>

        <VuiGridItem>
          <VuiCard fullHeight isScrollable padding="m" header={<VuiText size="m">Card 3</VuiText>} body={longContent} />
        </VuiGridItem>
      </VuiGrid>

      <VuiSpacer size="l" />

      <VuiTitle size="s">
        <h3>Grid without autoRows</h3>
      </VuiTitle>

      <VuiSpacer size="m" />

      <VuiText>
        <p>
          This grid has no autoRows value set. Notice how on larger containers, the cards have the same height (thanks
          to templateRows="200px") but as the container gets smaller, the newly created rows don't adhere to a fixed
          height.
        </p>
      </VuiText>

      <VuiSpacer size="m" />

      <VuiGrid
        templateColumns={{
          sm: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)"
        }}
        templateRows="200px"
        spacing="m"
      >
        <VuiGridItem>
          <VuiCard fullHeight isScrollable padding="m" header={<VuiText size="m">Card 1</VuiText>} body={longContent} />
        </VuiGridItem>

        <VuiGridItem>
          <VuiCard
            fullHeight
            isScrollable
            padding="m"
            header={<VuiText size="m">Card 2</VuiText>}
            body={
              <VuiText>
                <p>Short content in this card.</p>
              </VuiText>
            }
          />
        </VuiGridItem>

        <VuiGridItem>
          <VuiCard fullHeight isScrollable padding="m" header={<VuiText size="m">Card 3</VuiText>} body={longContent} />
        </VuiGridItem>
      </VuiGrid>
    </>
  );
};
