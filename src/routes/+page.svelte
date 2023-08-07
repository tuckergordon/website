<script lang="ts">
  import ScrollDownArrows from '$lib/components/Scroller/ScrollDownArrows.svelte';
  import Scroller from '$lib/components/Scroller/Scroller.svelte';
  import ScrollerOverlay from '$lib/components/Scroller/ScrollerOverlay.svelte';
  import * as config from '$lib/config';
  import Icon from '@iconify/svelte';

  let taborVideo: HTMLVideoElement;
  let maineCoastVideo: HTMLVideoElement;
</script>

<svelte:head>
  <title>{config.title} | About</title>
</svelte:head>

<Scroller>
  <svelte:fragment slot="backdrops">
    <img id="hero" src="$lib/assets/images/hero.jpeg" alt="Tucker looking at Mt. Katahdin" />
    <video bind:this={taborVideo} id="tabor" muted autoplay loop playsinline>
      <source src="$lib/assets/videos/tabor.mp4" type="video/mp4" />
      <img src="$lib/assets/images/tabor.png" alt="View from Mt. Tabor Park in Portland, OR" />
    </video>
    <img id="dc" src="$lib/assets/images/dc.jpeg" alt="Washington Monument and cherry blossoms" />
    <video bind:this={maineCoastVideo} id="maine-coast" muted autoplay loop playsinline>
      <source src="$lib/assets/videos/maine-coast.mp4" type="video/mp4" />
      <img src="$lib/assets/images/maine-coast.png" alt="A rocky Maine coastline" />
    </video>
    <img id="surfing" src="$lib/assets/images/surfing.jpeg" alt="Tucker surfing on a wave" />
    <img id="pancakes" src="$lib/assets/images/pancakes.jpeg" alt="Pancakes on a griddle" />
  </svelte:fragment>

  <svelte:fragment slot="overlays">
    <ScrollerOverlay backdrop="hero" justifyContent="start">
      <div class="container mx-auto flex flex-col items-center">
        <div
          class="prose card variant-filled-secondary my-3 max-w-sm p-3 opacity-90 dark:prose-invert dark:bg-surface-500 dark:text-on-surface-token">
          👋 Hi there!
        </div>
        <div
          class="prose card variant-filled-secondary my-3 max-w-sm p-3 opacity-90 dark:prose-invert dark:bg-surface-500 dark:text-on-surface-token">
          My name is <b>Tucker</b> and I'm a <b>web developer 🧑‍💻 in Portland, ME.</b>
        </div>
        <div
          class="prose card variant-filled-secondary my-3 max-w-sm p-3 opacity-90 dark:prose-invert dark:bg-surface-500 dark:text-on-surface-token">
          Keep scrolling ⬇️ to read my story, or head over to the <a
            href="/blog"
            class="btn btn-sm variant-filled-primary no-underline dark:bg-secondary-500"
            >Blog &nbsp;<Icon icon="fa-solid:chevron-right" /></a> for some of my thoughts and musings.
        </div>
        <ScrollDownArrows class="text-white" />
      </div>
    </ScrollerOverlay>
    <ScrollerOverlay
      backdrop="tabor"
      justifyContent="start"
      on:stepEnter={() => taborVideo?.play()}>
      <div class="container mx-auto flex flex-col items-center">
        <div
          class="prose card variant-filled-secondary my-3 max-w-sm p-3 opacity-90 dark:prose-invert dark:bg-surface-500 dark:text-on-surface-token">
          I grew up in the other Portland (OR) but moved across the country to attend
          <a href="https://www.bowdoin.edu/" class="bold text-on-primary-token">
            Bowdoin College
          </a>
          <img src="$lib/assets/images/bowdoin.png" alt="Bowdoin logo" class="m-0 inline h-[1em]" />
          as a Computer Science major.
        </div>
      </div>
    </ScrollerOverlay>
    <ScrollerOverlay backdrop="dc" justifyContent="start">
      <div class="container mx-auto flex flex-col items-center">
        <div
          class="prose card variant-filled-secondary my-3 max-w-sm p-3 opacity-90 dark:prose-invert dark:bg-surface-500 dark:text-on-surface-token">
          <p>
            I joined <a href="https://www.boozallen.com/" class="text-on-primary-token">
              Booz Allen</a>
            in 2017 as a <b>data scientist</b> in DC, focused on scheduling optimization 🗓️, Natural
            Language Processing 📖, and data visualization 📊.
          </p>
        </div>
        <div
          class="prose card variant-filled-secondary my-3 max-w-sm p-3 opacity-90 dark:prose-invert dark:bg-surface-500 dark:text-on-surface-token">
          Data viz introduced me to web development, and what began with creating small
          <b>scrollytelling</b> pages for clients, turned into building
          <b>enterprise applications</b> and immersion in the world of JavaScript.
        </div>
      </div>
    </ScrollerOverlay>
    <ScrollerOverlay
      backdrop="maine-coast"
      justifyContent="start"
      on:stepEnter={() => maineCoastVideo.play()}>
      <div class="container mx-auto flex flex-col items-center">
        <div
          class="prose card variant-filled-secondary my-3 max-w-sm p-3 opacity-90 dark:prose-invert dark:bg-surface-500 dark:text-on-surface-token">
          In 2020, I began working remotely and moved back to Maine <img
            src="$lib/assets/images/maine.jpeg"
            alt="Maine state flag"
            class="inline h-[1em]" />, eager to return to the places and people this state is home
          to.
        </div>
      </div>
    </ScrollerOverlay>
    <ScrollerOverlay backdrop="surfing" justifyContent="start">
      <div class="container mx-auto flex flex-col items-center">
        <div
          class="prose card variant-filled-secondary my-3 max-w-sm p-3 opacity-90 dark:prose-invert dark:bg-surface-500 dark:text-on-surface-token">
          Outside of work, my hobbies include surfing 🏄‍♂️, snowboarding 🏂, disc golfing 🥏, softball
          🥎, and an endless search for the perfect pancake 🥞.
        </div>
      </div>
    </ScrollerOverlay>
    <ScrollerOverlay backdrop="pancakes" justifyContent="start">
      <div class="container mx-auto flex flex-col items-center">
        <div
          class="prose card variant-filled-secondary my-3 max-w-sm p-3 opacity-90 dark:prose-invert dark:bg-surface-500 dark:text-on-surface-token">
          <h4 class="text-on-primary-token">Current pancake leaders</h4>

          <ul>
            <li>
              <a href="http://www.palacedinerme.com/" class="text-on-primary-token"
                >The Palace Diner</a> in Biddeford, ME
            </li>
            <li>
              <a
                href="https://www.seriouseats.com/light-and-fluffy-pancakes-recipe"
                class="text-on-primary-token">J. Kenji Lopez-Alt's recipe</a> (who would've thought sour
              cream was the key?)
            </li>
          </ul>
        </div>
      </div>
    </ScrollerOverlay>
  </svelte:fragment>
</Scroller>

<section class="prose mx-auto my-12 px-4 dark:prose-invert sm:my-24">
  <p>
    I appreciate you taking the time to visit me on my little corner of the internet. If anything on
    this site makes you think "I'd like to chat with this guy," please reach out via any of the
    methods below!
  </p>
</section>
