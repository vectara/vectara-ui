export const BUTTON_SIZE = ["xs", "s", "m"] as const;
export const BUTTON_COLOR = ["accent", "primary", "danger", "warning", "normal"] as const;
export type ButtonColor = (typeof BUTTON_COLOR)[number];
