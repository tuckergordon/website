<script lang="ts">
  import Footer from './footer.svelte';
  import Header from './header.svelte';
  import PageTransition from './transition.svelte';

  export let data;
</script>

<div class="layout">
  <Header />

  <main>
    <PageTransition url={data.url}>
      <slot />
    </PageTransition>
  </main>

  <Footer />
</div>
