<script lang="ts">
  import Icon from '@iconify/svelte';
</script>

<div
  class="mt-8 border-t border-surface-500/10 bg-surface-50 text-xs dark:bg-surface-900 md:text-base">
  <div class="mx-auto w-full max-w-7xl space-y-6 p-4 py-10">
    <section class="prose mx-auto text-center dark:prose-invert">
      <h3>I'd love to hear from you!</h3>
    </section>
    <section class="flex flex-wrap items-center justify-center gap-y-4 space-x-4">
      <a
        class="variant-soft btn"
        href="mailto:tucker.gordon18@gmail.com?subject=Hello from your website!"
        target="_blank"
        rel="noreferrer"
        aria-label="Email">
        <Icon icon="fa:paper-plane" />
        <span class="ml-2 hidden lg:inline-block">Email</span>
      </a>
      <a
        class="variant-soft btn"
        href="https://github.com/tuckergordon"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub">
        <Icon icon="fa-brands:github" />
        <span class="ml-2 hidden lg:inline-block">GitHub</span>
      </a>
      <a
        class="variant-soft btn"
        href="https://www.linkedin.com/in/tucker-gordon-ab5b8b67/"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn">
        <Icon icon="fa-brands:linkedin" />
        <span class="ml-2 hidden lg:inline-block">LinkedIn</span>
      </a>
      <a
      class="variant-soft btn"
      href="https://bsky.app/profile/tucker-gordon.bsky.social"
      target="_blank"
      rel="noreferrer"
      aria-label="Bluesky">
      <Icon icon="fa6-brands:bluesky" />
      <span class="ml-2 hidden lg:inline-block">Bluesky</span>
    </a>
    </section>
  </div>
</div>
