<script lang="ts">
  import { page } from '$app/stores';
  import { AppShell } from '@skeletonlabs/skeleton';
  import '@skeletonlabs/skeleton/styles/skeleton.css';
  import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

  import '../styles/app.postcss';
  import Header from './Header.svelte';
  import Transition from './Transition.svelte';
  import BlogSideToc from './blog/SideToc.svelte';
  import BlogSidenav from './blog/Sidenav.svelte';

  export let data;

  $: showSidenavs = $page.url.pathname.includes('/blog/');
</script>

<AppShell slotSidebarLeft="w-0 md:w-64" slotSidebarRight="w-0 lg:w-64">
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

  <Transition url={data.url}>
    <slot />
  </Transition>
</AppShell>
