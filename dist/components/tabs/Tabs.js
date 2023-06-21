import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from "classnames";
const SIZE = ["s", "m"];
export const VuiTabs = ({ children, className, append, size = "s" }) => {
    const classes = classNames(className, "vuiTabs", `vuiTabs--${size}`);
    return (_jsxs("div", Object.assign({ className: classes }, { children: [_jsx("div", Object.assign({ className: "vuiTabs__tabs" }, { children: children })), append && _jsx("div", Object.assign({ className: "vuiTabs__appendedContent" }, { children: append }))] })));
};
