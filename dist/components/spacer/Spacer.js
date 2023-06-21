import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
const SIZE = ["xxs", "xs", "s", "m", "l", "xl", "xxl"];
export const VuiSpacer = ({ size = "m" }) => {
    const classes = classNames("vuiSpacer", { [`vuiSpacer--${size}`]: size });
    return _jsx("div", { className: classes });
};
