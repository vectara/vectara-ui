import { Prompt } from "./Prompt";
const PromptSource = require("!!raw-loader!./Prompt");

export const prompt = {
  name: "Prompt",
  path: "/prompt",
  example: {
    component: <Prompt />,
    source: PromptSource.default.toString()
  }
};
