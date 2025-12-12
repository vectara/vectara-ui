// Convert a string into a value that's safe to use as a data-testid attribute.
export const testIdify = (str?: string) => {
  if (!str) {
    return "";
  }
  return str.replace(/ /g, "-").replace(/[@.+]/g, "-");
};
