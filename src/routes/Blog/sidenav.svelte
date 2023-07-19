<script lang="ts">
    import { page } from '$app/stores';

  </script>

<ul class="posts">
  <!-- TODO: fix data loading error -->
  {#each $page.data.posts ?? [] as post}
    <li class="post">
      <a href="/blog/{post.slug}" class="title">{post.title}</a>
    </li>
  {/each}
</ul>