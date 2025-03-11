<script lang="ts">
  import Icon from '@iconify/svelte';
  import { Accordion } from '@skeletonlabs/skeleton-svelte';

  let { projects, ...rest } = $props();

  const collapseYear = (year: string | number) => {
    year = year.toString();
    year = year.replace('Present', 'Pres.');
    year = year.replace(/\b(\d{2})(\d{2})\b/g, "'$2");
    return year;
  };

  const trimLink = (link: string) => new URL(link).hostname;
</script>

<Accordion collapsible multiple {...rest}>
  {#each projects as project (project.name)}
    <Accordion.Item
      value={project.name}
      controlClasses="bg-primary-100 dark:bg-surface-700 flex items-center justify-between w-full"
      panelClasses="dark:bg-surface-800 rounded-none">
      {#snippet control()}
        <span class="font-semibold">{project.name}</span>
        <span class="text-end italic">{collapseYear(project.year)}</span>
      {/snippet}

      {#snippet panel()}
        <div class="mb-4">{project.description}</div>

        <div class="grid grid-cols-[auto_1fr] gap-2">
          {#if project.link}
            <span class="font-thin">Link</span>
            <a
              href={project.link}
              target="_blank"
              rel="noopener"
              class="hover:text-primary-500 dark:hover:text-secondary-500">
              {trimLink(project.link)}<Icon icon="mdi-external-link" class="ml-1 inline"></Icon>
            </a>
          {/if}

          {#if project.builtWith}
            <span class="pt-1 font-thin">Built with</span>
            <div>
              {#each project.builtWith as tech (tech)}
                <span
                  class="preset-tonal-secondary chip dark:preset-tonal-secondary border-secondary-500 pointer-events-none m-1 mr-2 ml-0 border">
                  {tech}
                </span>
              {/each}
            </div>
          {/if}

          {#if project.deployedWith}
            <span class="pt-1 font-thin">Deployed with</span>
            <div>
              {#each project.deployedWith as tech (tech)}
                <span
                  class="preset-tonal-primary chip dark:preset-tonal-primary border-primary-500 pointer-events-none m-1 mr-2 ml-0 border">
                  {tech}
                </span>
              {/each}
            </div>
          {/if}

          <span class="font-thin">Made at</span><span>{project.madeAt}</span>
        </div>
      {/snippet}
    </Accordion.Item>
  {/each}
</Accordion>
