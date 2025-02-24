import { dev } from '$app/environment';
import { injectAnalytics } from '@vercel/analytics/sveltekit';

// Vercel analytics
injectAnalytics({ mode: dev ? 'development' : 'production' });

export async function load({ url }) {
  return {
    url: url.pathname,
  };
}
