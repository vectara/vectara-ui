import { VuiInfoTable, VuiText, VuiTextColor, InfoTableRowType, VuiTitle, VuiSpacer } from "../../../lib";

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
            title: "Data storage",
            description: "Growth plan quota is 50 MiB. Each bundle increases the quota by 5 MiB."
          })
        },
        consumption: { render: renderConsumption({ amount: 0, limit: 50, unit: "MiB" }) }
      }
    },
    {
      values: {
        item: {
          render: renderItem({
            title: "Data ingest",
            description: "Growth plan quota is 500 MiB. Each bundle increases the quota by 50 MiB."
          })
        },
        consumption: { render: renderConsumption({ amount: 0, limit: 500, unit: "MiB" }) }
      }
    },
    {
      values: {
        item: {
          render: renderItem({
            title: "Queries",
            description: "Growth plan quota is 15,000 queries. Each bundle increases the quota by 1,000 queries."
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
              "Growth plan quota is 15,000 generative requests. Each bundle increases the quota by 1,000 requests."
          })
        },
        consumption: { render: renderConsumption({ amount: 14999, limit: 15000, unit: "requests" }) }
      }
    },
    {
      values: {
        item: {
          render: renderItem({
            title: "Corpora",
            description: "Growth plan quota is 25 corpora. Scale plan offers an increased quota."
          })
        },
        consumption: { render: renderConsumption({ amount: 62, limit: 25, unit: "corpora" }) }
      }
    },
    {
      values: {
        item: {
          render: renderItem({
            title: "Users",
            description: "Growth plan quota is 5 users. Scale plan offers an increased quota."
          })
        },
        consumption: { render: renderConsumption({ amount: 22, limit: 5, unit: "users" }) }
      }
    }
  ];

  return (
    <>
      <VuiTitle size="m">
        <h3>Period of 31-Jul-2023 to 03-Aug-2023</h3>
      </VuiTitle>
      <VuiSpacer size="m" />

      <VuiTitle size="s">
        <h3>Resource usage</h3>
      </VuiTitle>
      <VuiSpacer size="m" />

      <VuiInfoTable columns={columns} rows={rows} padding="s" isHeaderVisible />

      <VuiSpacer size="m" />
      <VuiTitle size="s">
        <h3>Charges</h3>
      </VuiTitle>
      <VuiSpacer size="m" />

      <Complex />
    </>
  );
};

const renderCell = (value: string, isEmphasized?: boolean) => {
  if (isEmphasized) {
    return (
      <>
        <VuiText>
          <p>
            <strong>{value}</strong>
          </p>
        </VuiText>
      </>
    );
  }
  return (
    <>
      <VuiText>
        <p>{value}</p>
      </VuiText>
    </>
  );
};

const Complex = () => {
  const columns = [
    {
      name: "item",
      render: "Item"
    },
    {
      name: "quantity",
      render: "Quantity",
      width: "80px"
    },
    {
      name: "unitPrice",
      render: "Unit price",
      width: "120px"
    },
    {
      name: "cost",
      render: "Cost",
      width: "120px"
    }
  ];

  const rows = [
    {
      values: {
        item: {
          render: renderCell("Growth plan")
        },
        quantity: {
          render: renderCell("1")
        },
        unitPrice: {
          render: renderCell("$0")
        },
        cost: {
          render: renderCell("$0")
        }
      }
    },
    {
      values: {
        item: {
          render: renderCell("Bundles")
        },
        quantity: {
          render: renderCell("2")
        },
        unitPrice: {
          render: renderCell("$1.25")
        },
        cost: {
          render: renderCell("$2.50")
        }
      }
    },
    {
      type: "footer" as InfoTableRowType,
      values: {
        item: {
          render: renderCell("Total cost", true),
          colSpan: 3
        },
        cost: {
          render: renderCell("$3.50", true)
        }
      }
    }
  ];

  return <VuiInfoTable columns={columns} rows={rows} padding="s" isHeaderVisible />;
};
