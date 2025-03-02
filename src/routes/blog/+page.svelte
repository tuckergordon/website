<script lang="ts">
  import * as config from '$lib/config';
  import PostCard from './PostCard.svelte';

  let { data } = $props();
</script>

<svelte:head>
  <title>{config.title} | Blog</title>
  <meta name="description" content="Tucker Gordon's blog" />
</svelte:head>

<div class="container mx-auto max-w-xl px-4 sm:px-0">
  <h1 class="h1 my-8">Blog Posts</h1>
  <section class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    {#each data.posts as post (post.slug)}
      <PostCard {post} />
    {/each}
  </section>
</div>
