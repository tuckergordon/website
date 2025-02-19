<script lang="ts">
  import Icon from '@iconify/svelte';
  import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

  let { projects, ...rest } = $props();

  function collapseYear(year: string | number) {
    year = year.toString();
    year = year.replace('Present', 'Pres.');
    year = year.replace(/\b(\d{2})(\d{2})\b/g, "'$2");
    return year;
  }
</script>

<Accordion autocollapse {...rest}>
  {#each projects as project}
    <AccordionItem>
      <svelte:fragment slot="summary">
        <div class="flex items-center justify-between">
          <span class="font-semibold">{project.name}</span>
          <span class="italic">{collapseYear(project.year)}</span>
        </div></svelte:fragment>
      <svelte:fragment slot="content">
        <div class="px-2 font-light">
          <div class="mb-4 font-normal">{project.description}</div>

          {#if project.link}
            <div class="mb-4">
              Link:
              <a
                href={project.link}
                target="_blank"
                rel="noopener"
                class="ml-2 hover:text-primary-500 dark:hover:text-secondary-500">
                {project.link.replace('https://www.', '').replace('http://www.', '')}
                <Icon icon="mdi-external-link" class="ml-1 inline"></Icon>
              </a>
            </div>
          {/if}

          {#if project.builtWith}
            <div class="mb-4 flex">
              <span class="mr-2 flex-shrink-0 pt-1">Built with:</span>
              <div>
                {#each project.builtWith as tech}
                  <span
                    class="variant-soft-secondary chip pointer-events-none m-1 dark:variant-ghost-secondary">
                    {tech}
                  </span>
                {/each}
              </div>
            </div>
          {/if}

          {#if project.deployedWith}
            <div class="flex">
              <span class="mr-2 flex-shrink-0 pt-1">Deployed with:</span>
              <div>
                {#each project.deployedWith as tech}
                  <span
                    class="variant-soft-primary chip pointer-events-none m-1 dark:variant-ghost-primary">
                    {tech}
                  </span>
                {/each}
              </div>
            </div>
          {/if}
        </div>
      </svelte:fragment>
    </AccordionItem>
  {/each}
</Accordion>
