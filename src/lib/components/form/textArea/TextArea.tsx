import { forwardRef, useLayoutEffect, useRef } from "react";
import classNames from "classnames";

type Props = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
  fullWidth?: boolean;
  isInvalid?: boolean;
  resizable?: boolean;
  autoGrow?: boolean;
};

export const VuiTextArea = forwardRef<HTMLTextAreaElement | null, Props>(
  ({ className, fullWidth, isInvalid, resizable, autoGrow, ...rest }: Props, ref) => {
    const classes = classNames(
      "vuiTextArea",
      {
        "vuiTextArea-isInvalid": isInvalid,
        "vuiTextArea--fullWidth": fullWidth,
        "vuiTextArea--autoGrow": autoGrow
      },
      className
    );

    const style = {
      ...rest.style,
      resize: resizable ? "vertical" : "none"
    } as React.CSSProperties;

    const internalRef = useRef<HTMLTextAreaElement | null>(null);

    const setRefs = (el: HTMLTextAreaElement | null) => {
      internalRef.current = el;
      if (typeof ref === "function") ref(el);
      else if (ref) ref.current = el;
    };

    // Auto-grow the textarea to fit its content. Reset to "auto" first so
    // scrollHeight reflects the natural height after deletions, not the
    // previously-set inline height.
    useLayoutEffect(() => {
      if (!autoGrow) return;
      const el = internalRef.current;
      if (!el) return;
      el.style.height = "auto";
      // scrollHeight excludes borders, but with box-sizing: border-box the
      // assigned height includes them — without this offset the content would
      // overflow by the border width and show a spurious scrollbar.
      const borderY = el.offsetHeight - el.clientHeight;
      el.style.height = `${el.scrollHeight + borderY}px`;
    }, [autoGrow, rest.value]);

    return <textarea {...rest} ref={setRefs} className={classes} style={style} />;
  }
);
