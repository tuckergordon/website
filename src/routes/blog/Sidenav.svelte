<script lang="ts">
  import { page } from '$app/state';

  let classesActive = $derived((href: string) =>
    href === page.url.pathname
      ? 'bg-primary-500 text-on-primary-token hover:text-primary-500 dark:bg-surface-800 dark:text-secondary-500'
      : '',
  );
</script>

<nav class="list-nav">
  <ul class="m-0 p-0">
    {#each page.data.posts ?? [] as post (post?.slug)}
      <li>
        <a
          href="/blog/{post.slug}"
          class="{classesActive(`/blog/${post.slug}`)} whitespace-pre-wrap no-underline">
          {post.title}
        </a>
      </li>
    {/each}
  </ul>
</nav>
