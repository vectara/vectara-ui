import { ButtonTypes } from "./examples/ButtonTypes";

export const pages = [
  {
    name: "Components",
    items: [
      {
        name: "Buttons",
        path: "/buttons",
        example: <ButtonTypes />
      }
    ]
  },
  {
    name: "Utils",
    items: [
      {
        name: "Truncate",
        path: "/truncate",
        example: <div />
      }
    ]
  }
];

export const pathToExampleMap: Record<string, React.ReactNode> = pages.reduce((acc, curr) => {
  const mappedPaths = curr.items.reduce((obj, { path, example }) => ({ ...obj, [path]: example }), {});
  return { ...acc, ...mappedPaths };
}, {});
