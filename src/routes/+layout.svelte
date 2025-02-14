<script lang="ts">
  import { page } from '$app/stores';
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
  import '@fontsource-variable/outfit';
  import { AppShell } from '@skeletonlabs/skeleton';
  import { storePopup } from '@skeletonlabs/skeleton';

  import '../styles/app.postcss';
  import Footer from './Footer.svelte';
  import Navbar from './Navbar.svelte';
  import Transition from './Transition.svelte';
  import BlogSideToc from './blog/SideToc.svelte';
  import BlogSidenav from './blog/Sidenav.svelte';

  let { data, children } = $props();

  let showSidenavs = $derived($page.url.pathname.includes('/blog/'));
  let sidebarClasses = $derived(showSidenavs ? 'w-0 lg:w-64' : 'hidden');

  // Setup Skeleton pop-up for use throughout the app
  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });
</script>

<AppShell slotSidebarLeft={sidebarClasses} slotSidebarRight={sidebarClasses}>
  {#snippet header()}
    <Navbar />
  {/snippet}
  {#snippet sidebarLeft()}
    {#if showSidenavs}
      <BlogSidenav />
    {/if}
  {/snippet}
  {#snippet sidebarRight()}
    {#if showSidenavs}
      <BlogSideToc />
    {/if}
  {/snippet}

  <Transition url={data.url}>
    {@render children?.()}
  </Transition>

  {#snippet pageFooter()}
    <Footer />
  {/snippet}
</AppShell>
