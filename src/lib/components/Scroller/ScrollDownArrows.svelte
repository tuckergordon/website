<script lang="ts">
  import type { SvelteHTMLElements } from 'svelte/elements';

  let props: SvelteHTMLElements['div'] = $props();
</script>

<div {...props} class={['scroll-down-arrows', props.class]}>
  <span class="arrow"></span>
  <span class="arrow"></span>
  <span class="arrow"></span>
</div>

<style lang="scss">
  .scroll-down-arrows {
    display: block;
    position: relative;
  }

  .arrow {
    position: absolute;
    left: 50%;
    width: 1em;
    height: 1em;
    margin-left: 0.5em;
    border-left: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    transform: rotate(-45deg);
    animation: bounce 2s infinite;
    opacity: 0;

    &:nth-of-type(1) {
      animation-delay: 0s;
    }
    &:nth-of-type(2) {
      top: 1em;
      animation-delay: 0.15s;
    }
    &:nth-of-type(3) {
      top: 2em;
      animation-delay: 0.3s;
    }
  }

  @keyframes bounce {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
