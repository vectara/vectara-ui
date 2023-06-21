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
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { cloneElement, useCallback, useEffect, useRef, useState } from "react";
import { VuiPortal } from "../portal/Portal";
import { FocusOn } from "react-focus-on";
const getPosition = (button) => {
    if (!button)
        return undefined;
    const { bottom, right } = button.getBoundingClientRect();
    return {
        top: bottom - 1 + document.documentElement.scrollTop,
        right: window.innerWidth - right
    };
};
export const VuiPopover = (_a) => {
    var { button: originalButton, children, isOpen, setIsOpen } = _a, rest = __rest(_a, ["button", "children", "isOpen", "setIsOpen"]);
    const returnFocusElRef = useRef(null);
    const buttonRef = useRef(null);
    const [position, setPosition] = useState();
    const button = cloneElement(originalButton, {
        isPressed: isOpen,
        onClick: () => {
            setIsOpen(!isOpen);
        },
        ref: (node) => {
            buttonRef.current = node;
        }
    });
    const onResizeWindow = useCallback(() => {
        // Keep posiiton as up-to-date as possible. We'd like to do that only
        // when the popover is visible, but unfortunately we've formed a closure
        // over a stale and unchanging isOpen value. So for now we're stuck with
        // inefficiently updating this on every resize, for every popover, regardless
        // of whether it's visible or not. Eventually perhaps useEffectEvent will
        // address this once it's GA:
        // https://react.dev/learn/separating-events-from-effects
        setPosition(getPosition(buttonRef.current));
    }, []);
    useEffect(() => {
        window.addEventListener("resize", onResizeWindow);
        return () => {
            window.removeEventListener("resize", onResizeWindow);
        };
    }, []);
    useEffect(() => {
        var _a;
        if (isOpen) {
            // Keep posiiton as up-to-date as possible, but only when the popover is visible.
            setPosition(getPosition(buttonRef.current));
            returnFocusElRef.current = document.activeElement;
        }
        else {
            (_a = returnFocusElRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            returnFocusElRef.current = null;
        }
    }, [isOpen]);
    // Allow contents to respond to blur events before unmounting, and also
    // enable focus to properly return to the button when the user clicks
    // outside of the popover.
    const onCloseDelayed = () => {
        window.setTimeout(() => {
            setIsOpen(false);
        }, 0);
    };
    return (_jsxs(_Fragment, { children: [button, _jsx(VuiPortal, { children: isOpen && position && (_jsx(FocusOn, Object.assign({ onEscapeKey: onCloseDelayed, onClickOutside: onCloseDelayed, 
                    // Enable manual focus return to work.
                    returnFocus: false, 
                    // Enable focus on contents when it's open,
                    // but enable manual focus return to work when it's closed.
                    autoFocus: isOpen, 
                    // Enable scrolling of the page.
                    scrollLock: false, 
                    // Enable scrolling of the page.
                    preventScrollOnFocus: false }, { children: _jsx("div", Object.assign({ className: "vuiPopover", style: { top: `${position.top}px`, right: `${position.right}px` } }, rest, { children: children })) }))) })] }));
};
