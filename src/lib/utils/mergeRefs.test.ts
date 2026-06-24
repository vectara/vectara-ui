import { createRef } from "react";
import { mergeRefs } from "./mergeRefs";

describe("mergeRefs", () => {
  it("assigns the node to a ref object", () => {
    const ref = createRef<string>();
    mergeRefs(ref)("node");
    expect(ref.current).toBe("node");
  });

  it("invokes a callback ref with the node", () => {
    const callback = jest.fn();
    mergeRefs<string>(callback)("node");
    expect(callback).toHaveBeenCalledWith("node");
  });

  it("updates every ref passed to it", () => {
    const objectRef = createRef<string>();
    const callback = jest.fn();
    mergeRefs<string>(objectRef, callback)("node");
    expect(objectRef.current).toBe("node");
    expect(callback).toHaveBeenCalledWith("node");
  });

  it("ignores null and undefined refs", () => {
    const ref = createRef<string>();
    expect(() => mergeRefs<string>(null, undefined, ref)("node")).not.toThrow();
    expect(ref.current).toBe("node");
  });

  it("forwards a null node on unmount", () => {
    const ref = createRef<string>();
    const merged = mergeRefs(ref);
    merged("node");
    merged(null);
    expect(ref.current).toBeNull();
  });
});
