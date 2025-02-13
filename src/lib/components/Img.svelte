<!-- Used to override the default <img> in mdsvex -->
<script lang="ts">
  interface Props {
    src: string;
    alt: string;
  }

  let { src, alt }: Props = $props();
</script>

<img {src} {alt} loading="lazy" />
