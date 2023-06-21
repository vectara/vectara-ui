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
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { getTrackingProps } from "../../utils/getTrackingProps";
const COLOR = ["accent", "primary", "danger", "normal"];
export const VuiButtonIcon = forwardRef((_a, ref) => {
    var { className, icon, color = "primary", onClick, href, target, track } = _a, rest = __rest(_a, ["className", "icon", "color", "onClick", "href", "target", "track"]);
    const props = Object.assign({ className: classNames("vuiButtonIcon", className, `vuiButtonIcon--${color}`), onClick }, rest);
    if (href) {
        return (_jsx(Link, Object.assign({ to: href, target: target }, props, getTrackingProps(track), { children: _jsx("button", Object.assign({ ref: ref }, { children: icon })) })));
    }
    return (_jsx("button", Object.assign({}, props, { ref: ref }, { children: icon })));
});
