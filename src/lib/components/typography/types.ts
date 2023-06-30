export const TEXT_COLOR = ["accent", "primary", "success", "warning", "danger", "subdued", "normal"] as const;
export type TextColor = (typeof TEXT_COLOR)[number];
