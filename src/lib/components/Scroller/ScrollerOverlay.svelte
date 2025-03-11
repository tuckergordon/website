<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';

  type Props = SvelteHTMLElements['div'] & {
    backdrop: string;
    contentProps?: SvelteHTMLElements['div'];
    onstepenter?: (event: CustomEvent) => void;
    onstepexit?: (event: CustomEvent) => void;
    onstepprogress?: (event: CustomEvent) => void;
  };

  let {
    backdrop,
    children,
    contentProps,
    onstepenter,
    onstepexit,
    onstepprogress,
    ...rest
  }: Props = $props();
</script>

<div
  class="scroller-overlay"
  data-scroller-backdrop={backdrop}
  {onstepenter}
  {onstepexit}
  {onstepprogress}
  {...rest}>
  <div class="scroller-overlay-content" {...contentProps}>
    {@render children?.()}
  </div>
</div>

<style lang="scss">
  .scroller-overlay {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 0px 30px;

    & > * {
      /* Because the parent is set to none */
      pointer-events: all;
    }

    &-content {
      display: flex;
      width: 100%;
    }
  }
</style>
