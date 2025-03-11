<script>
  import { page } from '$app/state';
</script>

<!-- https://github.com/skeletonlabs/skeleton/issues/1666#issuecomment-1590534033 -->
{#key page.url.pathname}
  TODO: table of contents
  <!-- <TableOfContents
    target="article"
    class="p-4"
    text="light:text-primary-500"
    active="bg-primary-500 text-primary-contrast-500 hover:text-primary-500 dark:bg-surface-800 dark:text-secondary-500" /> -->
{/key}
