import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
import { cloneElement } from "react";
import { IconContext } from "react-icons";
const COLOR = ["inherit", "accent", "primary", "success", "warning", "danger", "subdued", "normal", "empty"];
const SIZE = ["s", "m", "l", "xl", "xxl"];
const sizeToValueMap = {
    s: "16",
    m: "20",
    l: "28",
    xl: "46",
    xxl: "68"
};
export const VuiIcon = ({ children, size = "m", color = "inherit", className }) => {
    const classes = classNames(className, "vuiIcon__inner", {
        [`vuiIcon--${color}`]: color
    });
    const icon = cloneElement(children, {
        size: sizeToValueMap[size]
    });
    return (_jsx(IconContext.Provider, Object.assign({ value: { className: classes } }, { children: _jsx("div", Object.assign({ className: "vuiIcon" }, { children: icon })) })));
};
