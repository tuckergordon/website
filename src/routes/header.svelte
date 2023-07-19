<script lang="ts">
  import * as config from '$lib/config';
  import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar>
  <svelte:fragment slot="lead">
    <a href="/" class="flex items-center mr-4">
      <img src="/mustachioed-favicon.png" alt="Tucker Emoji" class="h-8 mr-4" />
      <b>{config.title}</b>
    </a>
    <a href="/blog">Blog</a>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <a href="/rss.xml" target="_blank">RSS</a>
    <LightSwitch />
  </svelte:fragment>
</AppBar>

<!-- <script lang="ts">
  import * as config from '$lib/config';
</script>

<nav>
  <a href="/" class="title">
    <b>{config.title}</b>
  </a>

  <ul class="links">
    <li>
      <a href="/">Bio</a>
    </li>
    <li>
      <a href="/blog">Blog</a>
    </li>
    <li>
      <a href="/rss.xml" target="_blank">RSS</a>
    </li>
  </ul>
</nav> -->
