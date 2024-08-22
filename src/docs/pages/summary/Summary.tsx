import { VuiSummary, VuiSummaryCitation } from "../../../lib";

const summary =
  "Cordyceps /ˈkɔːrdɪsɛps/ is a genus of ascomycete fungi (sac fungi) that includes about 600 worldwide species [1]. Diverse variants of cordyceps have had more than 1,500 years of use in Chinese medicine.[2] Most Cordyceps species are endoparasitoids, parasitic [3][4] mainly on insects and other arthropods (they are thus entomopathogenic fungi); a few are parasitic on other fungi.[5,6,7]";

const SummaryCitation = ({ reference }: { reference: string }) => (
  <>
    {" "}
    <VuiSummaryCitation reference={reference} />
  </>
);

export const Summary = () => {
  return <VuiSummary summary={summary} SummaryCitation={SummaryCitation} data-testid="summary" />;
};
