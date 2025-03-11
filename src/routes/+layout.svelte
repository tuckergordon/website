<script lang="ts">
  import { afterNavigate } from '$app/navigation';
  import '../app.css';
  import Footer from './Footer.svelte';
  import Navbar from './Navbar.svelte';
  import '@fontsource-variable/outfit';

  let { children } = $props();

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
