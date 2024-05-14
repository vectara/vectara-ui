import { OptionListItem } from "../optionsList/types";

/**
 * The desired UX to is sort selected options to the top of the list.
 *
 * When there is an active async search, the list of options has already
 * been filtered, so we only want to show selected options that are in
 * the list of options. In this case, cache will NOT be provided.
 *
 * When the async search is not active, the list of options will consist
 * of the first few pages and might not contain any "searched" options
 * that have been selected. We need to show all selected options so we
 * use the cache to fill in any holes. In this case, cache will be provided.
 */
export const sortSelectedOptions = <T>(
  selectedOptions: T[],
  options: OptionListItem<T>[],
  cache?: Record<string, OptionListItem<T>>
) => {
  const comprehensiveOptions = options.concat();

  // Presence of cache indicates the async search is not active, and we
  // need to fill in any missing selected options from the cache.
  if (cache) {
    selectedOptions.forEach((selectedOption) => {
      if (!options.find(({ value }) => value === selectedOption)) {
        const cachedOption = cache[selectedOption as string];
        if (cachedOption) comprehensiveOptions.push(cachedOption);
      }
    });
  }

  const sortedOptions = comprehensiveOptions.sort((first, second) => {
    const isFirstSelected = selectedOptions.includes(first.value);
    const isSecondSelected = selectedOptions.includes(second.value);
    if (isFirstSelected && !isSecondSelected) {
      return -1;
    }

    if (!isFirstSelected && isSecondSelected) {
      return 1;
    }

    return 0;
  });

  return sortedOptions;
};
