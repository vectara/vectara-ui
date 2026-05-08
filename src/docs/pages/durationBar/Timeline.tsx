import { PROGRESS_BAR_COLOR, VuiDurationBar, VuiFlexContainer, VuiFlexItem, VuiText } from "../../../lib";

const WINDOW = 12480;

type Bar = {
  label: string;
  start: number;
  end: number;
  color: (typeof PROGRESS_BAR_COLOR)[number];
};

const bars: Bar[] = [
  { label: "12.48s", start: 0, end: 12480, color: "neutral" },
  { label: "1.85s", start: 0, end: 1850, color: "neutral" },
  { label: "3.20s", start: 1850, end: 5050, color: "neutral" },
  { label: "880ms", start: 5700, end: 6580, color: "neutral" },
  { label: "2.40s", start: 6200, end: 8600, color: "neutral" },
  { label: "80ms", start: 8700, end: 8780, color: "neutral" },
  { label: "3.20s", start: 8900, end: 12100, color: "neutral" },
  { label: "540ms", start: 11400, end: 11940, color: "neutral" }
];

export const Timeline = () => {
  return (
    <>
      {bars.map((bar) => (
        <VuiFlexContainer key={bar.label} alignItems="center" spacing="m">
          <VuiFlexItem grow={false} shrink={false}>
            <div style={{ width: 60, textAlign: "right" }}>
              <VuiText>
                <p>{bar.label}</p>
              </VuiText>
            </div>
          </VuiFlexItem>

          <VuiFlexItem grow={1}>
            <VuiDurationBar window={WINDOW} start={bar.start} end={bar.end} color={bar.color} />
          </VuiFlexItem>
        </VuiFlexContainer>
      ))}
    </>
  );
};
