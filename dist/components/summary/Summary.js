import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
import { VuiText } from "../typography/Text";
import { VuiSummaryCitation } from "./SummaryCitation";
import { extractCitations } from "./extractCitations";
const decorateSummary = (summary, onClickCitation, selectedCitationPosition) => {
    const citations = extractCitations(summary);
    return citations.reduce((accum, { text, references }, index) => {
        if (references) {
            accum.push(_jsx("span", { children: text }, `text${index}`));
            const marginBefore = text ? text[text.length - 1] !== " " : false;
            if (marginBefore) {
                accum.push(_jsx("span", { children: " " }, `spaceBefore${index}`));
            }
            references.forEach((reference, referenceIndex) => {
                var _a;
                if (referenceIndex > 0) {
                    accum.push(_jsx("span", { children: " " }, `spaceInner${index}-${referenceIndex}`));
                }
                const position = parseInt(reference, 10);
                accum.push(_jsx(VuiSummaryCitation, Object.assign({ marginBefore: false, marginAfter: false, onClick: () => onClickCitation && onClickCitation(position), isSelected: selectedCitationPosition === position }, { children: reference }), `${text}-${index}-${reference}-${referenceIndex}`));
                const followingCitation = citations[index + 1];
                const marginAfter = ![",", ".", "!", "?", ":", ";"].includes((_a = followingCitation === null || followingCitation === void 0 ? void 0 : followingCitation.text) === null || _a === void 0 ? void 0 : _a[0]);
                if (marginAfter) {
                    accum.push(_jsx("span", { children: " " }, `spaceAfter${position}`));
                }
            });
        }
        else {
            accum.push(_jsx("span", { children: text }, `text${text}${index}`));
        }
        return accum;
    }, []);
};
export const VuiSummary = ({ summary, selectedCitationPosition, onClickCitation, children, className }) => {
    let content;
    if (summary) {
        content = decorateSummary(summary, onClickCitation, selectedCitationPosition);
    }
    else {
        content = children;
    }
    // Protect users' privacy in FullStory.
    // https://help.fullstory.com/hc/en-us/articles/360020623574-How-do-I-protect-my-users-privacy-in-FullStory-#01F5DPW1AJHZHR8TBM9YQEDRMH
    const classes = classNames("vuiSummary", "fs-mask", className);
    return (_jsx("div", Object.assign({ className: classes }, { children: _jsx(VuiText, Object.assign({ size: "m" }, { children: content })) })));
};
