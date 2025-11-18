import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useVuiContext } from "../context/Context";

type Props = {
  children: ReactNode;
};

export const VuiPortal = ({ children }: Props) => {
  // Initialize ref synchronously during the first render, ensuring portalRef.current
  // is immediately available for createPortal.
  const portalRef = useRef<HTMLDivElement>(document.createElement("div"));
  const { portalContainer } = useVuiContext();

  useEffect(() => {
    if (!portalContainer) return;

    portalContainer.appendChild(portalRef.current);

    return () => {
      portalRef.current.parentNode?.removeChild(portalRef.current);
    };
  }, [portalContainer]);

  return createPortal(children, portalRef.current);
};
