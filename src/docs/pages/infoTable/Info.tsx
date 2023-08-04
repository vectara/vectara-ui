import {
  InfoTableRowType,
  VuiBadge,
  VuiFlexContainer,
  VuiFlexItem,
  VuiInfoTable,
  VuiSpacer,
  VuiText,
  VuiTextColor,
  VuiTitle
} from "../../../lib";
import { InfoTableColumnAlign } from "../../../lib/components/infoTable/InfoTable";

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

const renderConsumption = () => (
  <>
    <VuiBadge color="success">FREE</VuiBadge>
  </>
);

export const Info = () => {
  const columns = [
    {
      name: "item",
      render: "Resource quota"
    },
    {
      name: "consumption",
      width: "100px",
      align: "right" as InfoTableColumnAlign
    }
  ];

  const rows = [
    {
      values: {
        item: {
          render: renderItem({
            title: "50 MiB of data storage",
            description: "Aggregate size of all corpora after indexing, before any replication factor is applied."
          })
        },
        consumption: { render: renderConsumption() }
      }
    },
    {
      values: {
        item: {
          render: renderItem({
            title: "500 MiB of data ingest",
            description: "Aggregate amount of ingested data."
          })
        },
        consumption: { render: renderConsumption() }
      }
    },
    {
      values: {
        item: {
          render: renderItem({
            title: "15,000 queries",
            description: "Number of queries that can be issued per month for the account."
          })
        },
        consumption: { render: renderConsumption() }
      }
    },
    {
      values: {
        item: {
          render: renderItem({
            title: "15,000 generative requests",
            description:
              "Number of requests for generative responses, like summarizations, that can be issued per month for the account."
          })
        },
        consumption: { render: renderConsumption() }
      }
    }
  ];

  const bundleColumns = [
    {
      name: "item"
    }
  ];

  const bundleRows = [
    {
      type: "sectionHeader" as InfoTableRowType,
      values: {
        item: {
          render: (
            <VuiFlexContainer justifyContent="spaceBetween" alignItems="center">
              <VuiFlexItem shrink={false} grow={false}>
                <VuiText>
                  <p>
                    <strong>Bundle</strong>
                  </p>
                </VuiText>
              </VuiFlexItem>

              <VuiFlexItem shrink={false} grow={false}>
                <VuiBadge color="primary">$1.25</VuiBadge>
              </VuiFlexItem>
            </VuiFlexContainer>
          )
        }
      }
    },
    {
      values: {
        item: {
          render: (
            <VuiText>
              <p>
                <strong>+5 MiB</strong> data storage
              </p>
            </VuiText>
          )
        }
      }
    },
    {
      values: {
        item: {
          render: (
            <VuiText>
              <p>
                <strong>+50 MiB</strong> data ingest
              </p>
            </VuiText>
          )
        }
      }
    },
    {
      values: {
        item: {
          render: (
            <VuiText>
              <p>
                <strong>+1,000</strong> queries
              </p>
            </VuiText>
          )
        }
      }
    },
    {
      values: {
        item: {
          render: (
            <VuiText>
              <p>
                <strong>+1,000</strong> generative requests
              </p>
            </VuiText>
          )
        }
      }
    }
  ];

  return (
    <>
      <VuiTitle size="s">
        <h3>Monthly resource quotas</h3>
      </VuiTitle>
      <VuiSpacer size="m" />
      <VuiInfoTable columns={columns} rows={rows} padding="s" isHeaderVisible />

      <VuiSpacer size="m" />
      <VuiTitle size="s">
        <h3>Bundle increases</h3>
      </VuiTitle>
      <VuiSpacer size="m" />
      <VuiText>
        <p>
          When your account’s usage exceeds a monthly resource quota, we increase the quota by adding a bundle and
          charging it to your account. Each bundle increases the quota of all resources by a fixed amount:
        </p>
      </VuiText>
      <VuiSpacer size="s" />
      <VuiInfoTable columns={bundleColumns} rows={bundleRows} padding="xxs" />
    </>
  );
};
