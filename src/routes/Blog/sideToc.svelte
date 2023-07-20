<script>
  import { page } from '$app/stores';
  import { TableOfContents } from '@skeletonlabs/skeleton';
</script>

<!-- https://github.com/skeletonlabs/skeleton/issues/1666#issuecomment-1590534033 -->
{#key $page.url.pathname}
  <TableOfContents
    target="article"
    class="p-4"
    text="light:text-primary-500"
    active="bg-primary-500 text-on-primary-token hover:text-primary-500 dark:bg-surface-800 dark:text-secondary-500" />
{/key}
