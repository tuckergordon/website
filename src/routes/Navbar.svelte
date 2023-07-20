<script lang="ts">
  import * as config from '$lib/config';
  import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar background="bg-primary-500 dark:bg-surface-800 text-on-primary-token">
  <svelte:fragment slot="lead">
    <a href="/" class="flex items-center mr-8">
      <img src="/mustachioed-favicon.png" alt="Tucker Emoji" class="h-8 mr-4" />
      <b>{config.title}</b>
    </a>
    <a href="/blog">Blog</a>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <a href="/rss.xml" target="_blank">RSS</a>
    <LightSwitch rounded="rounded-full" />
  </svelte:fragment>
</AppBar>
