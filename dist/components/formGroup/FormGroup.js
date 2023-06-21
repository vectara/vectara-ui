import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { cloneElement } from "react";
import { VuiLabel } from "../form/label/Label";
import { VuiSpacer } from "../spacer/Spacer";
import { VuiText } from "../typography/Text";
import { VuiTextColor } from "../typography/TextColor";
export const VuiFormGroup = ({ children, labelFor, helpText, label }) => {
    const ariaProps = {};
    if (helpText) {
        ariaProps["aria-describedby"] = `${label}-help`;
    }
    const content = cloneElement(children, Object.assign({}, ariaProps));
    return (_jsxs(_Fragment, { children: [_jsx(VuiLabel, Object.assign({ labelFor: labelFor }, { children: label })), _jsx(VuiSpacer, { size: "xs" }), content, helpText && (_jsxs(_Fragment, { children: [_jsx(VuiSpacer, { size: "xs" }), _jsx(VuiText, Object.assign({ size: "xs", id: `${label}-help` }, { children: _jsx("p", { children: _jsx(VuiTextColor, Object.assign({ color: "subdued" }, { children: helpText })) }) }))] }))] }));
};
