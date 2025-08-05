import { BiCheck, BiError, BiInfoCircle, BiSolidHand, BiSolidMagicWand, BiStar } from "react-icons/bi";
import { ICON_COLOR, VuiFlexContainer, VuiFlexItem, VuiIcon, VuiText } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Colors = () => {
  return (
    <>
      <Subsection title="Default style">
        <VuiFlexContainer>
          {ICON_COLOR.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiText>
                <p>Color {color}</p>
              </VuiText>

              <VuiIcon color={color} size="m">
                <BiStar />
              </VuiIcon>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>

      <Subsection title="Enclosed style">
        <VuiFlexContainer>
          {ICON_COLOR.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiText>
                <p>Color {color}</p>
              </VuiText>

              <div>
                <VuiIcon color={color} size="m" type="enclosed">
                  <BiStar />
                </VuiIcon>
              </div>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>

      <Subsection title="Token style">
        <VuiFlexContainer>
          {ICON_COLOR.map((color) => (
            <VuiFlexItem grow={false} key={color}>
              <VuiText>
                <p>Color {color}</p>
              </VuiText>

              <div>
                <VuiIcon color={color} size="s" type="token">
                  <BiStar />
                </VuiIcon>
              </div>
            </VuiFlexItem>
          ))}
        </VuiFlexContainer>
      </Subsection>

      <Subsection title="Common tokens">
        <VuiFlexContainer>
          <VuiFlexItem grow={false}>
            <VuiIcon color="danger" size="s" type="token">
              <BiSolidHand />
            </VuiIcon>
          </VuiFlexItem>

          <VuiFlexItem grow={false}>
            <VuiIcon color="warning" size="s" type="token">
              <BiError />
            </VuiIcon>
          </VuiFlexItem>

          <VuiFlexItem grow={false}>
            <VuiIcon color="success" size="s" type="token">
              <BiCheck />
            </VuiIcon>
          </VuiFlexItem>

          <VuiFlexItem grow={false}>
            <VuiIcon color="primary" size="s" type="token">
              <BiInfoCircle />
            </VuiIcon>
          </VuiFlexItem>

          <VuiFlexItem grow={false}>
            <VuiIcon color="accent" size="s" type="token">
              <BiSolidMagicWand />
            </VuiIcon>
          </VuiFlexItem>
        </VuiFlexContainer>
      </Subsection>
    </>
  );
};
