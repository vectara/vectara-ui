import { BUTTON_COLOR, VuiHorizontalRule, VuiSpacer, VuiText } from "../../../lib";

export const HorizontalRule = () => {
  return (
    <>
      {BUTTON_COLOR.map((color) => (
        <>
          <VuiText>
            <p>{color}</p>
          </VuiText>
          <VuiSpacer size="m" />
          <VuiHorizontalRule color={color} />
          <VuiSpacer size="xl" />
        </>
      ))}
    </>
  );
};
