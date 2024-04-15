import { VuiButtonPrimary } from "../../../lib";

export const Submit = () => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        alert("Form submitted");
      }}
    >
      <VuiButtonPrimary color="primary" isSubmit>
        Submit form
      </VuiButtonPrimary>
    </form>
  );
};
