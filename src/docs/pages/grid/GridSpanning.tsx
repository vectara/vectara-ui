import { VuiGrid, VuiGridItem, VuiPanel, VuiText } from "../../../lib";

export const GridSpanning = () => (
  <VuiGrid templateColumns="repeat(4, 1fr)" spacing="m">
    <>
      <VuiGridItem>
        <VuiPanel>
          <VuiText>
            <p>Spans 1 column</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>
      <VuiGridItem>
        <VuiPanel>
          <VuiText>
            <p>Spans 1 column</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>
      <VuiGridItem>
        <VuiPanel>
          <VuiText>
            <p>Spans 1 column</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>
      <VuiGridItem>
        <VuiPanel>
          <VuiText>
            <p>Spans 1 column</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>
    </>

    <>
      <VuiGridItem alignSelf="center" colSpan={2} rowSpan={1}>
        <VuiPanel>
          <VuiText>
            <p>Spans 2 columns and 1 row</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>

      <VuiGridItem colSpan={2} rowSpan={5}>
        <VuiPanel fullHeight>
          <VuiText>
            <p>Spans 2 columns and 5 rows</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>

      <VuiGridItem colSpan={1} rowSpan={1}>
        <VuiPanel fullHeight>
          <VuiText>
            <p>Spans 1 column and 1 row</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>
      <VuiGridItem colSpan={2} rowSpan={2}>
        <VuiPanel fullHeight>
          <VuiText>
            <p>Spans 2 columns and 1 row</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>
    </>

    <>
      <VuiGridItem colSpan={3}>
        <VuiPanel>
          <VuiText>
            <p>Spans 3 columns</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>
      <VuiGridItem>
        <VuiPanel>
          <VuiText>
            <p>Spans 1 column</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>
    </>
  </VuiGrid>
);
