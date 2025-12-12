import { testIdify } from "./testIdify";

describe("testIdify", () => {
  test("replaces spaces with dashes", () => {
    expect(testIdify("selectPromptTemplateButton-Custom prompt template-1.0")).toBe(
      "selectPromptTemplateButton-Custom-prompt-template-1-0"
    );
  });

  test("replaces @ . and + with dashes", () => {
    expect(testIdify("user@example.com+tag")).toBe("user-example-com-tag");
  });

  test("handles multiple special characters", () => {
    expect(testIdify("prompt@vectara.com + settings")).toBe("prompt-vectara-com---settings");
  });
});
