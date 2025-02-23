<script lang="ts" module>
  export { code, img } from '$lib/components/custom-mdsvex';
</script>

<script lang="ts">
  let props = $props();
</script>

{@render props.children?.()}
