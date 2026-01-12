import { useState } from "react";
import {
  VuiFlexContainer,
  VuiGrid,
  VuiIcon,
  VuiSelect,
  VuiSimpleCard,
  VuiSpacer,
  VuiText,
  VuiTextColor,
  VuiTitle
} from "../../../lib";
import { BiPencil } from "react-icons/bi";

const paddingOptions = [
  { text: "Extra Small", value: "xs" },
  { text: "Small", value: "s" },
  { text: "Medium", value: "m" },
  { text: "Large", value: "l" }
];

export const SimpleCard = () => {
  const [padding, setPadding] = useState<"xs" | "s" | "m" | "l">("xs");

  return (
    <>
      <VuiSelect
        id="paddingOptions"
        options={paddingOptions}
        value={padding}
        onChange={(event) => setPadding(event.target.value as "xs" | "s" | "m" | "l")}
      />

      <VuiSpacer size="m" />

      <VuiGrid
        templateColumns={{
          sm: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)"
        }}
        spacing="m"
      >
        <VuiSimpleCard padding={padding}>
          <VuiTitle size="xs">
            <h3>Squirrel</h3>
          </VuiTitle>

          <VuiSpacer size="xxs" />

          <VuiText>
            <p>
              <VuiTextColor color="subdued">Cute, nimble, cheek-stuffer</VuiTextColor>
            </p>
          </VuiText>
        </VuiSimpleCard>

        <VuiSimpleCard padding={padding} href="/">
          <VuiFlexContainer alignItems="center" justifyContent="spaceBetween" spacing="s">
            <VuiTitle size="xs">
              <h3>Fox</h3>
            </VuiTitle>

            <VuiIcon size="s" color="primary">
              <BiPencil />
            </VuiIcon>
          </VuiFlexContainer>

          <VuiSpacer size="xxs" />

          <VuiText>
            <p>
              <VuiTextColor color="subdued">Clever, crafty, spirit guide (links to Home)</VuiTextColor>
            </p>
          </VuiText>
        </VuiSimpleCard>

        <VuiSimpleCard padding={padding} href="/" onClick={() => console.log("Camera card clicked!")}>
          <VuiFlexContainer alignItems="center" justifyContent="spaceBetween" spacing="s">
            <VuiTitle size="xs">
              <h3>Bear</h3>
            </VuiTitle>

            <VuiIcon size="s" color="primary">
              <BiPencil />
            </VuiIcon>
          </VuiFlexContainer>

          <VuiSpacer size="xxs" />

          <VuiText>
            <p>
              <VuiTextColor color="subdued">Strong, hibernates, honey addict</VuiTextColor>
            </p>
          </VuiText>
        </VuiSimpleCard>

        <VuiSimpleCard padding={padding} onClick={() => console.log("TV card clicked!")}>
          <VuiFlexContainer alignItems="center" justifyContent="spaceBetween" spacing="s">
            <VuiTitle size="xs">
              <h3>Mouse</h3>
            </VuiTitle>

            <VuiIcon size="s" color="primary">
              <BiPencil />
            </VuiIcon>
          </VuiFlexContainer>

          <VuiSpacer size="xxs" />

          <VuiText>
            <p>
              <VuiTextColor color="subdued">Small, compressible, cheese thief</VuiTextColor>
            </p>
          </VuiText>
        </VuiSimpleCard>
      </VuiGrid>
    </>
  );
};
