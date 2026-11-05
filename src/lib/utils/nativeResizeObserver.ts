// Captured before Tooltip patches the global ResizeObserver with a debounce. The debounce
// starves callbacks while sizes change every frame, e.g. during a window resize.
export const NativeResizeObserver = window.ResizeObserver;
