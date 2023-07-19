<script>
  import { page } from '$app/stores';
  import { TableOfContents } from '@skeletonlabs/skeleton';
</script>

<!-- https://github.com/skeletonlabs/skeleton/issues/1666#issuecomment-1590534033 -->
{#key $page.url.pathname}
  <TableOfContents target="article" class="p-4" />
{/key}
