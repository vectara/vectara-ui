export type RadioButtonConfig<T> = {
  label: React.ReactNode;
  description?: React.ReactNode;
  value: T;
  checked: boolean;
  disabled?: boolean;
  "data-testid"?: string;
};
