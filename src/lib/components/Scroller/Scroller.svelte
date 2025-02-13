<!-- @migration-task Error while migrating Svelte code: This migration would change the name of a slot making the component unusable -->
<script lang="ts">
  import scrollama from 'scrollama';
  import { onMount } from 'svelte';

  let backdrop: Element;
  let overlayContainer: HTMLDivElement;

  const backdrops = new Map<string, Element>();
  let overlays: Element[] = [];

  const scroller = scrollama();

  onMount(() => {
    [...backdrop.children].forEach((element: Element) => {
      backdrops.set(element.id, element);
    });
    overlays = [...overlayContainer.children] as Element[];
    setBackdrop([...backdrops.values()][0]);

    scroller
      .setup({
        step: overlays as HTMLElement[],
        progress: true, // TODO: only if it's using it
      })
      .onStepEnter(onStepEnter)
      .onStepExit(onStepExit)
      .onStepProgress(onStepProgress);
  });

  function onStepEnter(stepCallback: scrollama.CallbackResponse) {
    const { element } = stepCallback;
    const activeBackdrop = backdrops.get(element.getAttribute('data-scroller-backdrop') as string);
    if (activeBackdrop) {
      setBackdrop(activeBackdrop);
    }
    element.dispatchEvent(new CustomEvent('stepEnter', { detail: stepCallback }));
  }

  function onStepExit(stepCallback: scrollama.CallbackResponse) {
    const { element } = stepCallback;
    element.dispatchEvent(new CustomEvent('stepExit', { detail: stepCallback }));
  }

  function onStepProgress(progressCallback: scrollama.ProgressCallbackResponse) {
    const { element } = progressCallback;
    element.dispatchEvent(new CustomEvent('stepProgress', { detail: progressCallback }));
  }

  function setBackdrop(element: Element) {
    backdrop.innerHTML = '';
    backdrop.appendChild(element);
  }
</script>

<div class="scroller">
  <div class="scroller-backdrop" bind:this={backdrop}>
    <slot name="backdrops" />
  </div>
  <div class="scroller-overlays" bind:this={overlayContainer}>
    <slot name="overlays" />
  </div>
</div>

<style lang="scss">
  .scroller {
    position: relative;
    width: 100vw;

    &-backdrop {
      position: sticky;
      top: 0;
      height: calc(100vh - 75px); // TODO: dynamic based on nav bar height
      width: 100%;
      overflow: hidden;

      > :global(*) {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }

    &-overlays {
      width: 100%;
      min-height: 100vh;
      margin-top: -100vh; // TODO: be able to explain this
      // fixes a safari z-index bug where some overlays go behind the backdrop
      transform: translate3d(0, 0, 0);
      // lets you interact with the backdrop
      pointer-events: none;
    }
  }
</style>
