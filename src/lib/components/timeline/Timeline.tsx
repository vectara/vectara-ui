import classNames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
  spacing?: "none" | "s" | "m" | "l";
};

export const VuiTimeline = ({ children, spacing = "m" }: Props) => {
  const childrenCount = React.Children.count(children);
  const wrappedChildren = React.Children.map(children, (child, index) => {
    const isLast = index === childrenCount - 1;
    const classes = classNames("vuiTimelineContainer", `vuiTimelineContainer--spacing-${spacing}`, {
      "vuiTimelineContainer--bordered": !isLast
    });
    return <div className={classes}>{child}</div>;
  });

  return <>{wrappedChildren}</>;
};
