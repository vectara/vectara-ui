import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
import { VuiSpacer } from "../spacer/Spacer";
import { VuiTitle } from "../typography/Title";
import { VuiTextColor } from "../typography/TextColor";
import { VuiText } from "../typography/Text";
const COLOR = ["accent", "primary", "success", "warning", "danger"];
const SIZE = ["s", "m"];
const HEADING_ELEMENT = ["h1", "h2", "h3", "h4", "h5", "h6", "p"];
const sizeToTitleSizeMap = {
    s: "xxs",
    m: "s"
};
const sizeToSpacerSizeMap = {
    s: "xxs",
    m: "xs"
};
const sizeToContentSizeMap = {
    s: "xs",
    m: "s"
};
export const VuiCallout = ({ children, title, headingElement, color, size = "m" }) => {
    const classes = classNames("vuiCallout", `vuiCallout--${color}`, `vuiCallout--${size}`);
    const HeadingElement = headingElement;
    return (_jsxs("div", Object.assign({ className: classes }, { children: [_jsx(VuiTitle, Object.assign({ size: sizeToTitleSizeMap[size] }, { children: _jsx(HeadingElement, { children: _jsx(VuiTextColor, Object.assign({ color: color }, { children: title })) }) })), children && (_jsxs(_Fragment, { children: [_jsx(VuiSpacer, { size: sizeToSpacerSizeMap[size] }), _jsx(VuiText, Object.assign({ size: sizeToContentSizeMap[size] }, { children: children }))] }))] })));
};
