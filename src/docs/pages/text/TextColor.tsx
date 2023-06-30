import { VuiText, VuiTextColor, TEXT_COLOR } from "../../../lib";

export const TextColor = () => (
  <VuiText>
    <p>
      You can <VuiTextColor color="accent">color</VuiTextColor> words.
    </p>

    {TEXT_COLOR.map((color) => (
      <p key={color}>
        <VuiTextColor color={color}>Color {color}</VuiTextColor>
      </p>
    ))}
  </VuiText>
);
