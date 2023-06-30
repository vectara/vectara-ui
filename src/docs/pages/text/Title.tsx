import { VuiTitle, TITLE_SIZE } from "../../../lib";

export const Title = () => (
  <>
    {TITLE_SIZE.map((size) => (
      <VuiTitle size={size} key={size}>
        <h5>Size {size}</h5>
      </VuiTitle>
    ))}
  </>
);
