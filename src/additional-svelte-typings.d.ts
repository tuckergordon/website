declare namespace svelteHTML {
  // enhance attributes
  interface HTMLAttributes {
    'on:stepEnter'?: (event: CustomEvent) => void;
    'on:stepExit'?: (event: CustomEvent) => void;
    'on:stepProgress'?: (event: CustomEvent) => void;
  }
}
