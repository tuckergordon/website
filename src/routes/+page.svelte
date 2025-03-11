<script lang="ts">
  import bowdoinIcon from '$lib/assets/images/bowdoin.png';
  import maineIcon from '$lib/assets/images/maine.jpeg';
  import maineCoastVidSrc from '$lib/assets/videos/maine-coast.mp4';
  import taborVidSrc from '$lib/assets/videos/tabor.mp4';
  import ScrollDownArrows from '$lib/components/Scroller/ScrollDownArrows.svelte';
  import Scroller from '$lib/components/Scroller/Scroller.svelte';
  import ScrollerOverlay from '$lib/components/Scroller/ScrollerOverlay.svelte';
  import * as config from '$lib/config';
  import Icon from '@iconify/svelte';

  let taborVid: HTMLVideoElement;
  let maineCoastVid: HTMLVideoElement;
</script>

<svelte:head>
  <title>{config.title} | About</title>
  <meta name="description" content="Tucker Gordon's about page" />
</svelte:head>

<Scroller>
  {#snippet backdrops()}
    <div id="hero">
      <enhanced:img
        src="../lib/assets/images/hero.jpeg"
        alt="Tucker looking at Mt. Katahdin"
        sizes="min(1280px, 100vw)"
        fetchpriority="high" />
    </div>
    <video bind:this={taborVid} id="tabor" muted autoplay loop playsinline>
      <source src={taborVidSrc} type="video/mp4" />
      <enhanced:img
        src="../lib/assets/images/tabor.jpeg"
        alt="View from Mt. Tabor Park in Portland, OR"
        sizes="min(2560px, 100vw)" />
    </video>
    <div id="dc">
      <enhanced:img
        src="../lib/assets/images/dc.jpeg"
        alt="Washington Monument and cherry blossoms"
        sizes="min(1280px, 100vw)" />
    </div>
    <video bind:this={maineCoastVid} id="maine-coast" muted autoplay loop playsinline>
      <source src={maineCoastVidSrc} type="video/mp4" />
      <enhanced:img
        src="../lib/assets/images/maine-coast.jpeg"
        alt="A rocky Maine coastline"
        sizes="min(1280px, 100vw)" />
    </video>
    <div id="surfing">
      <enhanced:img
        src="../lib/assets/images/surfing.jpeg"
        alt="Tucker surfing on a wave"
        sizes="min(1500, 100vw)" />
    </div>
    <div id="pancakes">
      <enhanced:img
        src="../lib/assets/images/pancakes.jpeg"
        alt="Pancakes on a griddle"
        sizes="min(1280px, 100vw)" />
    </div>
  {/snippet}

  {#snippet overlays()}
    <ScrollerOverlay backdrop="hero">
      <div class="container mx-auto flex flex-col items-center">
        <div
          class="card preset-filled-secondary-500 prose dark:prose-invert dark:bg-surface-500 dark:text-surface-contrast-500 my-3 max-w-sm p-3 opacity-90">
          👋 Hi there!
        </div>
        <div
          class="card preset-filled-secondary-500 prose dark:prose-invert dark:bg-surface-500 dark:text-surface-contrast-500 my-3 max-w-sm p-3 opacity-90">
          My name is <b>Tucker</b> and I'm a <b>web developer 🧑‍💻 in Portland, ME.</b>
        </div>
        <div
          class="card preset-filled-secondary-500 prose dark:prose-invert dark:bg-surface-500 dark:text-surface-contrast-500 my-3 max-w-sm p-3 opacity-90">
          Keep scrolling ⬇️ to read my story, head over to the <a
            href="/blog"
            class="preset-filled-primary-500 btn btn-sm dark:bg-secondary-500 no-underline"
            >Blog  <Icon icon="fa-solid:chevron-right" /></a>
          for some of my thoughts, or check out some of the
          <a
            href="/projects"
            class="preset-filled-primary-500 btn btn-sm dark:bg-secondary-500 no-underline"
            >Projects &nbsp;<Icon icon="fa-solid:chevron-right" /></a> I've worked on.
        </div>
        <ScrollDownArrows class="text-white" />
      </div>
    </ScrollerOverlay>
    <ScrollerOverlay backdrop="tabor" onstepenter={() => taborVid?.play()}>
      <div class="container mx-auto flex flex-col items-center">
        <div
          class="card preset-filled-secondary-500 prose dark:prose-invert dark:bg-surface-500 dark:text-surface-contrast-500 my-3 max-w-sm p-3 opacity-90">
          I grew up in the other Portland (OR) but moved across the country to attend
          <a href="https://www.bowdoin.edu/" class="bold text-primary-contrast-500">
            Bowdoin College
          </a>
          <img src={bowdoinIcon} alt="Bowdoin logo" class="m-0 inline h-[1em]" />
          as a Computer Science major.
        </div>
      </div>
    </ScrollerOverlay>
    <ScrollerOverlay backdrop="dc">
      <div class="container mx-auto flex flex-col items-center">
        <div
          class="card preset-filled-secondary-500 prose dark:prose-invert dark:bg-surface-500 dark:text-surface-contrast-500 my-3 max-w-sm p-3 opacity-90">
          <p>
            I joined <a href="https://www.boozallen.com/" class="text-primary-contrast-500">
              Booz Allen</a>
            in 2017 as a <b>data scientist</b> in DC, focused on scheduling optimization 🗓️, Natural
            Language Processing 📖, and data visualization 📊.
          </p>
        </div>
        <div
          class="card preset-filled-secondary-500 prose dark:prose-invert dark:bg-surface-500 dark:text-surface-contrast-500 my-3 max-w-sm p-3 opacity-90">
          Data viz introduced me to web development, and what began with creating small
          <b>scrollytelling</b> pages for clients, turned into building
          <b>enterprise applications</b> and immersion in the world of JavaScript.
        </div>
      </div>
    </ScrollerOverlay>
    <ScrollerOverlay backdrop="maine-coast" onstepenter={() => maineCoastVid.play()}>
      <div class="container mx-auto flex flex-col items-center">
        <div
          class="card preset-filled-secondary-500 prose dark:prose-invert dark:bg-surface-500 dark:text-surface-contrast-500 my-3 max-w-sm p-3 opacity-90">
          In 2020, I began working remotely and moved back to Maine <img
            src={maineIcon}
            alt="Maine state flag"
            class="inline h-[1em]" />, eager to return to the places and people this state is home
          to.
        </div>
      </div>
    </ScrollerOverlay>
    <ScrollerOverlay backdrop="surfing">
      <div class="container mx-auto flex flex-col items-center">
        <div
          class="card preset-filled-secondary-500 prose dark:prose-invert dark:bg-surface-500 dark:text-surface-contrast-500 my-3 max-w-sm p-3 opacity-90">
          Outside of work, my hobbies include surfing 🏄‍♂️, snowboarding 🏂, disc golfing 🥏, softball
          🥎, and an endless search for the perfect pancake 🥞.
        </div>
      </div>
    </ScrollerOverlay>
    <ScrollerOverlay backdrop="pancakes">
      <div class="container mx-auto flex flex-col items-center">
        <div
          class="card preset-filled-secondary-500 prose dark:prose-invert dark:bg-surface-500 dark:text-surface-contrast-500 my-3 max-w-sm p-3 opacity-90">
          <h4 class="text-primary-contrast-500">Current pancake leaders</h4>

          <ul>
            <li>
              <a href="http://www.palacedinerme.com/" class="text-primary-contrast-500"
                >The Palace Diner</a> in Biddeford, ME
            </li>
            <li>
              <a
                href="https://www.seriouseats.com/light-and-fluffy-pancakes-recipe"
                class="text-primary-contrast-500">J. Kenji Lopez-Alt's recipe</a> (who would've thought
              sour cream was the key?)
            </li>
          </ul>
        </div>
      </div>
    </ScrollerOverlay>
  {/snippet}
</Scroller>

<section class="prose dark:prose-invert mx-auto my-12 px-4 sm:my-16">
  <p>
    I appreciate you taking the time to visit me on my little corner of the internet. If anything on
    this site makes you think "I'd like to chat with this guy," please reach out via any of the
    methods below!
  </p>
</section>
