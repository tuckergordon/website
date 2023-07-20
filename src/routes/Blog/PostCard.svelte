<script lang="ts">
  import type { Post } from '$lib/models/Post.model';
  import { formatDate } from '$lib/utils';

  export let post: Post;
</script>

<a href="blog/{post.slug}" class="p-4 h-auto min-h-[300px] max-w-full card rounded-lg prose dark:prose-invert">
  <h2>{post.title}</h2>
  <p>{formatDate(post.date)}</p>
  <p>{post.description}</p>
</a>
