import { VuiButtonPrimary } from "../../../lib";

export const Link = () => {
  return (
    <VuiButtonPrimary
      color="accent"
      href="https://vectara.com"
      target="_blank"
      onClick={() => console.log("click")}
      onMouseOver={() => console.log("mouse over")}
      onMouseOut={() => console.log("mouse out")}
    >
      Visit Vectara.com
    </VuiButtonPrimary>
  );
};
