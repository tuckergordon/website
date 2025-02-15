<script lang="ts">
  import * as config from '$lib/config';
  import PostCard from './PostCard.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>{config.title} | Blog</title>
</svelte:head>

<div class="container px-4 sm:mx-auto sm:my-4">
  <h1 class="h1 my-8">Blog</h1>
  <section class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {#each data.posts as post}
      <PostCard {post} />
    {/each}
  </section>
</div>
