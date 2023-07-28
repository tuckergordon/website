<script lang="ts">
  import type { Post } from '$lib/models/Post.model';
  import { formatDate } from '$lib/utils';

  export let post: Post;
</script>

<a
  href="blog/{post.slug}"
  class="prose card h-auto min-h-[300px] max-w-full rounded-lg p-4 dark:prose-invert">
  <h2>{post.title}</h2>
  <p>{formatDate(post.date)}</p>
  <p>{post.description}</p>
</a>
