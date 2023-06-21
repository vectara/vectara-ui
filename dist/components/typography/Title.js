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
import classNames from "classnames";
import { cloneElement } from "react";
const SIZE = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
const TEXT_ALIGN = ["left", "center", "right"];
export const VuiTitle = (_a) => {
    var { children, className, size, align = "left" } = _a, rest = __rest(_a, ["children", "className", "size", "align"]);
    return cloneElement(children, Object.assign({ className: classNames("vuiTitle", `vuiTitle--${size}`, `vuiTitle--${align}`, className, children.props.className) }, rest));
};
