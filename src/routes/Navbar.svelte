<script lang="ts">
  import * as config from '$lib/config';
  import Icon from '@iconify/svelte';
  import { AppBar, Popover } from '@skeletonlabs/skeleton-svelte';

  const links = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'Blog',
      href: '/blog',
    },
    {
      name: 'Projects',
      href: '/projects',
    },
  ];

  let menuOpen = $state(false);
</script>

<header class="sticky top-0 z-10">
  <AppBar background="bg-primary-500 dark:bg-surface-800 text-primary-contrast-500">
    {#snippet lead()}
      <!-- Hamburger menu -->
      <Popover
        open={menuOpen}
        onOpenChange={(e) => (menuOpen = e.open)}
        triggerBase="btn-icon hover:preset-tonal-primary hover:text-primary-contrast-500 sm:hidden!"
        contentBase="card bg-primary-400 dark:bg-surface-700 w-48 py-2 shadow-xl">
        {#snippet trigger()}
          <Icon icon="fa-bars" />
        {/snippet}
        {#snippet content()}
          <nav class="list-nav">
            <ul>
              {#each links as link (link.name)}
                <li>
                  <a href={link.href} class="rounded-none!">
                    <span class="flex-auto">{link.name}</span>
                  </a>
                </li>
              {/each}
            </ul>
          </nav>
          <div class="arrow bg-inherit"></div>
        {/snippet}
      </Popover>

      <a href="/" class="flex items-center sm:mr-8">
        <!-- svelte-preprocess-import-assets-ignore -->
        <img src="/images/mustachioed-favicon.png" alt="Tucker Emoji" class="mr-4 ml-2 h-8" />
        <b>{config.title}</b>
      </a>
    {/snippet}
    {#snippet trail()}
      {#each links as link (link.name)}
        <a
          href={link.href}
          class="btn hover:preset-tonal-surface hover:text-primary-contrast-500 mx-0! hidden sm:block">
          {link.name}
        </a>
      {/each}
      <a
        class="btn-icon hover:preset-tonal-surface hover:text-primary-contrast-500 mx-0!"
        href="https://github.com/tuckergordon/website"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub">
        <Icon icon="fa-brands:github" />
      </a>
      <!-- TODO: implement a light switch https://www.skeleton.dev/docs/guides/mode/#lightswitch -->
      <!-- <LightSwitch rounded="rounded-full" /> -->
    {/snippet}
  </AppBar>
</header>
