import { BiPlanet } from "react-icons/bi";
import {
  VuiButtonPrimary,
  VuiCard,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon,
  VuiSelect,
  VuiSpacer,
  VuiText,
  VuiTitle
} from "../../../lib";
import { useState } from "react";

const typeOptions = [
  { text: "Full", value: "full" },
  { text: "Outlined", value: "outlined" }
];

export const Card = () => {
  const [type, setType] = useState<"full" | "outlined">("outlined");

  return (
    <>
      <VuiSelect
        id="typeOptions"
        options={typeOptions}
        value={type}
        onChange={(event) => setType(event.target.value as "full" | "outlined")}
      />

      <VuiSpacer size="m" />

      <VuiFlexContainer alignItems="stretch">
        <VuiFlexItem grow={1}>
          <VuiCard
            type={type}
            header={
              <>
                <VuiIcon color="neutral" size="xl">
                  <BiPlanet />
                </VuiIcon>
                <VuiSpacer size="s" />
                <VuiTitle size="s">
                  <h4>Adventurer, the off-world colonies await you!</h4>
                </VuiTitle>
                <VuiSpacer size="s" />
                <VuiText>
                  <p>
                    Alpha Centauri is the closest star system and closest planetary system to Earth's Solar System at
                    4.37 light-years from the Sun.
                  </p>
                </VuiText>
              </>
            }
            body={<VuiButtonPrimary color="success">Buy ticket</VuiButtonPrimary>}
            interactive
            fullHeight
          />
        </VuiFlexItem>

        <VuiFlexItem grow={1}>
          <VuiCard
            type={type}
            align="center"
            header={
              <>
                <VuiIcon color="neutral" size="xl">
                  <BiPlanet />
                </VuiIcon>
                <VuiSpacer size="s" />
                <VuiTitle size="s">
                  <h4>Adventurer, the off-world colonies await you!</h4>
                </VuiTitle>
                <VuiSpacer size="s" />
                <VuiText>
                  <p>
                    Alpha Centauri is the closest star system and closest planetary system to Earth's Solar System at
                    4.37 light-years from the Sun.
                  </p>
                </VuiText>
              </>
            }
            body={<VuiButtonPrimary color="success">Buy ticket</VuiButtonPrimary>}
            interactive
            fullHeight
          />
        </VuiFlexItem>

        <VuiFlexItem grow={1}>
          <VuiCard
            type={type}
            body={
              <>
                <VuiTitle size="s">
                  <h4>Cards in cards</h4>
                </VuiTitle>

                <VuiSpacer size="s" />

                <VuiFlexContainer spacing="xxs" wrap>
                  {[...Array(12)].map((el, index) => (
                    <VuiFlexItem grow={false} key={index}>
                      <VuiCard
                        interactive
                        header={
                          <VuiIcon color="neutral" size="xl">
                            <BiPlanet />
                          </VuiIcon>
                        }
                      />
                    </VuiFlexItem>
                  ))}
                </VuiFlexContainer>
              </>
            }
            fullHeight
          />
        </VuiFlexItem>
      </VuiFlexContainer>
    </>
  );
};
