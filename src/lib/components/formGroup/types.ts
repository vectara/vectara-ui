export type FormGroupProps = {
  label?: string;
  labelRightContent: React.ReactNode;
  labelFor?: string;
  labelSize: "s" | "xs";
  isRequired?: boolean;
  helpText: React.ReactNode;
  ariaDescribedByLabel: string;
  errorMessages?: JSX.Element[];
  content: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
};
