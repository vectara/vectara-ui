import { useState } from "react";
import { VuiCode, VuiToggle, VuiFlexContainer, VuiFlexItem, VuiSpacer } from "../../../lib";

const code = `function greetUser(name) {
  console.log('Hello, ' + name + '!');
  return 'Welcome to our application';
}

const user = 'Alice';
const message = greetUser(user);`;

export const DisabledFeatures = () => {
  const [isCopyEnabled, setIsCopyEnabled] = useState(true);
  const [isFullscreenEnabled, setIsFullscreenEnabled] = useState(true);

  return (
    <>
      <VuiFlexContainer alignItems="center" spacing="m">
        <VuiFlexItem>
          <VuiToggle
            checked={isCopyEnabled}
            onChange={(e) => setIsCopyEnabled(e.target.checked)}
            label="Enable copy button"
          />
        </VuiFlexItem>
        <VuiFlexItem>
          <VuiToggle
            checked={isFullscreenEnabled}
            onChange={(e) => setIsFullscreenEnabled(e.target.checked)}
            label="Enable fullscreen button"
          />
        </VuiFlexItem>
      </VuiFlexContainer>

      <VuiSpacer size="m" />

      <VuiCode 
        language="js" 
        isCopyEnabled={isCopyEnabled}
        isFullscreenEnabled={isFullscreenEnabled}
      >
        {code}
      </VuiCode>
    </>
  );
};