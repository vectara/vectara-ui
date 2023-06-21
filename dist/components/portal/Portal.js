import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
export const VuiPortal = ({ children }) => {
    const portalRef = useRef(null);
    useEffect(() => {
        portalRef.current = document.createElement("div");
        document.body.appendChild(portalRef.current);
        return () => {
            var _a, _b;
            (_b = (_a = portalRef.current) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(portalRef.current);
        };
    }, []);
    if (!portalRef.current)
        return null;
    return createPortal(children, portalRef.current);
};
