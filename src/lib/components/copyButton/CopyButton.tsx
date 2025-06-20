import { useEffect, useState } from "react";
import { BiCheck, BiClipboard } from "react-icons/bi";
import { VuiOptionsButton } from "../optionsButton/OptionsButton";
import { Props as OptionsButtonProps } from "../optionsButton/OptionsButton";
import { VuiIcon } from "../icon/Icon";
import { VuiButtonSecondary } from "../button/ButtonSecondary";
import { copyToClipboard } from "../../utils/copyToClipboard";

type Props = {
  value: string;
  options?: OptionsButtonProps["options"];
  size: OptionsButtonProps["size"];
  label?: string;
  title?: string;
};

const sizeToIconSizeMap = {
  xs: "s",
  s: "s",
  m: "m",
  l: "m",
  xl: "m"
} as const;

export const VuiCopyButton = ({ value, options, label, size = "s", ...rest }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2400);

      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  const icon = isCopied ? (
    <VuiIcon size={sizeToIconSizeMap[size]} color="success">
      <BiCheck />
    </VuiIcon>
  ) : (
    <VuiIcon size={sizeToIconSizeMap[size]}>
      <BiClipboard />
    </VuiIcon>
  );

  const copy = async (copyValue = value) => {
    await copyToClipboard(copyValue);
    setIsCopied(true);
  };

  return options ? (
    <VuiOptionsButton
      type="secondary"
      icon={icon}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      color="neutral"
      size={size}
      onClickButton={(e) => {
        // Enable placing this button inside other buttons without triggering
        // the click event of the parent button.
        e.preventDefault();
        e.stopPropagation();
      }}
      onClick={(e) => {
        // Enable placing this button inside other buttons without triggering
        // the click event of the parent button.
        e.preventDefault();
        e.stopPropagation();
        copy();
      }}
      onSelectOption={(value) => {
        copy(value);
        setIsOpen(false);
      }}
      options={options}
      {...rest}
    >
      {label}
    </VuiOptionsButton>
  ) : (
    <VuiButtonSecondary
      size={size}
      icon={icon}
      color="neutral"
      onClick={(e) => {
        // Enable placing this button inside other buttons without triggering
        // the click event of the parent button.
        e.preventDefault();
        e.stopPropagation();
        copy(value);
      }}
      {...rest}
    >
      {label}
    </VuiButtonSecondary>
  );
};
