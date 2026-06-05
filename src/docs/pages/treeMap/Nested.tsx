import { VuiTreeMap } from "../../../lib";

// The same base categories and relative sizes as the Basic example. Each category's value is split
// across eight nested subcategories so the parents sum to the same totals, keeping their ratios identical.
const data = [
  {
    name: "Documentation",
    children: [
      { name: "Documentation 1", value: 826 },
      { name: "Documentation 2", value: 689 },
      { name: "Documentation 3", value: 620 },
      { name: "Documentation 4", value: 551 },
      { name: "Documentation 5", value: 482 },
      { name: "Documentation 6", value: 413 },
      { name: "Documentation 7", value: 344 },
      { name: "Documentation 8", value: 275 }
    ]
  },
  {
    name: "Blog",
    children: [
      { name: "Blog 1", value: 413 },
      { name: "Blog 2", value: 344 },
      { name: "Blog 3", value: 310 },
      { name: "Blog 4", value: 275 },
      { name: "Blog 5", value: 241 },
      { name: "Blog 6", value: 207 },
      { name: "Blog 7", value: 172 },
      { name: "Blog 8", value: 138 }
    ]
  },
  {
    name: "Support tickets",
    children: [
      { name: "Support tickets 1", value: 285 },
      { name: "Support tickets 2", value: 238 },
      { name: "Support tickets 3", value: 214 },
      { name: "Support tickets 4", value: 190 },
      { name: "Support tickets 5", value: 166 },
      { name: "Support tickets 6", value: 143 },
      { name: "Support tickets 7", value: 119 },
      { name: "Support tickets 8", value: 95 }
    ]
  },
  {
    name: "Forums",
    children: [
      { name: "Forums 1", value: 193 },
      { name: "Forums 2", value: 161 },
      { name: "Forums 3", value: 145 },
      { name: "Forums 4", value: 129 },
      { name: "Forums 5", value: 112 },
      { name: "Forums 6", value: 96 },
      { name: "Forums 7", value: 80 },
      { name: "Forums 8", value: 64 }
    ]
  },
  {
    name: "Release notes",
    children: [
      { name: "Release notes 1", value: 122 },
      { name: "Release notes 2", value: 102 },
      { name: "Release notes 3", value: 91 },
      { name: "Release notes 4", value: 81 },
      { name: "Release notes 5", value: 71 },
      { name: "Release notes 6", value: 61 },
      { name: "Release notes 7", value: 51 },
      { name: "Release notes 8", value: 41 }
    ]
  },
  {
    name: "Changelog",
    children: [
      { name: "Changelog 1", value: 67 },
      { name: "Changelog 2", value: 56 },
      { name: "Changelog 3", value: 50 },
      { name: "Changelog 4", value: 45 },
      { name: "Changelog 5", value: 39 },
      { name: "Changelog 6", value: 33 },
      { name: "Changelog 7", value: 28 },
      { name: "Changelog 8", value: 22 }
    ]
  }
];

export const Nested = () => {
  return <VuiTreeMap data={data} categoryKey="name" valueKey="value" childrenKey="children" height={440} />;
};
