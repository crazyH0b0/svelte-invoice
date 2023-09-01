<script lang="ts">
  import type { SvelteComponent } from 'svelte';

  export let label: string;
  export let onClick: () => void;
  export let isAnimated: boolean = true;
  export let style:
    | 'primary'
    | 'secondary'
    | 'destructive'
    | 'outline'
    | 'textOnly'
    | 'textOnlyDestructive' = 'primary';
  export let isIconLest: (new (...args: any[]) => SvelteComponent) | null = null;
  export let isIconRight: (new (...args: any[]) => SvelteComponent) | null = null;
</script>

<button
  on:click|preventDefault={() => onClick()}
  class:isAnimated
  class="button"
  class:primary={style === 'primary'}
  class:secondary={style === 'secondary'}
  class:destructive={style === 'destructive'}
  class:textOnly={style === 'textOnly'}
  class:outline={style === 'outline'}
  class:textOnlyDestructive={style === 'textOnlyDestructive'}
>
  {#if isIconLest}
    <svelte:component this={isIconLest} class="mr-2" />
  {/if}
  {label}
  {#if isIconRight}
    <svelte:component this={isIconRight} class="ml-2" />
  {/if}
</button>

<style lang="postcss">
  .isAnimated {
    @apply translate-y-0 hover:-translate-y-2 transition-all shadow-colored hover:shadow-coloredHover;
  }
  .primary {
    @apply bg-lavenderIndigo text-white;
  }
  .secondary {
    @apply bg-gallery text-daisyBush;
  }
  .destructive {
    @apply bg-scarlet text-goldenFizz;
  }
  .textOnly {
    @apply bg-transparent px-0 text-scarlet underline hover:no-underline;
  }
  .outline {
    @apply border-daisyBush text-daisyBush hover:bg-daisyBush hover:text-white;
  }
  .textOnlyDestructive {
    @apply bg-transparent px-0 text-lavenderIndigo no-underline hover:underline;
  }
</style>
