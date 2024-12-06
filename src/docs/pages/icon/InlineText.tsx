import { BiStar } from "react-icons/bi";
import { VuiIcon, VuiText } from "../../../lib";

export const InlineText = () => {
  return (
    <VuiText>
      <p>
        Here's some text inline with an icon{" "}
        <VuiIcon size="s">
          <BiStar />
        </VuiIcon>
      </p>
    </VuiText>
  );
};
