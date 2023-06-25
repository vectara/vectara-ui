type Props = {
  children: React.ReactNode;
};

export const VuiAppContent = ({ children }: Props) => {
  return <div className="vuiAppContent">{children}</div>;
};
