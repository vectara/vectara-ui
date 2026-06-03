import { useState } from "react";
import {
  VuiBadge,
  VuiFlexContainer,
  VuiGrid,
  VuiHorizontalRule,
  VuiIcon,
  VuiPatch,
  VuiSelect,
  VuiSimpleCard,
  VuiSpacer,
  VuiText,
  VuiTextColor,
  VuiTitle
} from "../../../lib";
import { BiData, BiPencil, BiRightArrowAlt } from "react-icons/bi";

const paddingOptions = [
  { text: "Small", value: "s" },
  { text: "Medium", value: "m" },
  { text: "Large", value: "l" }
];

export const SimpleCard = () => {
  const [padding, setPadding] = useState<"s" | "m" | "l">("l");

  return (
    <>
      <VuiSelect
        id="paddingOptions"
        options={paddingOptions}
        value={padding}
        onChange={(event) => setPadding(event.target.value as "s" | "m" | "l")}
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

        <VuiSimpleCard padding={padding} error="Has errors" onClick={() => console.log("Porcupine says hi!")}>
          <VuiTitle size="xs">
            <h3>Porcupine</h3>
          </VuiTitle>

          <VuiSpacer size="xxs" />

          <VuiText>
            <p>
              <VuiTextColor color="subdued">Spiky, defensive, error-prone</VuiTextColor>
            </p>
          </VuiText>
        </VuiSimpleCard>

        <VuiSimpleCard
          padding={padding}
          warning="Missing configuration"
          onClick={() => console.log("Raccoon says hi!")}
        >
          <VuiTitle size="xs">
            <h3>Raccoon</h3>
          </VuiTitle>

          <VuiSpacer size="xxs" />

          <VuiText>
            <p>
              <VuiTextColor color="subdued">Masked, mischievous, needs setup</VuiTextColor>
            </p>
          </VuiText>
        </VuiSimpleCard>
      </VuiGrid>

      <VuiSpacer size="m" />

      <div style={{ maxWidth: "400px" }}>
        <VuiSimpleCard padding={padding} onClick={() => console.log("Selected")}>
          <VuiFlexContainer alignItems="start" justifyContent="spaceBetween">
            <VuiPatch color="emerald" size="s">
              <VuiIcon>
                <BiData />
              </VuiIcon>
            </VuiPatch>

            <VuiBadge color="primary">Sources</VuiBadge>
          </VuiFlexContainer>

          <VuiSpacer size="m" />

          <VuiTitle size="s">
            <h3>
              <strong>Tyrannodata</strong>
            </h3>
          </VuiTitle>

          <VuiSpacer size="xxs" />

          <VuiText size="xs">
            <p>
              <VuiTextColor color="subdued">Terrible, horrible, no-good data</VuiTextColor>
            </p>
          </VuiText>

          <VuiSpacer size="s" />

          <VuiText size="s">
            <p>
              <VuiTextColor color="subdued">
                This data has seen better days. Where once it soared, mighty and free, above the lesser data, these days
                it spends its time scavenging for bytes.
              </VuiTextColor>
            </p>
          </VuiText>

          <VuiSpacer size="l" />

          <VuiHorizontalRule color="subdued" />

          <VuiSpacer size="l" />

          <VuiFlexContainer alignItems="center" justifyContent="spaceBetween">
            <VuiText size="s">
              <p>
                <VuiTextColor color="primary">Select</VuiTextColor>
              </p>
            </VuiText>

            <VuiIcon color="primary" size="s">
              <BiRightArrowAlt />
            </VuiIcon>
          </VuiFlexContainer>
        </VuiSimpleCard>
      </div>
    </>
  );
};
