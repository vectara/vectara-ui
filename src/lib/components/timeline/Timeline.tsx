import classNames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const VuiTimeline = ({ children }: Props) => {
  const childrenCount = React.Children.count(children);
  const wrappedChildren = React.Children.map(children, (child, index) => {
    const isLast = index === childrenCount - 1;
    const classes = classNames("vuiTimelineContainer", { "vuiTimelineContainer--bordered": !isLast });
    return <div className={classes}>{child}</div>;
  });

  return <>{wrappedChildren}</>;
};
