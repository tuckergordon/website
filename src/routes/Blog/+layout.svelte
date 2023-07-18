<script lang="ts">
  export let data;

</script>

<h1>Blog</h1>

<div class="blog">
  <div class="content">
    <slot />
  </div>

  <aside>
    <ul class="posts">
      {#each data.posts as post}
        <li class="post">
          <a href='/blog/{post.slug}' class="title">{post.title}</a>
        </li>
      {/each}
    </ul>
  </aside>
</div>

<style>
  .blog {
    display: flex;
  }

  /* TODO: better resposive setup */

  .content {
    flex-grow: 1;
  }
  
  aside {
    width: 200px;
  }
</style>