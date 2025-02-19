<script lang="ts">
  import type { Post } from '$lib/models/Post.model';
  import { formatDate } from '$lib/utils';

  interface Props {
    post: Post;
  }

  let { post }: Props = $props();
</script>

<a href="blog/{post.slug}" class="card prose h-auto max-w-full rounded-lg p-4 dark:prose-invert">
  <h2>{post.title}</h2>
  <p><em>{formatDate(post.date)}</em></p>
  <p>{post.description}</p>
</a>
