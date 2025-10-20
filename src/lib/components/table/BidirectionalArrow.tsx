type Props = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: string;
  title?: string;
};

export default function BidirectionalArrow({ size = 20, color = "currentColor", title, ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      stroke="none"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <polygon points="12,2 6,8 18,8" />
      <rect x="11" y="8" width="2" height="8" />
      <polygon points="12,22 6,16 18,16" />
    </svg>
  );
}
