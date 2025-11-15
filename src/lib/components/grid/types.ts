export type ResponsiveGridValue<T> =
  | T
  | {
      default?: T; // fallback value that applies when no breakpoint matches
      sm?: T; // applies from 0px up
      md?: T; // > 500px container width
      lg?: T; // > 800px container width
    };