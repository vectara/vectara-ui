import { VuiSearchResult } from "../../../lib";

const result = {
  snippet: {
    pre: "Amphibians are ectothermic, tetrapod vertebrates of the class Amphibia. ",
    text: "All living amphibians belong to the group Lissamphibia. ",
    post: "They inhabit a wide variety of habitats, with most species living within terrestrial, fossorial, arboreal or freshwater aquatic ecosystems. Thus amphibians typically start out as larvae living in water, but some species have developed behavioural adaptations to bypass this."
  }
};

export const Minimal = () => <VuiSearchResult result={result} position={1} />;
