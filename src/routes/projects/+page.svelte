<script lang="ts">
  import * as config from '$lib/config';
  import ProjectsAccordion from './ProjectsAccordion.svelte';
  import ProjectsTable from './ProjectsTable.svelte';
  import projects from './projects.json';
</script>

<svelte:head>
  <title>{config.title} | Projects</title>
</svelte:head>

<div class="container px-4 pb-12 sm:mx-auto">
  <h1 class="h1 my-8">Projects</h1>

  <ProjectsTable {projects} class="hidden md:block" />
  <ProjectsAccordion {projects} class="block md:hidden" />
</div>
