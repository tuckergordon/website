import type { Post } from '$lib/models/Post.model';

export async function load({ fetch }) {
	const response = await fetch('/api/posts');
	const posts: Post[] = await response.json();
	return { posts };
}
