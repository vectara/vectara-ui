import { VuiGrid, VuiGridItem, VuiPanel, VuiSpacer, VuiText } from "../../../lib";

export const GridTemplateAreas = () => (
  <>
    <VuiText>
      <p>Use `templateAreas` to set grid-template-areas.</p>
      <p>grid-template-areas is a string-based grid area template.</p>
      <ul>
        <li>Each quoted string is a row in a 2D matrix.</li>
        <li>Within a row, space-separated identifiers name the cells (e.g., header, sidebar).</li>
        <li>Repeating the same identifier across adjacent cells merges them into one named grid area.</li>
        <li>A single dot . denotes an unassigned cell.</li>
        <li>All rows must have the same number of tokens.</li>
        <li>
          Elements join an area with grid-area: <code>grid-area: &lt;identifier&gt;.</code>
        </li>
      </ul>

      <p>Example:</p>
      <pre>
        <code>
          {`grid-template-areas: 
\t"header header header"
\t"sidebar content content"
\t"sidebar content content"
\t"footer footer footer";`}
        </code>
      </pre>
    </VuiText>

    <VuiSpacer size="m" />

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
