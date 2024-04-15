import { useState } from "react";
import { VuiLink, VuiPasswordInput, VuiSpacer } from "../../../lib";

export const PasswordInput = () => {
  const [value, setValue] = useState<string | undefined>();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <>
      <VuiPasswordInput
        id="passwordInput"
        autoComplete={false}
        name="password"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onSubmit={() => alert("Submit")}
        isPasswordVisible={isPasswordVisible}
      />

      <VuiSpacer size="xs" />

      <VuiLink onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
        {isPasswordVisible ? "Hide" : "Show"} password
      </VuiLink>
    </>
  );
};
