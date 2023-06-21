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
import { getTrackingProps } from "../../utils/getTrackingProps";
const COLOR = ["accent", "primary", "danger", "success", "normal"];
export const VuiBadge = (_a) => {
    var { children, className, color, onClick, href, target, track } = _a, rest = __rest(_a, ["children", "className", "color", "onClick", "href", "target", "track"]);
    const classes = classNames(className, "vuiBadge", `vuiBadge--${color}`, {
        "vuiBadge--clickable": onClick !== null && onClick !== void 0 ? onClick : href
    });
    if (onClick) {
        return (_jsx("button", Object.assign({ className: classes, onClick: onClick }, rest, { children: children })));
    }
    if (href) {
        return (_jsx(Link, Object.assign({ className: classes, onClick: onClick, to: href }, getTrackingProps(track), { children: children })));
    }
    return (_jsx("div", Object.assign({ className: classes }, rest, { children: children })));
};
