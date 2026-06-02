import { FileDropTarget } from "./FileDropTarget";
const FileDropTargetSource = require("!!raw-loader!./FileDropTarget");

export const fileDropTarget = {
  name: "File drop target",
  path: "/fileDropTarget",
  example: {
    component: <FileDropTarget />,
    source: FileDropTargetSource.default.toString()
  }
};
