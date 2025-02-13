<!-- @migration-task Error while migrating Svelte code: $$props is used together with named props in a way that cannot be automatically migrated. -->
<script lang="ts">
  export let backdrop: string;
  export let justifyContent = 'center';
</script>

<div
  class="scroller-overlay"
  data-scroller-backdrop={backdrop}
  on:stepEnter
  on:stepExit
  on:stepProgress
  {...$$props}>
  <div class="scroller-overlay-content" style:justify-content={justifyContent}>
    <slot />
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
      // because the parent is set to none
      pointer-events: all;
    }

    &-content {
      display: flex;
      width: 100%;
    }
  }
</style>
