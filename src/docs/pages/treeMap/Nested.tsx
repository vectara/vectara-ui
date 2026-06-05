import { VuiTreeMap } from "../../../lib";

// The same base categories and relative sizes as the Basic example. Each category's value is split
// across eight subcategories so the parents sum to the same totals, keeping their ratios identical.
const groups = [
  { name: "Documentation", total: 4200 },
  { name: "Blog", total: 2100 },
  { name: "Support tickets", total: 1450 },
  { name: "Forums", total: 980 },
  { name: "Release notes", total: 620 },
  { name: "Changelog", total: 340 }
];

// Arbitrary varied shares so the subcategories differ in size within each block.
const weights = [12, 10, 9, 8, 7, 6, 5, 4];
const weightTotal = weights.reduce((sum, weight) => sum + weight, 0);

const data = groups.map(({ name, total }) => {
  let allocated = 0;
  const children = weights.map((weight, index) => {
    const isLast = index === weights.length - 1;
    // Give the last child the remainder so the children sum exactly to the total.
    const value = isLast ? total - allocated : Math.round((total * weight) / weightTotal);
    allocated += value;
    return { name: `${name} ${index + 1}`, value };
  });
  return { name, children };
});

export const Nested = () => {
  return <VuiTreeMap data={data} categoryKey="name" valueKey="value" childrenKey="children" height={440} />;
};
