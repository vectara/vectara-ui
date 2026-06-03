import { BiCompass } from "react-icons/bi";
import { VuiPatch, VuiFlexContainer, VuiIcon } from "../../../lib";

const sizes = ["xs", "s", "m"] as const;

export const Sizes = () => {
  return (
    <VuiFlexContainer spacing="m" wrap>
      {sizes.map((size) => (
        <div>
          <VuiPatch color="indigo" size={size}>
            <VuiIcon>
              <BiCompass />
            </VuiIcon>
          </VuiPatch>
        </div>
      ))}
    </VuiFlexContainer>
  );
};
