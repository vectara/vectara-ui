export const CALLOUT_COLOR = ["neutral", "primary", "danger", "success", "accent", "warning"] as const;
export const CALLOUT_SIZE = ["s", "m"] as const;
export type CalloutColor = (typeof CALLOUT_COLOR)[number];
