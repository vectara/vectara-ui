var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { cloneElement, forwardRef } from "react";
import classNames from "classnames";
import { BaseButton } from "./BaseButton";
const COLOR = ["accent", "primary", "danger", "warning", "normal"];
const colorToIconColorMap = {
    accent: "accent",
    primary: "primary",
    danger: "danger",
    warning: "warning",
    normal: "normal"
};
export const VuiButtonTertiary = forwardRef((_a, ref) => {
    var { children, icon, color, size = "m", className, fullWidth } = _a, rest = __rest(_a, ["children", "icon", "color", "size", "className", "fullWidth"]);
    const classes = classNames(className, "vuiButtonTertiary", `vuiButtonTertiary--${color}`, `vuiButtonTertiary--${size}`);
    const styledIcon = icon
        ? cloneElement(icon, {
            size: 18,
            color: colorToIconColorMap[color]
        })
        : null;
    return (_jsx(BaseButton, Object.assign({ ref: ref, className: classes, icon: styledIcon, size: size, fullWidth: fullWidth }, rest, { children: children })));
});
