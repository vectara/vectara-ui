import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
export const COLOR = ["accent", "primary", "success", "warning", "danger", "subdued", "normal"];
export const VuiTextColor = ({ children, color, className }) => {
    const classes = classNames(className, "vuiTextColor", `vuiTextColor--${color}`);
    return _jsx("span", Object.assign({ className: classes }, { children: children }));
};
