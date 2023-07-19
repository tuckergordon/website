<script lang="ts">
  import { page } from '$app/stores';

  $: classesActive = (href: string) => (href === $page.url.pathname ? '!bg-primary-500' : '');
</script>

<nav class="list-nav p-4">
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
