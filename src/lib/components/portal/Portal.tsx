import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
};

export const VuiPortal = ({ children }: Props) => {
  // Initialize ref synchronously during the first render, ensuring portalRef.current
  // is immediately available for createPortal.
  const portalRef = useRef<HTMLDivElement>(document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(portalRef.current);

    return () => {
      portalRef.current.parentNode?.removeChild(portalRef.current);
    };
  }, []);

  return createPortal(children, portalRef.current);
};
