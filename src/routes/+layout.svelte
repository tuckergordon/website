<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import '../styles/app.css';
  import Footer from './Footer.svelte';
  import Navbar from './Navbar.svelte';
  import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
  import '@fontsource-variable/outfit';
  import { storePopup } from '@skeletonlabs/skeleton';

  let { children } = $props();

  // Setup Skeleton pop-up for use throughout the app
  storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

  // Workaround to ensure page goes back to the top when navigating
  // between routes. More info: https://github.com/sveltejs/kit/issues/2733#issuecomment-1543863772
  afterNavigate(() => {
    document.body.scrollTo(0, 0);
  });
</script>

<div class="grid min-h-screen grid-rows-[auto_1fr_auto]">
  <Navbar />
  {@render children?.()}
  <Footer />
</div>
