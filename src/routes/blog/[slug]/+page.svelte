<script lang="ts">
  import { page } from '$app/state';
  import { formatDate } from '$lib/utils';
  import Sidenav from '../Sidenav.svelte';
  import Icon from '@iconify/svelte';
  import { tocCrawler, popup, TableOfContents } from '@skeletonlabs/skeleton';

  let { data } = $props();
</script>

<!-- SEO -->
<svelte:head>
  <title>Tucker Gordon | {data.meta.title}</title>
  <meta name="og:type" content="article" />
  <meta name="og:title" content={data.meta.title} />
  <meta name="description" content={data.meta.description} />
  <!-- TODO: image -->
</svelte:head>
<div class="container mx-auto grid grid-cols-1 pt-6 lg:grid-cols-[200px_minmax(0px,_1fr)_200px]">
  <!-- 100px leaves room for navbar -->
  <aside class="sticky top-[100px] col-span-1 hidden h-screen scroll-mt-[100px] lg:block">
    <div class="p-4 pt-0 font-bold">Posts</div>
    <Sidenav />
  </aside>

  <main class="col-span-1 space-y-4 px-8 py-0">
    <article class="prose mx-auto mb-8 dark:prose-invert">
      <hgroup>
        <div class="flex items-center justify-between">
          <span class="shrink-0 italic">{formatDate(data.meta.date)}</span>
          <button
            class="btn hover:variant-soft-primary lg:hidden"
            use:popup={{ event: 'click', target: 'features' }}>
            <span>Other posts</span>
            <Icon icon="material-symbols:keyboard-arrow-down" />
          </button>
          <!-- popup -->
          <div class="card w-60 p-2 shadow-xl" data-popup="features">
            <Sidenav />
          </div>
        </div>
        <h1>{data.meta.title}</h1>
      </hgroup>

      <div
        class="content mb-8"
        use:tocCrawler={{
          mode: 'generate',
          queryElements: 'h2',
          // need IDs to be unique otherwise ToC won't update between pages
          key: page.url.pathname,
        }}>
        <data.content />
      </div>

      <hr />
      <a
        href="https://github.com/tuckergordon/website/blob/main/src/posts/{page.params.slug}.md"
        class="btn mb-4 p-0 text-primary-500 no-underline hover:underline"
        target="_blank">
        <Icon icon="material-symbols:edit" />
        <span>Edit this page</span>
      </a>
    </article>
  </main>

  <aside class="sticky top-[100px] col-span-1 hidden h-screen scroll-mt-[100px] lg:block">
    <TableOfContents>On The Page</TableOfContents>
  </aside>
</div>
