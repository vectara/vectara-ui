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
import { Link } from "react-router-dom";
export const VuiTab = (_a) => {
    var { children, className, to, onClick, isActive = false } = _a, rest = __rest(_a, ["children", "className", "to", "onClick", "isActive"]);
    const classes = classNames(className, "vuiTab", {
        "vuiTab-isActive": isActive
    });
    return (_jsx(Link, Object.assign({ className: classes, to: to, onClick: onClick }, rest, { children: children })));
};
