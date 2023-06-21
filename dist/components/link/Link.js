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
export const VuiLinkInternal = (_a) => {
    var rest = __rest(_a, []);
    return _jsx(VuiLink, Object.assign({}, rest, { track: true }));
};
export const VuiLink = (_a) => {
    var { children, href, target, onClick, className, track } = _a, rest = __rest(_a, ["children", "href", "target", "onClick", "className", "track"]);
    const props = Object.assign(Object.assign({}, rest), getTrackingProps(track));
    if (target === "_blank") {
        props.target = target;
    }
    return (_jsx(Link, Object.assign({ className: classNames("vuiLink", className), to: href, onClick: onClick }, props, { children: children })));
};
