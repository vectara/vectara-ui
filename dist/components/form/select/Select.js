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
import { createElement as _createElement } from "react";
import classNames from "classnames";
import { VuiIcon } from "../../icon/Icon";
import { BiChevronDown } from "react-icons/bi";
const SIZE = ["m", "l"];
const sizeToIconSizeMap = {
    m: "m",
    l: "l"
};
export const VuiSelect = (_a) => {
    var { className, id, options, value, size = "m", onChange } = _a, rest = __rest(_a, ["className", "id", "options", "value", "size", "onChange"]);
    const classes = classNames("vuiSelect", `vuiSelect--${size}`, className);
    const renderedOptions = options.map((option, index) => {
        const { text } = option, rest = __rest(option, ["text"]);
        return (_createElement("option", Object.assign({}, rest, { key: index }), text));
    });
    return (_jsxs("div", Object.assign({ className: classes }, { children: [_jsx("select", Object.assign({ id: id, value: value, onChange: onChange }, rest, { children: renderedOptions })), _jsx("div", Object.assign({ className: "vuiSelect__caret" }, { children: _jsx(VuiIcon, Object.assign({ color: "subdued", size: sizeToIconSizeMap[size] }, { children: _jsx(BiChevronDown, {}) })) }))] })));
};
