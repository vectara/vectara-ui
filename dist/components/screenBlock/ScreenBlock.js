import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const VuiScreenBlock = ({ onClick, children }) => {
    return (_jsxs("div", Object.assign({ className: "vuiScreenBlock" }, { children: [children, _jsx("div", { className: "vuiScreenBlock__mask", onClick: onClick })] })));
};
