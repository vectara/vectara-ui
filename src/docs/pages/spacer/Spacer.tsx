import { Fragment } from "react";
import { SPACER_SIZE, VuiSpacer, VuiText } from "../../../lib";

export const Spacer = () => (
  <>
    {SPACER_SIZE.map((size) => (
      <Fragment key={size}>
        <VuiText>
          <p>Size {size}</p>
        </VuiText>

        <div className="spacerExample">
          <VuiSpacer size={size} />
        </div>

        <VuiSpacer size="l" />
      </Fragment>
    ))}
  </>
);
