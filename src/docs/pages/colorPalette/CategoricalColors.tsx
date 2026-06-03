import { BiSolidBookmark } from "react-icons/bi";
import { VuiCopyButton, VuiFlexContainer, VuiFlexItem, VuiSpacer, VuiText, VuiTextColor } from "../../../lib";

// Categorical colors carry no fixed meaning — the hue just distinguishes one category from another.
// Each is a pair: a tinted background and a saturated foreground for text and icons.
const categoricalColors = [
  // Warm
  { name: "Red", background: "--vui-color-red-background", text: "--vui-color-red-text" },
  { name: "Orange", background: "--vui-color-orange-background", text: "--vui-color-orange-text" },
  { name: "Amber", background: "--vui-color-amber-background", text: "--vui-color-amber-text" },
  // Greens
  { name: "Lime", background: "--vui-color-lime-background", text: "--vui-color-lime-text" },
  { name: "Emerald", background: "--vui-color-emerald-background", text: "--vui-color-emerald-text" },
  { name: "Teal", background: "--vui-color-teal-background", text: "--vui-color-teal-text" },
  // Blues
  { name: "Sky", background: "--vui-color-sky-background", text: "--vui-color-sky-text" },
  { name: "Indigo", background: "--vui-color-indigo-background", text: "--vui-color-indigo-text" },
  // Purples and pinks
  { name: "Purple", background: "--vui-color-purple-background", text: "--vui-color-purple-text" },
  { name: "Fuchsia", background: "--vui-color-fuchsia-background", text: "--vui-color-fuchsia-text" },
  { name: "Pink", background: "--vui-color-pink-background", text: "--vui-color-pink-text" },
  // Neutral
  { name: "Slate", background: "--vui-color-slate-background", text: "--vui-color-slate-text" }
];

// A single CSS variable row: the variable name plus a button to copy its var() reference.
const VariableRow = ({ cssVariable }: { cssVariable: string }) => (
  <VuiFlexContainer alignItems="center" spacing="xs" justifyContent="spaceBetween">
    <VuiFlexItem grow={false}>
      <VuiText size="xs">
        <p>
          <code>{cssVariable}</code>
        </p>
      </VuiText>
    </VuiFlexItem>

    <VuiFlexItem grow={false}>
      <VuiCopyButton size="xs" value={`var(${cssVariable})`} title={`Copy var(${cssVariable})`} />
    </VuiFlexItem>
  </VuiFlexContainer>
);

export const CategoricalColors = () => {
  return (
    <>
      <VuiText>
        <p>
          <VuiTextColor color="subdued">
            Interchangeable hue pairs for color-coding categories. The icon inherits the foreground color via{" "}
            <code>currentColor</code>, so a patch only needs the background and text variables.
          </VuiTextColor>
        </p>
      </VuiText>

      <VuiSpacer size="l" />

      <VuiFlexContainer spacing="l" wrap>
        {categoricalColors.map(({ name, background, text }) => (
          <VuiFlexItem grow={false} key={name}>
            <div style={{ width: 220 }}>
              {/* A representative patch built from the pair. */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 10px",
                  borderRadius: 6,
                  fontSize: 13,
                  fontWeight: 600,
                  backgroundColor: `var(${background})`,
                  color: `var(${text})`
                }}
              >
                <BiSolidBookmark />
                {name}
              </div>

              <VuiSpacer size="s" />

              <VariableRow cssVariable={background} />
              <VariableRow cssVariable={text} />
            </div>
          </VuiFlexItem>
        ))}
      </VuiFlexContainer>
    </>
  );
};
