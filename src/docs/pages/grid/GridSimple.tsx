import { VuiSimpleGrid, VuiPanel, VuiText, VuiTitle, VuiSpacer } from "../../../lib";

export const GridSimple = () => (
  <>
    <VuiTitle size="s">
      <h3>SimpleGrid - Responsive Auto-fit</h3>
    </VuiTitle>

    <VuiSpacer size="m" />

    <VuiSimpleGrid minChildWidth="250px" spacing="m">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <VuiPanel key={i}>
          <VuiText>
            <p>Item {i}</p>
            <p>Minimum width: 250px</p>
          </VuiText>
        </VuiPanel>
      ))}
    </VuiSimpleGrid>

    <VuiSpacer size="m" />

    <VuiTitle size="s">
      <h3>SimpleGrid - Fixed Columns</h3>
    </VuiTitle>

    <VuiSpacer size="m" />

    <VuiSimpleGrid columns={3} spacing="l">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <VuiPanel key={i}>
          <VuiText>
            <p>Item {i}</p>
            <p>Fixed 3 columns</p>
          </VuiText>
        </VuiPanel>
      ))}
    </VuiSimpleGrid>
  </>
);
