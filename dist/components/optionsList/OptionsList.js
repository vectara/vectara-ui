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
import { VuiText } from "../typography/Text";
import { VuiTextColor } from "../typography/TextColor";
import { VuiOptionsListItem } from "./OptionsListItem";
export const VuiOptionsList = (_a) => {
    var { options, onSelectOption, selectedOption, isSelectable = false } = _a, rest = __rest(_a, ["options", "onSelectOption", "selectedOption", "isSelectable"]);
    return (_jsx("div", Object.assign({ className: "vuiOptionsList" }, rest, { children: options.map(({ value, label, color = "normal" }) => (_jsx(VuiOptionsListItem, Object.assign({ value: value, onClick: onSelectOption, isSelectable: isSelectable, isSelected: value === selectedOption }, { children: _jsx(VuiText, { children: _jsx(VuiTextColor, Object.assign({ color: color }, { children: _jsx("p", { children: label }) })) }) }), value))) })));
};
