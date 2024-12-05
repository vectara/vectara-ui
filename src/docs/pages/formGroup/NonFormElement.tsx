import { VuiCallout, VuiFormGroup } from "../../../lib";

export const NonFormElement = () => {
  return (
    <>
      <VuiFormGroup
        label="Enter text"
        labelFor="textArea"
        helpText="Enter some text here"
        errors={[
          "This is an error message.",
          "Here's a second validation error that you must address before submitting this form."
        ]}
      >
        <VuiCallout color="accent" headingElement="h4" title="This field isn't available right now." />
      </VuiFormGroup>
    </>
  );
};
