import { useEffect, useState } from "react";
import { VuiOptionsButton } from "../optionsButton/OptionsButton";
import { Props as OptionsButtonProps } from "../optionsButton/OptionsButton";
import { VuiIcon } from "../icon/Icon";
import { BiCheck, BiClipboard } from "react-icons/bi";
import { VuiButtonSecondary } from "../button/ButtonSecondary";

type Props = {
  value: string;
  options?: OptionsButtonProps["options"];
  size: OptionsButtonProps["size"];
  label?: string;
};

const sizeToIconSizeMap = {
  xs: "s",
  s: "s",
  m: "m",
  l: "m",
  xl: "m"
} as const;

export const VuiCopyButton = ({ value, options, label, size = "s" }: Props) => {
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

  return options === undefined || options.length === 0 ? (
    <VuiButtonSecondary
      size={size}
      icon={
        isCopied ? (
          <VuiIcon size={sizeToIconSizeMap[size]} color="success">
            <BiCheck />
          </VuiIcon>
        ) : (
          <VuiIcon size={sizeToIconSizeMap[size]}>
            <BiClipboard />
          </VuiIcon>
        )
      }
      color="neutral"
      onClick={() => {
        navigator.clipboard.writeText(value);
        setIsCopied(true);
      }}
    >
      {label}
    </VuiButtonSecondary>
  ) : (
    <VuiOptionsButton
      type="secondary"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      color="neutral"
      size={size}
      onClick={() => {
        navigator.clipboard.writeText(value);
        setIsCopied(true);
      }}
      onSelectOption={(value) => {
        navigator.clipboard.writeText(value);
        setIsCopied(true);
        setIsOpen(false);
      }}
      options={options || []}
    >
      {isCopied ? (
        <VuiIcon size={sizeToIconSizeMap[size]} color="success">
          <BiCheck />
        </VuiIcon>
      ) : (
        <VuiIcon size={sizeToIconSizeMap[size]}>
          <BiClipboard />
        </VuiIcon>
      )}
    </VuiOptionsButton>
  );
};
