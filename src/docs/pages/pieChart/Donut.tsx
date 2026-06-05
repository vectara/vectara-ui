import { VuiPieChart } from "../../../lib";

const data = [
  { plan: "Free", accounts: 5400 },
  { plan: "Pro", accounts: 2300 },
  { plan: "Scale", accounts: 820 },
  { plan: "Enterprise", accounts: 310 }
];

export const Donut = () => {
  return <VuiPieChart data={data} categoryKey="plan" valueKey="accounts" donut />;
};
