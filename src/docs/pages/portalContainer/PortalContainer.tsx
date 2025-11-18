import { LinkProps, VuiButtonPrimary, VuiContextProvider, VuiModal } from "../../../lib";
import { Link, useLocation } from "react-router-dom";
import { useRef, useState } from "react";

export const PortalContainer = () => {
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const linkProvider = (linkConfig: LinkProps) => {
    const { className, href, onClick, children, ...rest } = linkConfig;

    return (
      <Link className={className} to={href ?? ""} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  };

  const pathProvider = () => {
    return location.pathname;
  };

  return (
    <div ref={ref}>
      <VuiContextProvider linkProvider={linkProvider} pathProvider={pathProvider} portalContainer={ref.current!}>
        <VuiButtonPrimary color="primary" onClick={() => setOpen(true)}>
          Open modal inside custom portal container
        </VuiButtonPrimary>
        <VuiModal title="Portal Container Modal" isOpen={open} onClose={() => setOpen(false)}>
          This modal is rendered inside a custom portal container.
        </VuiModal>
      </VuiContextProvider>
    </div>
  );
};
