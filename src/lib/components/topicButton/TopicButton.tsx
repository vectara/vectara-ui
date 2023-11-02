import { VuiSpacer } from "../spacer/Spacer";
import { VuiTextColor } from "../typography/TextColor";
import { VuiTitle } from "../typography/Title";

type Props = {
  children?: React.ReactNode;
  className?: string;
  href: string;
  title?: string;
};

export const VuiTopicButton = ({ children, className, href, title, ...rest }: Props) => {
  return (
    <a className="vuiTopicButton" href={href} {...rest}>
      {title && (
        <>
          <VuiTitle size="s">
            <p>
              <VuiTextColor color="primary">{title}</VuiTextColor>
            </p>
          </VuiTitle>

          <VuiSpacer size="xxs" />
        </>
      )}

      {children}
    </a>
  );
};
