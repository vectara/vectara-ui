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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
import { VuiSpacer } from "../spacer/Spacer";
import { VuiText } from "../typography/Text";
import { VuiTextColor } from "../typography/TextColor";
import { Link } from "react-router-dom";
export const VuiMenuItem = (_a) => {
    var { className, title, text, href, onClick } = _a, rest = __rest(_a, ["className", "title", "text", "href", "onClick"]);
    const classes = classNames(className, "vuiMenuItem");
    const props = Object.assign({ className: classes, onClick }, rest);
    const content = (_jsxs(_Fragment, { children: [_jsx(VuiText, { children: _jsx("p", { children: title }) }), _jsx(VuiSpacer, { size: "xxs" }), _jsx(VuiText, Object.assign({ size: "xs" }, { children: _jsx(VuiTextColor, Object.assign({ color: "subdued" }, { children: _jsx("p", { children: text }) })) }))] }));
    if (href)
        return (_jsx(Link, Object.assign({ to: href }, props, { children: content })));
    return _jsx("button", Object.assign({}, props, { children: content }));
};
