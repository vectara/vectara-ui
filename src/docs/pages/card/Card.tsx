import { BiPlanet } from "react-icons/bi";
import {
  VuiButtonPrimary,
  VuiCard,
  VuiFlexContainer,
  VuiFlexItem,
  VuiIcon,
  VuiSpacer,
  VuiText,
  VuiTitle
} from "../../../lib";

export const Card = () => {
  return (
    <VuiFlexContainer alignItems="stretch">
      <VuiFlexItem grow={1}>
        <VuiCard
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
                  Alpha Centauri is the closest star system and closest planetary system to Earth's Solar System at 4.37
                  light-years from the Sun.
                </p>
              </VuiText>
            </>
          }
          body={<VuiButtonPrimary color="success">Buy ticket</VuiButtonPrimary>}
          interactive
        />
      </VuiFlexItem>

      <VuiFlexItem grow={1}>
        <VuiCard
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
                  Alpha Centauri is the closest star system and closest planetary system to Earth's Solar System at 4.37
                  light-years from the Sun.
                </p>
              </VuiText>
            </>
          }
          body={<VuiButtonPrimary color="success">Buy ticket</VuiButtonPrimary>}
          interactive
        />
      </VuiFlexItem>

      <VuiFlexItem grow={1}>
        <VuiCard
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
                      body={
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
        />
      </VuiFlexItem>
    </VuiFlexContainer>
  );
};
