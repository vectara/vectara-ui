import { sortSelectedOptions } from "./sortSelectedOptions";

describe("sortSelectedOptions", () => {
  describe("sync search use case", () => {
    test("returns the options as-is when nothing has been selected", () => {
      const selectedOptions: string[] = [];
      const options = [
        { value: "1", label: "One" },
        { value: "2", label: "Two" }
      ];

      expect(sortSelectedOptions(selectedOptions, options)).toEqual(options);
    });

    test("returns the selected options at the beginning of the list", () => {
      const selectedOptions = ["3", "2"];
      const options = [
        { value: "1", label: "One" },
        { value: "2", label: "Two" },
        { value: "3", label: "Three" }
      ];

      expect(sortSelectedOptions(selectedOptions, options)).toEqual([
        { value: "2", label: "Two" },
        { value: "3", label: "Three" },
        { value: "1", label: "One" }
      ]);
    });
  });

  describe("async search use case", () => {
    test("ignores missing selected options when cache isn't provided", () => {
      const selectedOptions = ["4", "3", "2"];
      const options = [
        { value: "1", label: "One" },
        { value: "2", label: "Two" },
        { value: "3", label: "Three" }
      ];

      expect(sortSelectedOptions(selectedOptions, options)).toEqual([
        { value: "2", label: "Two" },
        { value: "3", label: "Three" },
        { value: "1", label: "One" }
      ]);
    });

    test("fill in missing selected options when cache is provided", () => {
      const selectedOptions = ["4", "3", "2"];
      const options = [
        { value: "1", label: "One" },
        { value: "2", label: "Two" },
        { value: "3", label: "Three" }
      ];
      const cache = { 4: { value: "4", label: "Four" } };

      expect(sortSelectedOptions(selectedOptions, options, cache)).toEqual([
        { value: "2", label: "Two" },
        { value: "3", label: "Three" },
        { value: "4", label: "Four" },
        { value: "1", label: "One" }
      ]);
    });
  });
});
