import { VuiCode, VuiInfoTable, VuiSpacer, VuiTitle, VuiText } from "../../lib";

export type PropInfo = {
  name: string;
  type: string;
  required?: boolean;
  default?: string;
  description: string;
};

export type ComponentApi = {
  name: string;
  props: PropInfo[];
};

type Props = {
  components: ComponentApi[];
};

export const Api = ({ components }: Props) => {
  const columns = [
    { name: "prop", render: "Prop", width: "150px" },
    { name: "type", render: "Type", width: "200px" },
    { name: "required", render: "Required", width: "80px" },
    { name: "default", render: "Default", width: "120px" },
    { name: "description", render: "Description" }
  ];

  return (
    <>
      <VuiTitle size="s">
        <h3>API</h3>
      </VuiTitle>

      <VuiSpacer size="m" />

      {components.map(({ name, props }) => {
        const rows = props.map((prop) => ({
          values: {
            prop: { render: <VuiCode language="tsx">{prop.name}</VuiCode> },
            type: { render: <VuiCode language="tsx">{prop.type}</VuiCode> },
            required: { render: <VuiText>{prop.required ? "Yes" : "No"}</VuiText> },
            default: {
              render: prop.default ? <VuiCode language="tsx">{prop.default}</VuiCode> : <VuiText>-</VuiText>
            },
            description: { render: <VuiText>{prop.description}</VuiText> }
          }
        }));

        return (
          <div key={name}>
            <VuiTitle size="xs">
              <h4>{name}</h4>
            </VuiTitle>

            <VuiSpacer size="s" />

            <VuiInfoTable columns={columns} rows={rows} isHeaderVisible padding="s" />

            <VuiSpacer size="l" />
          </div>
        );
      })}
    </>
  );
};
