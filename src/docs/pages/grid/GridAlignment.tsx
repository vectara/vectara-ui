import { VuiGrid, VuiGridItem, VuiPanel, VuiText, VuiTitle, VuiSpacer } from "../../../lib";

export const GridAlignment = () => (
  <>
    <VuiTitle size="s">
      <h3>Grid Alignment</h3>
    </VuiTitle>

    <VuiSpacer size="m" />

    <VuiGrid
      templateColumns="repeat(3, 1fr)"
      templateRows="100px"
      spacing="m"
      alignItems="center"
      justifyItems="center"
    >
      <VuiPanel>
        <VuiText>
          <p>Centered</p>
        </VuiText>
      </VuiPanel>
      <VuiPanel>
        <VuiText>
          <p>Centered</p>
        </VuiText>
      </VuiPanel>
      <VuiPanel>
        <VuiText>
          <p>Centered</p>
        </VuiText>
      </VuiPanel>
    </VuiGrid>

    <VuiSpacer size="m" />

    <VuiTitle size="s">
      <p>Individual Item Alignment</p>
    </VuiTitle>

    <VuiSpacer size="m" />

    <VuiGrid templateColumns="repeat(3, 150px)" templateRows="150px" spacing="m">
      <VuiGridItem alignSelf="start" justifySelf="start">
        <VuiPanel>
          <VuiText>
            <p>Top-left</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>

      <VuiGridItem alignSelf="center" justifySelf="center">
        <VuiPanel>
          <VuiText>
            <p>Center</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>

      <VuiGridItem alignSelf="end" justifySelf="end">
        <VuiPanel>
          <VuiText>
            <p>Bottom-right</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>
    </VuiGrid>
  </>
);
