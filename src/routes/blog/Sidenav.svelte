<script lang="ts">
  import { page } from '$app/stores';

  let classesActive = $derived((href: string) =>
    href === $page.url.pathname
      ? 'bg-primary-500 text-on-primary-token hover:text-primary-500 dark:bg-surface-800 dark:text-secondary-500'
      : ''
  );
</script>

<nav class="list-nav p-4">
  <div class="p-4 pt-0 font-bold">Posts</div>
  <ul>
    <!-- TODO: fix data loading error -->
    {#each $page.data.posts ?? [] as post}
      <li>
        <a
          href="/blog/{post.slug}"
          class={classesActive(`/blog/${post.slug}`)}
          style="white-space: pre-wrap">
          {post.title}
        </a>
      </li>
    {/each}
  </ul>
</nav>
