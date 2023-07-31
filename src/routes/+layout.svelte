<script lang="ts">
  import { page } from '$app/stores';
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
  import '@fontsource-variable/outfit';
  import { AppShell } from '@skeletonlabs/skeleton';
  import { storePopup } from '@skeletonlabs/skeleton';
  import '@skeletonlabs/skeleton/styles/skeleton.css';

  import '../styles/app.postcss';
  import '../styles/theme.postcss';
  import Footer from './Footer.svelte';
  import Navbar from './Navbar.svelte';
  import Transition from './Transition.svelte';
  import BlogSideToc from './blog/SideToc.svelte';
  import BlogSidenav from './blog/Sidenav.svelte';

  export let data;

  $: showSidenavs = $page.url.pathname.includes('/blog/');
  $: sidebarClasses = showSidenavs ? 'w-0 lg:w-64' : 'hidden';

  // Setup Skeleton pop-up for use throughout the app
  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<AppShell slotSidebarLeft={sidebarClasses} slotSidebarRight={sidebarClasses}>
  <svelte:fragment slot="header">
    <Navbar />
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

  <svelte:fragment slot="pageFooter">
    <Footer />
  </svelte:fragment>
</AppShell>
