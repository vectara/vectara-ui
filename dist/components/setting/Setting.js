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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { VuiSpacer } from "../spacer/Spacer";
import { VuiText } from "../typography/Text";
import { VuiTextColor } from "../typography/TextColor";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiLink } from "../link/Link";
import { VuiBadge } from "../badge/Badge";
import { VuiToggle } from "../toggle/Toggle";
export const VuiSetting = (_a) => {
    var { title, label, badge, helpUrl, description, isEnabled, onToggle, children } = _a, rest = __rest(_a, ["title", "label", "badge", "helpUrl", "description", "isEnabled", "onToggle", "children"]);
    return (_jsxs(_Fragment, { children: [_jsxs(VuiFlexContainer, Object.assign({ justifyContent: "spaceBetween", alignItems: "center" }, { children: [_jsx(VuiFlexItem, Object.assign({ grow: false }, { children: _jsxs(VuiFlexContainer, Object.assign({ alignItems: "center", spacing: "xs" }, { children: [_jsx(VuiFlexItem, Object.assign({ grow: false }, { children: _jsx(VuiText, Object.assign({ size: "m" }, { children: _jsx("p", { children: title }) })) })), badge && (_jsx(VuiFlexItem, Object.assign({ grow: false }, { children: _jsx(VuiBadge, Object.assign({ color: "normal" }, { children: badge })) })))] })) })), helpUrl && (_jsx(VuiFlexItem, Object.assign({ grow: false }, { children: _jsx(VuiText, Object.assign({ size: "s" }, { children: _jsx("p", { children: _jsx(VuiLink, Object.assign({ href: helpUrl, target: "_blank" }, { children: "Learn more" })) }) })) })))] })), description && (_jsxs(_Fragment, { children: [_jsx(VuiSpacer, { size: "xxs" }), _jsx(VuiText, { children: _jsx(VuiTextColor, Object.assign({ color: "subdued" }, { children: _jsx("p", { children: description }) })) })] })), _jsx(VuiSpacer, { size: "xs" }), _jsx(VuiToggle, Object.assign({}, rest, { checked: isEnabled, label: label, onChange: onToggle })), isEnabled && children && (_jsxs(_Fragment, { children: [_jsx(VuiSpacer, { size: "s" }), children] }))] }));
};
