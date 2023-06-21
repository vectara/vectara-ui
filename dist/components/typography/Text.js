import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
const SIZE = ["xs", "s", "m", "l"];
const TEXT_ALIGN = ["left", "center", "right"];
export const VuiText = ({ children, className, id, size = "s", align = "left" }) => {
    const classes = classNames("vuiText", `vuiText--${size}`, `vuiText--${align}`, className);
    return (_jsx("div", Object.assign({ className: classes, id: id }, { children: children })));
};
