import { VuiSpacer, VuiText, VuiTitle } from "../../../lib";

// Demonstrates referencing theme colors from CSS, including the -rgb companion variables
// that let you compose translucent colors at any opacity.
export const Usage = () => {
  return (
    <>
      <VuiText>
        <p>
          Every theme color is published as a CSS custom property prefixed with <code>--vui-color-</code>. Reference one
          anywhere you write CSS with <code>var(...)</code>:
        </p>
      </VuiText>

      <VuiSpacer size="s" />

      <VuiText>
        <pre>
          <code>{`.myElement {\n  color: var(--vui-color-primary-shade);\n  border: 1px solid var(--vui-color-border-medium);\n}`}</code>
        </pre>
      </VuiText>

      <VuiSpacer size="m" />

      <VuiText>
        <p>
          Each color also has an <code>-rgb</code> companion that holds just the{" "}
          <code>r, g, b</code> channels. Pair it with <code>rgba()</code> to build a translucent color at any opacity:
        </p>
      </VuiText>

      <VuiSpacer size="s" />

      <VuiText>
        <pre>
          <code>{`.myElement {\n  background-color: rgba(var(--vui-color-primary-shade-rgb), 0.08);\n}`}</code>
        </pre>
      </VuiText>

      <VuiSpacer size="m" />

      <VuiTitle size="xs">
        <h4>Live example</h4>
      </VuiTitle>

      <VuiSpacer size="s" />

      <div
        style={{
          padding: 16,
          borderRadius: 8,
          color: "var(--vui-color-primary-shade)",
          backgroundColor: "rgba(var(--vui-color-primary-shade-rgb), 0.08)",
          border: "1px solid var(--vui-color-border-medium)"
        }}
      >
        This panel's text, background, and border are all driven by theme color variables, so it adapts automatically
        when the theme changes.
      </div>

      <VuiSpacer size="m" />

      <VuiText>
        <p>
          To change these values, pass a <code>theme</code> to <code>VuiContextProvider</code> — see the Theme page. The
          neutral, text, and border colors invert between the light and dark themes, so prefer the semantic name (for
          example <code>--vui-color-empty-shade</code>) over a literal lightness.
        </p>
      </VuiText>
    </>
  );
};
