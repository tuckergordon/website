<!-- Used to override the default <img> in mdsvex -->
<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<img {src} {alt} loading="lazy" />
