import { VuiTitle, TITLE_SIZE, VuiSpacer } from "../../../lib";

export const Title = () => (
  <>
    {TITLE_SIZE.concat()
      .reverse()
      .map((size) => (
        <>
          <VuiTitle size={size} key={size}>
            <h5>Title size {size}</h5>
          </VuiTitle>
          <VuiSpacer size="xxs" />
        </>
      ))}
  </>
);
