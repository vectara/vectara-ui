import { useState } from "react";
import { VuiRadioButton, VuiSpacer } from "../../../lib";

export const WithLabel = () => {
  const [pizzaToppings, setPizzaToppings] = useState<"pepperoni" | "mushrooms" | "jalapenos">("pepperoni");

  return (
    <>
      <VuiRadioButton
        label="Pepperoni"
        onChange={() => setPizzaToppings("pepperoni")}
        checked={pizzaToppings === "pepperoni"}
      />

      <VuiSpacer size="s" />

      <VuiRadioButton
        label="Mushrooms"
        onChange={() => setPizzaToppings("mushrooms")}
        checked={pizzaToppings === "mushrooms"}
      />

      <VuiSpacer size="s" />

      <VuiRadioButton
        label="Jalapeños"
        onChange={() => setPizzaToppings("jalapenos")}
        checked={pizzaToppings === "jalapenos"}
      />
    </>
  );
};
