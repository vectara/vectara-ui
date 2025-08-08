import * as React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
  onError?: (error: unknown, info: React.ErrorInfo) => void;
}

interface ErrorBoundaryState {
  error: unknown;
}

export class VuiErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error: unknown): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { error };
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo): void {
    console.log("caught error:", error, info);
    this.props.onError?.(error, info);
  }

  render() {
    if (this.state.error) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    // Access the children prop, which is now typed.
    return this.props.children;
  }
}
