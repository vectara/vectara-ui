import { VuiInfoTable, VuiText, VuiTextColor } from "../../../lib";

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
  const columns = [
    {
      name: "item",
      render: "Resource"
    },
    {
      name: "consumption",
      render: "Consumption",
      width: "200px"
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
        consumption: { render: renderConsumption({ amount: 0, limit: 50, unit: "MiB" }) }
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
        consumption: { render: renderConsumption({ amount: 0, limit: 15000, unit: "queries" }) }
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
        consumption: { render: renderConsumption({ amount: 14999, limit: 15000, unit: "requests" }) }
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
        consumption: { render: renderConsumption({ amount: 0, limit: 500, unit: "MiB" }) }
      }
    }
  ];

  return <VuiInfoTable columns={columns} rows={rows} padding="s" isHeaderVisible />;
};
