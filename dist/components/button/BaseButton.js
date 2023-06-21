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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { getTrackingProps } from "../../utils/getTrackingProps";
const SIZE = ["xs", "s", "m"];
export const BaseButton = (_a) => {
    var { children, ref, icon, iconSide = "left", className, size, fullWidth, onClick, href, target, track } = _a, rest = __rest(_a, ["children", "ref", "icon", "iconSide", "className", "size", "fullWidth", "onClick", "href", "target", "track"]);
    const classes = classNames("vuiBaseButton", className, `vuiBaseButton--${size}`, {
        "vuiBaseButton--fullWidth": fullWidth,
        [`vuiBaseButton--${iconSide}`]: Boolean(icon)
    });
    const props = Object.assign({ onClick }, rest);
    const iconContainer = icon ? _jsx("span", Object.assign({ className: "vuiBaseButtonIconContainer" }, { children: icon })) : null;
    if (href) {
        return (_jsx(Link, Object.assign({ className: "vuiBaseButtonLinkWrapper", to: href, target: target }, rest, getTrackingProps(track), { children: _jsxs("button", Object.assign({ className: classes, tabIndex: -1, ref: ref }, { children: [iconContainer, children] })) })));
    }
    return (
    // @ts-expect-error HTMLButtonElement conflict with HTMLAnchorElement
    _jsxs("button", Object.assign({ className: classes }, props, { ref: ref }, { children: [iconContainer, children] })));
};
