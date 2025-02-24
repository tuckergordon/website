import { dev } from '$app/environment';
import { injectAnalytics } from '@vercel/analytics/sveltekit';
import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

// Vercel tools
injectAnalytics({ mode: dev ? 'development' : 'production' });
injectSpeedInsights();

export async function load({ url }) {
  return {
    url: url.pathname,
  };
}
