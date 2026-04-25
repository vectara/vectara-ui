export const TAB_SIZE = ["s", "m"] as const;
export type TabSize = (typeof TAB_SIZE)[number];
export type TabRoute = {
  href: string;
  title: React.ReactNode;
  render?: (tabLink: React.ReactNode) => React.ReactNode;
  testId?: string;
  isActive?: boolean;
};
