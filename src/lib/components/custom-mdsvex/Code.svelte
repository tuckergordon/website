<!-- Used to override the default <code> in mdsvex.
 Adds the `code` class that skeleton UI requires -->
<script lang="ts">
  let props = $props();
</script>

<code {...props} class={['code', props.class]}>
  {@render props.children?.()}
</code>
