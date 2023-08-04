import { VuiBadge, VuiInfoTable, VuiSpacer, VuiText, VuiTextColor, VuiTitle } from "../../../lib";

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
      render: "Price",
      width: "100px"
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
        <ul>
          <li>+1,000 queries</li>
          <li>+1,000 generative requests</li>
          <li>+5.0 MiB incremental account size</li>
          <li>+50.0 MiB incremental data ingest capacity</li>
        </ul>
      </VuiText>
    </>
  );
};
