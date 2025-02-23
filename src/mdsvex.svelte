<script lang="ts" module>
  import { code, img } from '$lib/components/custom-mdsvex';

  export { code, img };
</script>

<script lang="ts">
  let props = $props();
</script>

{@render props.children?.()}
