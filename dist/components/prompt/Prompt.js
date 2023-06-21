import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
const COLOR = ["danger", "normal"];
const paddingToClassNameMap = {
    xs: "vuiPrompt--paddingXs",
    s: "vuiPrompt--paddingS",
    m: "vuiPrompt--paddingM",
    l: "vuiPrompt--paddingL",
    xl: "vuiPrompt--paddingXl",
    xxl: "vuiPrompt--paddingXxl"
};
export const VuiPrompt = ({ children, className, onClick, color = "normal", padding = "l", isSpeechBubble }) => {
    const Component = onClick ? "button" : "div";
    const classes = classNames(className, "vuiPrompt", `vuiPrompt--${color}`, paddingToClassNameMap[padding], {
        "vuiPrompt--interactive": onClick !== undefined,
        "vuiPrompt--speechBubble": isSpeechBubble
    });
    return (_jsx(Component, Object.assign({ className: classes, onClick: onClick }, { children: children })));
};
