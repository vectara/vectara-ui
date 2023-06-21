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
import { BiChat } from "react-icons/bi";
const SIZE = ["m", "l"];
export const VuiSearchInput = (_a) => {
    var { className, size = "m", value, onChange, placeholder, autoFocus, onSubmit } = _a, rest = __rest(_a, ["className", "size", "value", "onChange", "placeholder", "autoFocus", "onSubmit"]);
    const classes = classNames("vuiSearchInput", `vuiSearchInput--${size}`, className);
    return (_jsx("form", Object.assign({ onSubmit: onSubmit }, { children: _jsxs("div", Object.assign({ className: classes }, { children: [_jsx("input", Object.assign({ className: "vuiSearchInput__input", type: "text", autoComplete: "off", autoCapitalize: "off", spellCheck: "false", autoFocus: autoFocus, placeholder: placeholder, value: value, onChange: onChange }, rest)), _jsx("button", Object.assign({ className: "vuiSearchInput__submitButton", onClick: onSubmit }, { children: _jsx(BiChat, { size: "20px" }) }))] })) })));
};
