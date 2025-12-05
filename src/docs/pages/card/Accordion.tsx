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

export const Accordion = () => {
  const [type, setType] = useState<"full" | "outlined">("outlined");
  const [isExpanded1, setIsExpanded1] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(true);
  const [isExpanded3, setIsExpanded3] = useState(false);

  return (
    <>
      <VuiText>
        <p>Cards can act as accordions with controlled expand/collapse functionality.</p>
      </VuiText>

      <VuiSpacer size="m" />

      <VuiSelect
        id="accordionTypeOptions"
        options={typeOptions}
        value={type}
        onChange={(event) => setType(event.target.value as "full" | "outlined")}
      />

      <VuiSpacer size="m" />

      <VuiFlexContainer direction="column" spacing="m">
        <VuiFlexItem>
          <VuiCard
            type={type}
            isAccordion
            isExpanded={isExpanded1}
            onToggle={() => setIsExpanded1(!isExpanded1)}
            header={
              <VuiFlexContainer alignItems="center" spacing="s">
                <VuiFlexItem grow={false}>
                  <VuiIcon color="neutral" size="m">
                    <BiPlanet />
                  </VuiIcon>
                </VuiFlexItem>
                <VuiFlexItem grow={1}>
                  <VuiTitle size="s">
                    <h4>Explore Alpha Centauri</h4>
                  </VuiTitle>
                </VuiFlexItem>
              </VuiFlexContainer>
            }
            body={
              <>
                <VuiText>
                  <p>
                    Alpha Centauri is the closest star system and closest planetary system to Earth's Solar System at
                    4.37 light-years from the Sun. The name is Latinized from α Centauri, and abbreviated Alpha Cen or α Cen.
                  </p>
                </VuiText>
                <VuiSpacer size="s" />
                <VuiText>
                  <p>
                    It is a triple star system, consisting of the three stars: α Centauri A (officially Rigil Kentaurus),
                    α Centauri B (officially Toliman), and the closest star α Centauri C (officially Proxima Centauri).
                  </p>
                </VuiText>
                <VuiSpacer size="m" />
                <VuiButtonPrimary color="success">Learn More</VuiButtonPrimary>
              </>
            }
            padding="m"
          />
        </VuiFlexItem>

        <VuiFlexItem>
          <VuiCard
            type={type}
            isAccordion
            isExpanded={isExpanded2}
            onToggle={() => setIsExpanded2(!isExpanded2)}
            header={
              <VuiFlexContainer alignItems="center" spacing="s">
                <VuiFlexItem grow={false}>
                  <VuiIcon color="neutral" size="m">
                    <BiPlanet />
                  </VuiIcon>
                </VuiFlexItem>
                <VuiFlexItem grow={1}>
                  <VuiTitle size="s">
                    <h4>Journey to Proxima b (Initially Expanded)</h4>
                  </VuiTitle>
                </VuiFlexItem>
              </VuiFlexContainer>
            }
            body={
              <>
                <VuiText>
                  <p>
                    Proxima Centauri b is a terrestrial exoplanet orbiting in the habitable zone of the red dwarf star
                    Proxima Centauri, the closest star to the Sun and part of the Alpha Centauri system.
                  </p>
                </VuiText>
                <VuiSpacer size="s" />
                <VuiText>
                  <p>
                    It is located approximately 4.2 light-years from Earth in the constellation Centaurus, making it the
                    closest known exoplanet to the Solar System.
                  </p>
                </VuiText>
              </>
            }
            padding="m"
          />
        </VuiFlexItem>

        <VuiFlexItem>
          <VuiCard
            type={type}
            isAccordion
            isExpanded={isExpanded3}
            onToggle={() => setIsExpanded3(!isExpanded3)}
            header={
              <VuiTitle size="s">
                <h4>Simple Text Header</h4>
              </VuiTitle>
            }
            body={
              <VuiText>
                <p>
                  This accordion card demonstrates a simpler header without icons. The accordion functionality works
                  with any content you provide as the header and body props. The parent component maintains full control
                  over the expanded/collapsed state through the isExpanded and onToggle props.
                </p>
              </VuiText>
            }
            padding="s"
          />
        </VuiFlexItem>
      </VuiFlexContainer>
    </>
  );
};