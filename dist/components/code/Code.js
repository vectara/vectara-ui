import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BiClipboard } from "react-icons/bi";
import { VuiButtonIcon } from "../button/ButtonIcon";
import { VuiIcon } from "../icon/Icon";
export const VuiCode = ({ onCopy, children = "" }) => {
    return (_jsxs("div", Object.assign({ className: "vuiCodeContainer" }, { children: [_jsx("pre", Object.assign({ className: "vuiCode" }, { children: _jsx("code", { children: children }) })), _jsx(VuiButtonIcon, { color: "normal", icon: _jsx(VuiIcon, { children: _jsx(BiClipboard, { size: 20 }) }), "aria-label": "Copy to clipboard", className: "vuiCodeCopyButton", onClick: () => {
                    navigator.clipboard.writeText(children);
                    if (onCopy)
                        onCopy();
                } })] })));
};
