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
import { VuiIcon } from "../icon/Icon";
import { BiCheck } from "react-icons/bi";
export const VuiOptionsListItem = (_a) => {
    var { value, children, isSelectable, isSelected, onClick } = _a, rest = __rest(_a, ["value", "children", "isSelectable", "isSelected", "onClick"]);
    return (_jsx("button", Object.assign({ className: "vuiOptionsListItem", onClick: () => onClick(value) }, rest, { children: _jsxs(VuiFlexContainer, Object.assign({ alignItems: "center", spacing: "xs" }, { children: [isSelectable && (_jsx(VuiFlexItem, Object.assign({ grow: false }, { children: _jsx(VuiIcon, Object.assign({ className: isSelected ? "" : "vuiOptionsListItem__selected--unselected", color: "accent", size: "s" }, { children: _jsx(BiCheck, {}) })) }))), _jsxs(VuiFlexItem, Object.assign({ grow: false }, { children: [" ", children] }))] })) })));
};
