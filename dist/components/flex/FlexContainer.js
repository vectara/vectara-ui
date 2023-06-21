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
import { jsx as _jsx } from "react/jsx-runtime";
import classNames from "classnames";
const alignItemsToClassNameMap = {
    baseline: "vuiFlexContainer--alignItemsBaseline",
    center: "vuiFlexContainer--alignItemsCenter",
    end: "vuiFlexContainer--alignItemsEnd",
    start: "vuiFlexContainer--alignItemsStart",
    stretch: "vuiFlexContainer--alignItemsStretch"
};
const directionToClassNameMap = {
    column: "vuiFlexContainer--directionColumn",
    columnReverse: "vuiFlexContainer--directionColumnReverse",
    row: "vuiFlexContainer--directionRow",
    rowReverse: "vuiFlexContainer--directionRowReverse"
};
const justifyContentToClassNameMap = {
    center: "vuiFlexContainer--justifyContentCenter",
    end: "vuiFlexContainer--justifyContentEnd",
    start: "vuiFlexContainer--justifyContentStart",
    spaceAround: "vuiFlexContainer--justifyContentSpaceAround",
    spaceBetween: "vuiFlexContainer--justifyContentSpaceBetween",
    spaceEvenly: "vuiFlexContainer--justifyContentSpaceEvenly"
};
const spacingToClassNameMap = {
    none: "vuiFlexContainer--spacingNone",
    xxs: "vuiFlexContainer--spacingXxs",
    xs: "vuiFlexContainer--spacingXs",
    s: "vuiFlexContainer--spacingS",
    m: "vuiFlexContainer--spacingM",
    l: "vuiFlexContainer--spacingL",
    xl: "vuiFlexContainer--spacingXl"
};
export const VuiFlexContainer = (_a) => {
    var { children, alignItems = "stretch", direction = "row", justifyContent = "start", spacing = "m", wrap, className } = _a, rest = __rest(_a, ["children", "alignItems", "direction", "justifyContent", "spacing", "wrap", "className"]);
    const classes = classNames(className, "vuiFlexContainer", alignItemsToClassNameMap[alignItems], directionToClassNameMap[direction], justifyContentToClassNameMap[justifyContent], spacingToClassNameMap[spacing], {
        "vuiFlexContainer--wrap": wrap
    });
    return (_jsx("div", Object.assign({ className: classes }, rest, { children: children })));
};
