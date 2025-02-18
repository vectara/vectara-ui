import copy from "copy-to-clipboard";

export const copyToClipboard = async (value: string) => {
  try {
    // Some older browsers don't support navigator.clipboard.writeText and there are
    // other cases where it might not be available, e.g. over an http connection.
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard?.writeText?.(value);
    } else {
      copy(value);
    }
  } catch (error) {
    console.error("Failed to copy to clipboard with error:\n", error, `Tried to copy: ${value}\n`);
    throw error;
  }
};
