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
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
export const VuiToggle = (_a) => {
    var { checked, onChange, label } = _a, rest = __rest(_a, ["checked", "onChange", "label"]);
    return (_jsxs(VuiFlexContainer, Object.assign({ alignItems: "center", spacing: "s" }, { children: [_jsx(VuiFlexItem, Object.assign({ grow: false }, { children: _jsxs("label", Object.assign({ className: "vuiToggle" }, { children: [_jsx("input", Object.assign({ className: "vuiToggle__input", type: "checkbox", checked: checked, onChange: onChange }, rest)), _jsx("span", { className: "vuiToggle__button" })] })) })), label && _jsx(VuiFlexItem, Object.assign({ grow: false }, { children: label }))] })));
};
