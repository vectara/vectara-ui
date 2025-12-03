// These attributes improve the accessibility of overlay components like modals and dialogs.
export const getOverlayProps = (titleElementId: string) => {
  return {
    role: "dialog",
    "aria-labelledby": titleElementId,
    "aria-modal": true
  };
};
