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
import { forwardRef } from "react";
import classNames from "classnames";
import { VuiTitle } from "../typography/Title";
import { VuiLink } from "../link/Link";
import { VuiSpacer } from "../spacer/Spacer";
import { VuiText } from "../typography/Text";
import { VuiTextColor } from "../typography/TextColor";
const highlightUrl = (url, text) => `${url}#:~:text=${text}`;
export const VuiSearchResult = forwardRef((_a, ref) => {
    var { result, position, isSelected, subTitle, children, className, snippetProps } = _a, rest = __rest(_a, ["result", "position", "isSelected", "subTitle", "children", "className", "snippetProps"]);
    const { title, url, date, snippet: { pre, post, text } } = result;
    // Protect users' privacy in FullStory.
    // https://help.fullstory.com/hc/en-us/articles/360020623574-How-do-I-protect-my-users-privacy-in-FullStory-#01F5DPW1AJHZHR8TBM9YQEDRMH
    const classes = classNames("vuiSearchResult", "fs-mask", className);
    const positionClasses = classNames("vuiSearchResultPosition", {
        "vuiSearchResultPosition--selected": isSelected
    });
    return (_jsxs("div", Object.assign({ className: classes, ref: ref }, rest, { children: [_jsx("div", Object.assign({ className: positionClasses }, { children: position })), (title || url) && (_jsx(VuiTitle, Object.assign({ size: "s" }, { children: url ? (_jsx(VuiLink, Object.assign({ href: highlightUrl(url, text), target: "_blank" }, { children: _jsx("h3", { children: title !== null && title !== void 0 ? title : url }) }))) : (_jsx("h3", { children: title })) }))), subTitle && (_jsxs(_Fragment, { children: [title && _jsx(VuiSpacer, { size: "xs" }), subTitle] })), _jsx(VuiText, Object.assign({}, snippetProps, { size: "s" }, { children: _jsxs("p", { children: [date && _jsxs(VuiTextColor, Object.assign({ color: "subdued" }, { children: [date, " \u2014 "] })), pre, " ", _jsx("strong", { children: text }), " ", post] }) })), children && (_jsxs(_Fragment, { children: [_jsx(VuiSpacer, { size: "s" }), children] }))] })));
});
