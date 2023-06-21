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
import classNames from "classnames";
const GROW = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const VuiFlexItem = (_a) => {
    var { children, grow, className } = _a, rest = __rest(_a, ["children", "grow", "className"]);
    const isGrowNone = grow === false;
    const classes = classNames("vuiFlexItem", {
        [`vuiFlexItem--flexGrow${grow}`]: typeof grow === "number",
        "vuiFlexItem--flexGrowNone": isGrowNone
    }, className);
    return (_jsx("div", Object.assign({ className: classes }, rest, { children: children })));
};
