import { ChangeEventHandler, FormEventHandler } from "react";
import classNames from "classnames";
import { VuiIconButton } from "../button/IconButton";
import { BiX } from "react-icons/bi";
import { VuiIcon } from "../icon/Icon";

const SIZE = ["m", "l"] as const;

type Props = {
  className?: string;
  value?: string;
  size?: (typeof SIZE)[number];
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  autoFocus?: boolean;
  onSubmit?: FormEventHandler;
};

type ClearableProps =
  | {
      isClearable?: true;
      onClear: () => void;
    }
  | {
      isClearable?: false;
      onClear?: never;
    };

export const VuiSearchInput = ({
  className,
  size = "m",
  value,
  onChange,
  placeholder,
  autoFocus,
  onSubmit,
  isClearable,
  onClear,
  ...rest
}: Props & ClearableProps) => {
  const classes = classNames("vuiSearchInput", `vuiSearchInput--${size}`, className);
  return (
    <form onSubmit={onSubmit}>
      <div className={classes}>
        <input
          className="vuiSearchInput__input"
          type="text"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck="false"
          autoFocus={autoFocus}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...rest}
        />
        {isClearable && value && (
          <VuiIconButton
            aria-label="Clear input"
            className="vuiSearchInput__clearButton"
            icon={
              <VuiIcon>
                <BiX />
              </VuiIcon>
            }
            onClick={(e) => {
              e.preventDefault();
              onClear();
            }}
          />
        )}
      </div>
    </form>
  );
};
