declare namespace svelteHTML {
  // enhance attributes
  interface HTMLAttributes {
    onstepenter?: (event: CustomEvent<CallbackResponse>) => void;
    onstepexit?: (event: CustomEvent<CallbackResponse>) => void;
    onstepprogress?: (event: CustomEvent<ProgressCallbackResponse>) => void;
  }
}
