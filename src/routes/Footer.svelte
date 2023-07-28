<script lang="ts">
  import Icon from '@iconify/svelte';
</script>

<div class="border-t border-surface-500/10 bg-surface-50 text-xs dark:bg-surface-900 md:text-base">
  <div class="mx-auto w-full max-w-7xl space-y-6 p-4 py-10">
    <section class="prose mx-auto text-center dark:prose-invert">
      <h3>I'd love to hear from you!</h3>
    </section>
    <section class="flex flex-wrap items-center justify-center space-x-4 gap-y-4">
      <a
        class="btn variant-soft"
        href="mailto:tucker.gordon18@gmail.com?subject=Hello from your website!"
        target="_blank"
        rel="noreferrer">
        <Icon icon="fa:paper-plane" />
        <span class="ml-2 hidden lg:inline-block">Email</span>
      </a>
      <a
        class="btn variant-soft"
        href="https://github.com/tuckergordon"
        target="_blank"
        rel="noreferrer">
        <Icon icon="fa-brands:github" />
        <span class="ml-2 hidden lg:inline-block">Github</span>
      </a>
      <a
        class="btn variant-soft"
        href="https://www.linkedin.com/in/tucker-gordon-ab5b8b67/"
        target="_blank"
        rel="noreferrer">
        <Icon icon="fa-brands:linkedin" />
        <span class="ml-2 hidden lg:inline-block">LinkedIn</span>
      </a>
      <a
        class="btn variant-soft"
        href="https://twitter.com/TuckerAGordon"
        target="_blank"
        rel="noreferrer">
        <Icon icon="fa-brands:twitter" />
        <span class="ml-2 hidden lg:inline-block">Twitter</span></a>
      <a class="btn variant-soft" href="/rss.xml" target="_blank" rel="noreferrer">
        <Icon icon="fa-solid:rss" />
        <span class="ml-2 hidden lg:inline-block">RSS</span></a>
    </section>
  </div>
</div>
