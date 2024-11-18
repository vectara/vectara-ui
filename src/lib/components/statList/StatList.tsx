import { Fragment } from "react";
import classNames from "classnames";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiLink } from "../link/Link";
import { VuiSpacer } from "../spacer/Spacer";

type Stat = { name: string; value: React.ReactNode };

const VuiStat = ({ name, value }: Stat) => {
  return (
    <>
      <VuiFlexContainer alignItems="start" spacing="m">
        <VuiFlexItem grow={false} shrink={false} className="vuiStatName">
          <strong>{name}</strong>
        </VuiFlexItem>

        <VuiFlexItem grow={false}>{value}</VuiFlexItem>
      </VuiFlexContainer>
    </>
  );
};

type Props = {
  stats: Stat[];
  size?: "xs" | "s";
  className?: string;
};

export const VuiStatList = ({ stats, size = "s", className, ...rest }: Props) => {
  const classes = classNames(`vuiStatList--size-${size}`, className);

  return (
    <div className={classes} {...rest}>
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
          <Fragment key={name}>
            <VuiStat name={name} value={renderedValue} key={`${name}:${value}`} />
            {index < stats.length - 1 && <VuiSpacer size={size === "s" ? "s" : "xxs"} />}
          </Fragment>
        );
      })}
    </div>
  );
};
