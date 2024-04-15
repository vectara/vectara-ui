import { useState } from "react";
import { VuiCheckbox, VuiSpacer } from "../../../lib";

export const WithLabel = () => {
  const [pizzaToppings, setPizzaToppings] = useState({
    pepperoni: true,
    mushrooms: false,
    jalapenos: false
  });

  return (
    <>
      <VuiCheckbox
        label="Pepperoni"
        onChange={() =>
          setPizzaToppings({
            ...pizzaToppings,
            pepperoni: !pizzaToppings.pepperoni
          })
        }
        checked={pizzaToppings.pepperoni}
      />

      <VuiSpacer size="s" />

      <VuiCheckbox
        label="Mushrooms"
        onChange={() =>
          setPizzaToppings({
            ...pizzaToppings,
            mushrooms: !pizzaToppings.mushrooms
          })
        }
        checked={pizzaToppings.mushrooms}
      />

      <VuiSpacer size="s" />

      <VuiCheckbox
        label="Jalapeños"
        onChange={() =>
          setPizzaToppings({
            ...pizzaToppings,
            jalapenos: !pizzaToppings.jalapenos
          })
        }
        checked={pizzaToppings.jalapenos}
      />
    </>
  );
};
