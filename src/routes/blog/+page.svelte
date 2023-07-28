<script lang="ts">
  import * as config from '$lib/config';

  import PostCard from './PostCard.svelte';

  export let data;
</script>

<svelte:head>
  <title>{config.title}</title>
</svelte:head>

<div class="container mx-auto my-4">
  <h1 class="h1 my-8">Blog</h1>
  <section class="grid grid-cols-2 gap-4 md:grid-cols-3">
    {#each data.posts as post}
      <PostCard {post} />
    {/each}
  </section>
</div>
