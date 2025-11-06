import { VuiGrid, VuiGridItem, VuiPanel, VuiText } from "../../../lib";

export const GridTemplateAreas = () => (
  <>
    <VuiGrid
      templateAreas={`
        "header header header"
        "sidebar content content"
        "sidebar content content"
        "footer footer footer"
      `}
      templateColumns="200px 1fr 1fr"
      spacing="m"
    >
      <VuiGridItem area="header">
        <VuiPanel color="default">
          <VuiText>
            <p>Header - spans full width</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>

      <VuiGridItem area="sidebar">
        <VuiPanel>
          <VuiText>
            <p>Sidebar - fixed width</p>
            <p>This area spans 2 rows</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>

      <VuiGridItem area="content">
        <VuiPanel>
          <VuiText>
            <p>Main Content Area</p>
            <p>This takes up the remaining space with flexible width</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>

      <VuiGridItem area="footer">
        <VuiPanel color="default">
          <VuiText>
            <p>Footer - spans full width</p>
          </VuiText>
        </VuiPanel>
      </VuiGridItem>
    </VuiGrid>
  </>
);
