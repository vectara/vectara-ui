import { useState } from "react";
import { VuiButtonPrimary, VuiCallout, VuiErrorBoundary, VuiText } from "../../../lib";

const BuggyComponent = ({ shouldThrowError }: { shouldThrowError: boolean }) => {
  // Error boundaries only catch errors thrown during the React lifecycle, e.g. renders.
  if (shouldThrowError) {
    throw new Error("This is a simulated error from a child component.");
  }

  return <></>;
};

export const ErrorBoundary = () => {
  const [shouldThrowError, setShouldThrowError] = useState(false);

  return (
    <VuiErrorBoundary
      fallback={
        <VuiCallout color="danger" title="Part of the application has crashed" headingElement="h3">
          <VuiText>
            <p>
              You can continue using the application, but this particular part of the application isn't working
              properly.
            </p>
          </VuiText>
        </VuiCallout>
      }
    >
      <BuggyComponent shouldThrowError={shouldThrowError} />

      <VuiButtonPrimary color="danger" onClick={() => setShouldThrowError(true)}>
        Trigger error
      </VuiButtonPrimary>
    </VuiErrorBoundary>
  );
};
