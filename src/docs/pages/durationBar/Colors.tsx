import { Fragment } from "react";
import { PROGRESS_BAR_COLOR, VuiDurationBar, VuiSpacer } from "../../../lib";

export const Colors = () => {
  return (
    <>
      {PROGRESS_BAR_COLOR.map((color) => (
        <Fragment key={color}>
          <VuiDurationBar window={100} start={10} end={70} color={color} />
          <VuiSpacer size="s" />
        </Fragment>
      ))}
    </>
  );
};
