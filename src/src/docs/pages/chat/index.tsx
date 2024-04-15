import { Chat } from "./Chat";
const ChatSource = require("!!raw-loader!./Chat");

export const chat = {
  name: "Chat",
  path: "/chat",
  examples: [
    {
      component: <Chat />,
      source: ChatSource.default.toString()
    }
  ]
};
