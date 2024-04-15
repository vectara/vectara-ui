import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiLink } from "../link/Link";
import { VuiSpacer } from "../spacer/Spacer";
import { VuiText } from "../typography/Text";

type Stat = { name: string; value: React.ReactNode };

const VuiStat = ({ name, value }: Stat) => {
  return (
    <>
      <VuiFlexContainer alignItems="start" spacing="m">
        <VuiFlexItem grow={false} shrink={false} className="vuiStatName">
          <VuiText>
            <p>
              <strong>{name}</strong>
            </p>
          </VuiText>
        </VuiFlexItem>

        <VuiFlexItem grow={false}>
          <VuiText>
            <p>{value}</p>
          </VuiText>
        </VuiFlexItem>
      </VuiFlexContainer>
    </>
  );
};

type Props = {
  stats: Stat[];
};

export const VuiStatList = ({ stats }: Props) => {
  return (
    <>
      {stats.map(({ name, value }, index) => {
        const renderedValue =
          name === "url" || (typeof value === "string" && value.indexOf("http") === 0) ? (
            <VuiLink href={value as string} target="_blank">
              {value}
            </VuiLink>
          ) : (
            value
          );
        return (
          <>
            <VuiStat name={name} value={renderedValue} key={`${name}:${value}`} />
            {index < stats.length - 1 && <VuiSpacer size="s" />}
          </>
        );
      })}
    </>
  );
};
