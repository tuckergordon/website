import type { Post } from '$lib/models/Post.model';
import { json } from '@sveltejs/kit';

async function getPosts() {
  let posts: Post[] = [];

  // Grab all posts
  const paths = import.meta.glob('/src/posts/*.md', { eager: true });

  for (const path in paths) {
    const file = paths[path];
    // Get the slug from the psot
    const slug = path.split('/').at(-1)?.replace('.md', '');

    // Check for metadata
    if (file && typeof file === 'object' && 'metadata' in file && slug) {
      const metadata = file.metadata as Omit<Post, 'slug'>;
      const post = { ...metadata, slug } satisfies Post;
      if (post.published) {
        posts.push(post);
      }
    }
  }

  posts = posts.sort(
    (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime(),
  );

  return posts;
}

export async function GET() {
  const posts = await getPosts();
  return json(posts);
}
