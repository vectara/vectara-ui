import { ButtonTypes } from "./examples/ButtonTypes";
import { TruncateString } from "./examples/TruncateString";

const ButtonTypesSource = require("!!raw-loader!./examples/ButtonTypes");
const TruncateStringSource = require("!!raw-loader!./examples/TruncateString");

type Section = { name: string; items: Page[] };
type Page = { name: string; path: string; examples: Example[] };
type Example = { name: string; component: React.ReactNode; source: string };

export const sections: Section[] = [
  {
    name: "Components",
    items: [
      {
        name: "Buttons",
        path: "/buttons",
        examples: [
          {
            name: "Button types",
            component: <ButtonTypes />,
            source: ButtonTypesSource.default.toString()
          }
        ]
      }
    ]
  },
  {
    name: "Utils",
    items: [
      {
        name: "Truncate string",
        path: "/truncate",
        examples: [
          {
            name: "Placeholder",
            component: <TruncateString />,
            source: TruncateStringSource.default.toString()
          }
        ]
      }
    ]
  }
];

export const pathToExampleMap: Record<string, Page> = sections.reduce((acc, curr) => {
  const mappedPaths = curr.items.reduce(
    (obj, { path, name, examples }) => ({ ...obj, [path]: { name, examples } }),
    {}
  );
  return { ...acc, ...mappedPaths };
}, {});
