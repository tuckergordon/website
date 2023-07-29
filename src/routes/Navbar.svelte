<script lang="ts">
  import * as config from '$lib/config';
  import Icon from '@iconify/svelte';
  import { AppBar, LightSwitch, popup, type PopupSettings } from '@skeletonlabs/skeleton';

  const popupCombobox: PopupSettings = {
    event: 'focus-click',
    target: 'popupCombobox',
    placement: 'bottom',
    closeQuery: '.listbox-item',
  };

  const links = [
    {
      name: 'Blog',
      href: '/blog',
    },
    // More links go here
  ];
</script>

<AppBar background="bg-primary-500 dark:bg-surface-800 text-on-primary-token">
  <svelte:fragment slot="lead">
    <button
      class="btn-icon hover:variant-soft-primary hover:text-on-primary-token sm:!hidden"
      use:popup={popupCombobox}>
      <Icon icon="fa-bars" />
    </button>

    <!-- Hamburger menu -->
    <div
      class="card w-48 bg-primary-400 py-2 shadow-xl dark:bg-surface-700"
      data-popup="popupCombobox">
      <nav class="list-nav">
        <ul>
          {#each links as link}
            <li>
              <a href={link.href} class="!rounded-none">
                <span class="flex-auto">{link.name}</span>
              </a>
            </li>
          {/each}
        </ul>
      </nav>
      <div class="arrow bg-inherit" />
    </div>

    <a href="/" class="flex items-center sm:mr-8">
      <img src="/mustachioed-favicon.png" alt="Tucker Emoji" class="mr-4 h-8" />
      <b>{config.title}</b>
    </a>
  </svelte:fragment>
  <svelte:fragment slot="trail">
    {#each links as link}
      <a
        href={link.href}
        class="btn hidden hover:variant-soft-surface hover:text-on-primary-token sm:block">
        {link.name}
      </a>
    {/each}
    <a
      class="btn-icon !mx-0 hover:variant-soft-surface hover:text-on-primary-token"
      href="https://github.com/tuckergordon/website"
      target="_blank"
      rel="noreferrer">
      <Icon icon="fa-brands:github" />
    </a>
    <LightSwitch rounded="rounded-full" />
  </svelte:fragment>
</AppBar>
