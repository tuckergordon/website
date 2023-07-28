<script lang="ts">
  import * as config from '$lib/config';
  import Icon from '@iconify/svelte';
  import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar background="bg-primary-500 dark:bg-surface-800 text-on-primary-token">
  <!-- TODO: implement hamburger menu on xs -->
  <svelte:fragment slot="lead">
    <a href="/" class="mr-4 flex items-center sm:mr-8">
      <img src="/mustachioed-favicon.png" alt="Tucker Emoji" class="mr-4 h-8" />
      <b>{config.title}</b>
    </a>
    <a href="/blog">Blog</a>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <a
      class="btn-icon hidden hover:variant-soft-primary hover:text-on-primary-token sm:flex"
      href="https://github.com/tuckergordon/website"
      target="_blank"
      rel="noreferrer">
      <Icon icon="fa-brands:github" />
    </a>
    <LightSwitch rounded="rounded-full" />
  </svelte:fragment>
</AppBar>
