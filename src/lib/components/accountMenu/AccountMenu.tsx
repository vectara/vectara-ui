type Props = {
  children?: React.ReactNode;
};

export const VuiAccountMenu = ({ children }: Props) => {
  return (
    <>
      <div className="vuiAccounrMenuHeader"></div>

      {children}
    </>
  );
};
