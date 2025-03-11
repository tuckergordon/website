<script lang="ts">
  import Icon from '@iconify/svelte';

  let { projects, ...rest } = $props();
</script>

<div class="table-container" {...rest}>
  <table class="table font-light">
    <thead>
      <tr>
        <th>Year</th>
        <th>Project</th>
        <th class="hidden md:table-cell">Description</th>
        <th class="hidden lg:table-cell">Built&nbsp;with</th>
        <th class="hidden lg:table-cell">Deployed&nbsp;with</th>
        <th class="hidden lg:table-cell">Made&nbsp;at</th>
      </tr>
    </thead>
    <tbody>
      {#each projects as project (project.name)}
        <tr>
          <td>{project.year}</td>
          <td class="font-semibold">
            {#if project.link}
              <a
                href={project.link}
                target="_blank"
                rel="noopener"
                class="hover:text-primary-500 dark:hover:text-secondary-500 flex justify-between">
                {project.name}
                <Icon icon="mdi-external-link" class="mt-1 ml-1 inline shrink-0"></Icon>
              </a>
            {:else}
              {project.name}
            {/if}
          </td>
          <td class="hidden md:table-cell">{project.description}</td>
          <td class="hidden lg:table-cell">
            {#if project.builtWith}
              {#each project.builtWith as tech (tech)}
                <span
                  class="preset-tonal-secondary chip dark:preset-tonal-secondary border-secondary-500 pointer-events-none m-1 border">
                  {tech}
                </span>
              {/each}
            {/if}
          </td>
          <td class="hidden lg:table-cell">
            {#if project.deployedWith}
              {#each project.deployedWith as tech (tech)}
                <span
                  class="preset-tonal-primary chip dark:preset-tonal-primary border-primary-500 pointer-events-none m-1 border">
                  {tech}
                </span>
              {/each}
            {/if}
          </td>
          <td class="hidden lg:table-cell">{project.madeAt}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>
