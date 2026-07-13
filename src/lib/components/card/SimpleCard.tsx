import classNames from "classnames";
import { ReactNode, MouseEvent } from "react";
import { useVuiContext } from "../context/Context";
import { VuiLoadingBar } from "../loadingBar/LoadingBar";
import { VuiSpacer } from "../spacer/Spacer";
import { VuiStatus } from "../status/Status";

type Props = {
  className?: string;
  fullHeight?: boolean;
  href?: string;
  onClick?: (e: MouseEvent) => void;
  padding?: "s" | "m" | "l";
  children?: React.ReactNode;
  error?: string | ReactNode;
  warning?: string | ReactNode;
  isLoading?: boolean;
  loadingIndicator?: ReactNode;
};

export const VuiSimpleCard = ({
  href,
  className,
  fullHeight,
  padding = "s",
  children,
  onClick,
  error,
  warning,
  isLoading,
  loadingIndicator,
  ...rest
}: Props) => {
  const { createLink } = useVuiContext();

  const classes = classNames(
    "vuiSimpleCard",
    `vuiSimpleCard--${padding}`,
    {
      "vuiSimpleCard--interactive": href || onClick,
      "vuiSimpleCard--fullHeight": fullHeight,
      "vuiSimpleCard--danger": error,
      "vuiSimpleCard--warning": warning,
      "vuiSimpleCard--loading": isLoading
    },
    className
  );

  const content = (
    <>
      {children}
      {isLoading && (loadingIndicator ?? <VuiLoadingBar />)}
      {error && (
        <>
          <VuiSpacer size="s" />
          {typeof error === "string" ? <VuiStatus status="error" label={error} /> : error}
        </>
      )}
      {warning && (
        <>
          <VuiSpacer size="s" />
          {typeof warning === "string" ? <VuiStatus status="warning" label={warning} /> : warning}
        </>
      )}
    </>
  );

  if (href) {
    return createLink({
      className: classes,
      href,
      onClick,
      children: content,
      "aria-busy": isLoading,
      ...rest
    });
  }

  if (onClick) {
    return (
      <button className={classes} onClick={onClick} aria-busy={isLoading} {...rest}>
        {content}
      </button>
    );
  }

  return (
    <div className={classes} onClick={onClick} aria-busy={isLoading} {...rest}>
      {content}
    </div>
  );
};
