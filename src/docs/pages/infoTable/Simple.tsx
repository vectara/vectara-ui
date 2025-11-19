import { useState } from "react";
import { VuiButtonPrimary, VuiInfoTable, VuiSelect, VuiSpacer, VuiText, VuiTextColor, VuiToggle } from "../../../lib";

const alignOptions = [
  { text: "Top", value: "top" },
  { text: "Middle", value: "middle" },
  { text: "Bottom", value: "bottom" }
];

const renderItem = ({ title, description }: { title: string; description: string }) => (
  <>
    <VuiText>
      <p>
        <strong>{title}</strong>
      </p>
    </VuiText>

    <VuiText>
      <p>
        <VuiTextColor color="subdued">{description}</VuiTextColor>
      </p>
    </VuiText>
  </>
);

const renderConsumption = ({ amount, limit, unit }: { amount: number; limit: number; unit: string }) => (
  <>
    <VuiText>
      <p>
        {amount} of {limit} {unit}
      </p>
    </VuiText>

    <VuiText>
      <p>
        <VuiTextColor color="subdued">{(amount / limit) * 100}%</VuiTextColor>
      </p>
    </VuiText>
  </>
);

export const Simple = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [align, setAlign] = useState<"top" | "middle" | "bottom">("middle");

  const columns = [
    {
      name: "item",
      render: "Resource"
    },
    {
      name: "consumption",
      render: "Consumption",
      width: "200px"
    },
    {
      name: "report",
      render: "",
      width: "100px"
    }
  ];

  const rows = [
    {
      values: {
        item: {
          render: renderItem({
            title: "Account size",
            description: "Aggregate size of all corpora after indexing, before any replication factor is applied."
          })
        },
        consumption: { render: renderConsumption({ amount: 0, limit: 50, unit: "MiB" }) },
        report: {
          render: (
            <VuiButtonPrimary color="primary" size="s">
              Report
            </VuiButtonPrimary>
          )
        }
      }
    },
    {
      values: {
        item: {
          render: renderItem({
            title: "Queries",
            description: "Number of queries that can be issued per month for the account."
          })
        },
        consumption: { render: renderConsumption({ amount: 0, limit: 15000, unit: "queries" }) },
        report: {
          render: (
            <VuiButtonPrimary color="primary" size="s">
              Report
            </VuiButtonPrimary>
          )
        }
      }
    },
    {
      values: {
        item: {
          render: renderItem({
            title: "Generative requests",
            description:
              "Number of requests for generative responses, like summarizations, that can be issued per month for the account."
          })
        },
        consumption: { render: renderConsumption({ amount: 14999, limit: 15000, unit: "requests" }) },
        report: {
          render: (
            <VuiButtonPrimary color="primary" size="s">
              Report
            </VuiButtonPrimary>
          )
        }
      }
    },
    {
      values: {
        item: {
          render: renderItem({
            title: "Data ingest",
            description: "Aggregate amount of ingested data."
          })
        },
        consumption: { render: renderConsumption({ amount: 0, limit: 500, unit: "MiB" }) },
        report: {
          render: (
            <VuiButtonPrimary color="primary" size="s">
              Report
            </VuiButtonPrimary>
          )
        }
      }
    }
  ];

  return (
    <>
      <VuiSelect
        id="alignOptions"
        options={alignOptions}
        value={align}
        onChange={(event) => setAlign(event.target.value as "top" | "middle" | "bottom")}
      />

      <VuiSpacer size="m" />

      <VuiToggle label="Has header" checked={isHeaderVisible} onChange={(e) => setIsHeaderVisible(e.target.checked)} />
      <VuiSpacer size="xl" />
      <VuiInfoTable columns={columns} rows={rows} padding="s" isHeaderVisible={isHeaderVisible} align={align} />
    </>
  );
};
