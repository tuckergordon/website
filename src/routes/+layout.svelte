<script lang="ts">
  import { page } from '$app/stores';
  import { AppShell } from '@skeletonlabs/skeleton';
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

  import '../styles/app.postcss';
  import BlogSideToc from './blog/sideToc.svelte';
  import BlogSidenav from './blog/sidenav.svelte';
  import Header from './header.svelte';

  $: showSidenavs = $page.url.pathname.includes('/blog/');
</script>

<AppShell>
  <svelte:fragment slot="header">
    <Header />
  </svelte:fragment>
  <svelte:fragment slot="sidebarLeft">
    {#if showSidenavs}
      <BlogSidenav />
    {/if}
  </svelte:fragment>
  <svelte:fragment slot="sidebarRight">
    {#if showSidenavs}
      <BlogSideToc />
    {/if}
  </svelte:fragment>

  <slot />
</AppShell>
