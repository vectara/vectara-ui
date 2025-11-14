import { VuiGrid, VuiGridItem, VuiPanel, VuiText, VuiTitle, VuiSpacer } from "../../../lib";

export const GridAlignment = () => (
  <>
    <VuiTitle size="s">
      <h3>Grid Alignment</h3>
    </VuiTitle>

    <VuiSpacer size="m" />

    <VuiGrid
      templateColumns="repeat(4, 1fr)"
      templateRows="100px"
      spacing="m"
      alignItems="center"
      justifyItems="stretch"
    >
      <VuiGridItem justifySelf="start">
        <VuiPanel>
          <VuiText>
            <p>Start</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>

      <VuiGridItem justifySelf="center">
        <VuiPanel>
          <VuiText>
            <p>Centered</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>

      <VuiGridItem justifySelf="stretch">
        <VuiPanel>
          <VuiText>
            <p>Stretched</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>

      <VuiGridItem justifySelf="end">
        <VuiPanel>
          <VuiText>
            <p>End</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>

      <VuiGridItem>
        <VuiPanel>
          <VuiText>
            <p>Stretched</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>

      <VuiGridItem>
        <VuiPanel>
          <VuiText>
            <p>Stretched</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>

      <VuiGridItem>
        <VuiPanel>
          <VuiText>
            <p>Stretched</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>

      <VuiGridItem>
        <VuiPanel>
          <VuiText>
            <p>Stretched</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>
    </VuiGrid>
  </>
);
