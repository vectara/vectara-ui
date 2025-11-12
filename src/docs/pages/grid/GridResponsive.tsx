import { VuiGrid, VuiGridItem, VuiPanel, VuiSpacer, VuiText } from "../../../lib";

export const GridResponsive = () => (
  <>
    <VuiText>Dynamic grid with different column counts at different breakpoints.</VuiText>

    <VuiSpacer size="m" />

    <VuiGrid
      templateColumns={{
        sm: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)"
      }}
      spacing="m"
    >
      {Array.from({ length: 6 }, (_, i) => (
        <VuiGridItem key={i}>
          <VuiPanel>
            <VuiText>
              <p>Item {i + 1}</p>
            </VuiText>
          </VuiPanel>
        </VuiGridItem>
      ))}
    </VuiGrid>

    <VuiSpacer size="l" />

    <VuiText>Fixed 3 column layout with items that span different numbers of columns at different breakpoints.</VuiText>

    <VuiSpacer size="m" />

    <VuiGrid templateColumns="1fr 1fr 1fr" templateRows="2">
      <VuiGridItem
        colSpan={{
          default: 2,
          lg: 1
        }}
      >
        <VuiPanel>
          <VuiText>
            <p>I span 2 columns in small and medium sized containers and 1 column in large containers</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>

      <VuiGridItem
        colSpan={{
          default: 1
        }}
      >
        <VuiPanel>
          <VuiText>
            <p>I span 1 column in small and medium sized containers and 1 column in large containers</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>

      <VuiGridItem
        colSpan={{
          default: 3,
          lg: 1
        }}
      >
        <VuiPanel>
          <VuiText>
            <p>I span 3 columns in small and medium sized containers and 1 column in large containers</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>
    </VuiGrid>
  </>
);
