<script lang="ts">
  import scrollama from 'scrollama';
  import { onMount, type Snippet } from 'svelte';

  interface Props {
    backdrops: Snippet;
    overlays: Snippet;
  }

  let backdrop: HTMLElement;
  let overlayContainer: HTMLDivElement;

  let { backdrops, overlays }: Props = $props();
  const _backdrops = new Map<string, Element>();
  let _overlays: Element[] = [];

  const scroller = scrollama();

  onMount(() => {
    [...backdrop.children].forEach((element) => {
      _backdrops.set(element.id, element);
    });
    _overlays = [...overlayContainer.children];
    setBackdrop([..._backdrops.values()][0]);

    scroller
      .setup({
        step: _overlays as HTMLElement[],
        progress: true, // TODO: only if it's using it
      })
      .onStepEnter(onStepEnter)
      .onStepExit(onStepExit)
      .onStepProgress(onStepProgress);
  });

  function onStepEnter(stepCallback: scrollama.CallbackResponse) {
    const { element } = stepCallback;
    const activeBackdrop = _backdrops.get(element.getAttribute('data-scroller-backdrop') as string);
    if (activeBackdrop) {
      setBackdrop(activeBackdrop);
    }
    element.dispatchEvent(new CustomEvent('stepenter', { detail: stepCallback }));
  }

  function onStepExit(stepCallback: scrollama.CallbackResponse) {
    const { element } = stepCallback;
    element.dispatchEvent(new CustomEvent('stepexit', { detail: stepCallback }));
  }

  function onStepProgress(progressCallback: scrollama.ProgressCallbackResponse) {
    const { element } = progressCallback;
    element.dispatchEvent(new CustomEvent('stepprogress', { detail: progressCallback }));
  }

  function setBackdrop(element: Element) {
    // TODO: refactor scroller to avoid needing to manipulate DOM
    /* eslint-disable svelte/no-dom-manipulating */
    backdrop.innerHTML = '';
    backdrop.appendChild(element);
    /* eslint-enable svelte/no-dom-manipulating */
  }
</script>

<div class="scroller">
  <div class="scroller-backdrop" bind:this={backdrop}>
    {@render backdrops()}
  </div>
  <div class="scroller-overlays" bind:this={overlayContainer}>
    {@render overlays()}
  </div>
</div>

<style lang="scss">
  .scroller {
    $header-height: 75px;

    position: relative;
    width: 100vw;

    &-backdrop {
      position: sticky;
      top: $header-height;
      height: calc(100vh - $header-height);
      width: 100%;
      overflow: hidden;

      > :global(*),
      /* Handles enhanced images (which need to be wrapped in a containing element) */
      > :global(* > picture > img) {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    &-overlays {
      width: 100%;
      min-height: 100vh;
      margin-top: -100vh;
      // fixes a safari z-index bug where some overlays go behind the backdrop
      transform: translate3d(0, 0, 0);
      // lets you interact with the backdrop
      pointer-events: none;
    }
  }
</style>
