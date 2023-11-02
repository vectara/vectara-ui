type Props = {
  children?: React.ReactNode;
  className?: string;
  href: string;
};

export const VuiTopicButton = ({ children, className, href, ...rest }: Props) => {
  return (
    <a className="vuiTopicButton" href={href} {...rest}>
      {children}
    </a>
  );
};
