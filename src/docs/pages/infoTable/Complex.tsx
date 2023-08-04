import { VuiInfoTable, VuiText, InfoTableRowType } from "../../../lib";

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

export const Complex = () => {
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
      type: "sectionHeader" as InfoTableRowType,
      values: {
        item: {
          render: renderCell("Standard", true),
          colSpan: 4
        }
      }
    },
    {
      values: {
        item: {
          render: renderCell("Base plan")
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
      type: "sectionHeader" as InfoTableRowType,
      values: {
        item: {
          render: renderCell("Miscellaneous", true),
          colSpan: 4
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
      values: {
        item: {
          render: renderCell("One-time fee"),
          colSpan: 3
        },
        cost: {
          render: renderCell("$1.00")
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
