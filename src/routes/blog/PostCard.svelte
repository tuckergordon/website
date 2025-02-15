<script lang="ts">
  import type { Post } from '$lib/models/Post.model';
  import { formatDate } from '$lib/utils';

  interface Props {
    post: Post;
  }

  let { post }: Props = $props();
</script>

<a
  href="blog/{post.slug}"
  class="card prose h-auto min-h-[300px] max-w-full rounded-lg p-4 dark:prose-invert">
  <h2>{post.title}</h2>
  <p>{formatDate(post.date)}</p>
  <p>{post.description}</p>
</a>
