import { VuiLink } from "../../../lib";
import { Subsection } from "../../components/Subsection";

export const Link = () => {
  return (
    <>
      <Subsection title="With href and onClick">
        <VuiLink href="https://vectara.com" target="_blank" onClick={() => alert("Clicked link")}>
          Link
        </VuiLink>
      </Subsection>

      <Subsection title="With href only">
        <VuiLink href="https://vectara.com" target="_blank">
          Link
        </VuiLink>
      </Subsection>
    </>
  );
};
