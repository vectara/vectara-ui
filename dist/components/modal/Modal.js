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
import { useEffect, useRef } from "react";
import classNames from "classnames";
import { FocusOn } from "react-focus-on";
import { VuiFlexContainer } from "../flex/FlexContainer";
import { VuiFlexItem } from "../flex/FlexItem";
import { VuiButtonIcon } from "../button/ButtonIcon";
import { VuiIcon } from "../icon/Icon";
import { BiX } from "react-icons/bi";
import { VuiPortal } from "../portal/Portal";
import { VuiScreenBlock } from "../screenBlock/ScreenBlock";
const COLOR = ["primary", "danger"];
export const VuiModal = (_a) => {
    var { className, color = "primary", title, children, isOpen, onClose } = _a, rest = __rest(_a, ["className", "color", "title", "children", "isOpen", "onClose"]);
    const returnFocusElRef = useRef(null);
    // Return focus on unmount.
    useEffect(() => {
        var _a;
        if (isOpen) {
            returnFocusElRef.current = document.activeElement;
        }
        else {
            (_a = returnFocusElRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            returnFocusElRef.current = null;
        }
    }, [isOpen]);
    // Allow contents to respond to blur events before unmounting.
    const onCloseDelayed = () => {
        window.setTimeout(() => {
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }, 0);
    };
    const classes = classNames("vuiModal", `vuiModal--${color}`, className);
    return (_jsx(VuiPortal, { children: isOpen && (_jsx(VuiScreenBlock, { children: _jsx(FocusOn, Object.assign({ onEscapeKey: onCloseDelayed, onClickOutside: onCloseDelayed, 
                // Enable manual focus return to work.
                returnFocus: false, 
                // Enable focus on contents when it's open,
                // but enable manual focus return to work when it's closed.
                autoFocus: isOpen }, { children: _jsx("div", Object.assign({ className: "vuiModalContainer" }, { children: _jsxs("div", Object.assign({ className: classes }, rest, { children: [_jsx("div", Object.assign({ className: "vuiModalHeader" }, { children: _jsxs(VuiFlexContainer, Object.assign({ justifyContent: "spaceBetween", alignItems: "center" }, { children: [_jsx(VuiFlexItem, Object.assign({ grow: false }, { children: title })), onClose && (_jsx(VuiFlexItem, { children: _jsx(VuiButtonIcon, { onClick: onCloseDelayed, color: "normal", icon: _jsx(VuiIcon, Object.assign({ size: "m", color: "normal" }, { children: _jsx(BiX, {}) })) }) }))] })) })), _jsx("div", Object.assign({ className: "vuiModalContent" }, { children: _jsx("div", Object.assign({ className: "vuiModalContent__inner" }, { children: children })) }))] })) })) })) })) }));
};
