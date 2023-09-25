import { useState } from "react";
import { VuiRadioButton, VuiSpacer } from "../../../lib";

export const WithLabel = () => {
  const [pizzaToppings, setPizzaToppings] = useState<"pepperoni" | "mushrooms" | "jalapenos">("pepperoni");

  return (
    <>
      <VuiRadioButton
        groupName="radioButtonWithLabel"
        label="Pepperoni"
        onChange={() => setPizzaToppings("pepperoni")}
        checked={pizzaToppings === "pepperoni"}
      />

      <VuiSpacer size="s" />

      <VuiRadioButton
        groupName="radioButtonWithLabel"
        label="Mushrooms"
        onChange={() => setPizzaToppings("mushrooms")}
        checked={pizzaToppings === "mushrooms"}
      />

      <VuiSpacer size="s" />

      <VuiRadioButton
        groupName="radioButtonWithLabel"
        label="Jalapeños"
        onChange={() => setPizzaToppings("jalapenos")}
        checked={pizzaToppings === "jalapenos"}
      />
    </>
  );
};
