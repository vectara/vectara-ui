import { TextColor } from "../typography/types";

export type OptionListItem = {
  value: string;
  label: string;
  href?: string;
  onClick?: (value: string) => void;
  color?: TextColor;
};
