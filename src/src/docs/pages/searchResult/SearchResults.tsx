import { useState } from "react";
import { VuiBadge, VuiButtonSecondary, VuiSearchResult, VuiSpacer } from "../../../lib";

const results = [
  {
    isSelected: true,
    result: {
      title: "Amphibians",
      url: "https://en.wikipedia.org/wiki/Amphibian",
      date: "2020-01-01",
      snippet: {
        pre: "Amphibians are ectothermic, tetrapod vertebrates of the class Amphibia. ",
        text: "All living amphibians belong to the group Lissamphibia. ",
        post: "They inhabit a wide variety of habitats, with most species living within terrestrial, fossorial, arboreal or freshwater aquatic ecosystems. Thus amphibians typically start out as larvae living in water, but some species have developed behavioural adaptations to bypass this."
      }
    },
    subTitle: "Frogs and salamanders are amphibians",
    children: <VuiBadge color="success">Ribbit!</VuiBadge>
  },
  {
    isSelected: false,
    result: {
      title: "Reptiles",
      url: "https://en.wikipedia.org/wiki/Reptile",
      date: "2020-01-01",
      snippet: {
        pre: "Reptiles are tetrapod animals in the class Reptilia, comprising today's turtles, crocodilians, snakes, amphisbaenians, lizards, tuatara, and their extinct relatives. ",
        text: "The study of these traditional reptile orders, historically combined with that of modern amphibians, is called herpetology. ",
        post: "Because some reptiles are more closely related to birds than they are to other reptiles (e.g., crocodiles are more closely related to birds than they are to lizards), the traditional groups of 'reptiles' listed above do not together constitute a monophyletic grouping or clade (consisting of all descendants of a common ancestor). For this reason, many modern scientists prefer to consider the birds part of Reptilia as well, thereby making Reptilia a monophyletic class, including all living Diapsids."
      }
    },
    subTitle: "Herpetology is not what it sounds like",
    children: <VuiBadge color="success">Hiss!</VuiBadge>
  },
  {
    isSelected: false,
    result: {
      title: "Arachnids",
      url: "https://en.wikipedia.org/wiki/Arachnid",
      date: "2020-01-01",
      snippet: {
        pre: "Arachnids are a class (Arachnida) of joint-legged invertebrate animals (arthropods), in the subphylum Chelicerata. ",
        text: "All arachnids have eight legs, although the front pair of legs in some species has converted to a sensory function, while in other species, different appendages can grow large enough to take on the appearance of extra pairs of legs. ",
        post: "The term is derived from the Greek word ἀράχνη (aráchnē), from the myth of the hubristic human weaver Arachne who was turned into a spider."
      }
    },
    subTitle: "They're scary but just misunderstood",
    children: <VuiBadge color="success">Aaaah!</VuiBadge>
  }
] as const;

export const SearchResults = () => {
  const [isSelectionEnabled, setIsSelectionEnabled] = useState(false);

  return (
    <>
      <VuiButtonSecondary color="neutral" onClick={() => setIsSelectionEnabled(!isSelectionEnabled)}>
        Toggle selection
      </VuiButtonSecondary>

      <VuiSpacer size="l" />

      {results.map(({ isSelected, result, subTitle, children }, index) => (
        <VuiSearchResult
          key={result.title}
          isSelected={isSelectionEnabled && isSelected}
          result={result}
          position={index + 1}
          subTitle={subTitle}
        >
          {children}
        </VuiSearchResult>
      ))}
    </>
  );
};
