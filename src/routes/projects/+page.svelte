<script lang="ts">
  import * as config from '$lib/config';
  import projects from './projects.json';
  import Icon from '@iconify/svelte';

  function collapseYear(year: string | number) {
    year = year.toString();
    year = year.replace('Present', 'Pres.');
    year = year.replace(/\b(\d{2})(\d{2})\b/g, "'$2");
    return year;
  }
</script>

<svelte:head>
  <title>{config.title} | Projects</title>
</svelte:head>

<div class="container px-4 pb-12 sm:mx-auto">
  <h1 class="h1 my-8">Projects</h1>

  <div class="table-container">
    <table class="table table-hover font-light">
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
        {#each projects as project}
          <tr>
            <td class="hidden sm:table-cell">{project.year}</td>
            <td class="sm:hidden">{collapseYear(project.year)}</td>
            <td class="font-semibold">
              {#if project.link}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                  class="flex items-center justify-between hover:text-primary-500 dark:hover:text-secondary-500">
                  {project.name}
                  <Icon icon="mdi-external-link" class="inline"></Icon>
                </a>
              {:else}
                {project.name}
              {/if}
            </td>
            <td class="hidden md:table-cell">{project.description}</td>
            <td class="hidden lg:table-cell">
              {#if project.builtWith}
                {#each project.builtWith as tech}
                  <span
                    class="variant-soft-secondary chip pointer-events-none m-1 dark:variant-ghost-secondary">
                    {tech}
                  </span>
                {/each}
              {/if}
            </td>
            <td class="hidden lg:table-cell">
              {#if project.deployedWith}
                {#each project.deployedWith as tech}
                  <span
                    class="variant-soft-primary chip pointer-events-none m-1 dark:variant-ghost-primary">
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
</div>
