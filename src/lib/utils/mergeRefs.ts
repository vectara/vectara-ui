import { MutableRefObject, Ref } from "react";

// Combine several refs into a single callback ref so one element can satisfy
// multiple consumers, e.g. a parent's ref and a component's own internal ref.
export const mergeRefs = <T>(...refs: Array<Ref<T> | undefined>): ((node: T | null) => void) => {
  return (node: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        (ref as MutableRefObject<T | null>).current = node;
      }
    });
  };
};
