<script lang="ts">
  import * as config from '$lib/config';
  import Icon from '@iconify/svelte';
  import { AppBar, LightSwitch } from '@skeletonlabs/skeleton';
</script>

<AppBar background="bg-primary-500 dark:bg-surface-800 text-on-primary-token">
  <svelte:fragment slot="lead">
    <a href="/" class="mr-8 flex items-center">
      <img src="/mustachioed-favicon.png" alt="Tucker Emoji" class="mr-4 h-8" />
      <b>{config.title}</b>
    </a>
    <a href="/blog">Blog</a>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    <a
      class="btn-icon !ml-0 hover:variant-soft-primary hover:text-on-primary-token"
      href="https://github.com/tuckergordon/website"
      target="_blank"
      rel="noreferrer">
      <Icon icon="fa-brands:github" />
    </a>
    <a
      class="btn-icon !ml-0 hover:variant-soft-primary hover:text-on-primary-token"
      href="https://www.linkedin.com/in/tucker-gordon-ab5b8b67/"
      target="_blank"
      rel="noreferrer">
      <Icon icon="fa-brands:linkedin" />
    </a>
    <a
      class="btn-icon !ml-0 hover:variant-soft-primary hover:text-on-primary-token"
      href="https://twitter.com/TuckerAGordon"
      target="_blank"
      rel="noreferrer">
      <Icon icon="fa-brands:twitter" />
    </a>
    <a
      class="btn-icon !ml-0 hover:variant-soft-primary hover:text-on-primary-token"
      href="/rss.xml"
      target="_blank"
      rel="noreferrer">
      <Icon icon="fa-solid:rss" />
    </a>
    <LightSwitch rounded="rounded-full" />
  </svelte:fragment>
</AppBar>
