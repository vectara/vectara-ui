import { jsx as _jsx } from "react/jsx-runtime";
import { VuiButtonSecondary } from "../button/ButtonSecondary";
export const VuiSummaryCitation = ({ children, marginBefore, marginAfter, isSelected, onClick }) => {
    return (_jsx(VuiButtonSecondary, Object.assign({ color: "primary", size: "xs", className: "vuiSummaryCitation", onClick: onClick, isSelected: isSelected }, { children: children })));
};
