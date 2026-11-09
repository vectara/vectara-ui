import { useEffect, useState } from "react";

// Tracks whether the viewport matches a CSS media query. Environments
// without matchMedia, such as jsdom, never match.
export const useMediaQuery = (query: string) => {
  const [isMatch, setIsMatch] = useState(() => window.matchMedia?.(query).matches ?? false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia?.(query);
    if (!mediaQueryList) return;

    const updateIsMatch = () => setIsMatch(mediaQueryList.matches);
    updateIsMatch();
    mediaQueryList.addEventListener("change", updateIsMatch);

    return () => mediaQueryList.removeEventListener("change", updateIsMatch);
  }, [query]);

  return isMatch;
};
