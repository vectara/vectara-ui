import { ErrorBoundary } from "./ErrorBoundary";

const ErrorBoundarySource = require("!!raw-loader!./ErrorBoundary");

export const errorBoundary = {
  name: "Error Boundary",
  path: "/errorBoundary",
  examples: [
    {
      component: <ErrorBoundary />,
      source: ErrorBoundarySource.default.toString()
    }
  ]
};
