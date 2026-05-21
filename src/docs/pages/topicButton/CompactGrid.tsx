import { BiBook, BiData  } from "react-icons/bi";
import { VuiFlexContainer, VuiFlexItem, VuiIcon, VuiText, VuiTextColor, VuiTopicButton } from "../../../lib";

const templates = [
  { title: "Customer support", },
  { title: "Ingest agent", icon: <BiData /> },
  { title: "Tech knowledge", icon: <BiBook /> }
];

export const CompactGrid = () => {
  return (
    <VuiFlexContainer spacing="m">
      {templates.map((template) => (
        <VuiFlexItem key={template.title} grow={1}>
          <VuiTopicButton
            href="#"
            title={template.title}
            buttonStyle="compactGrid"
            icon={template.icon ? <VuiIcon color="primary">{template.icon}</VuiIcon> : undefined}
            fullWidth
          >
            <VuiText size="xs">
              <p>
                <VuiTextColor color="subdued">Use template to build agents</VuiTextColor>
              </p>
            </VuiText>
          </VuiTopicButton>
        </VuiFlexItem>
      ))}
    </VuiFlexContainer>
  );
};
