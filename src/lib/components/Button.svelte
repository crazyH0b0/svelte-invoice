<script lang="ts">
  export let label: string;
  export let onClick: () => void;
  export let isAnimated: boolean = true;
  export let style: 'primary' | 'secondary' | 'destructive' = 'primary';
</script>

<button
  on:click|preventDefault={() => onClick()}
  class:isAnimated
  class=" relative whitespace-nowrap rounded-lg
 lg:px-10 lg:py-3 font-sansSerif lg:text-xl font-black text-base px-5 py-2"
  class:primary={style === 'primary'}
  class:secondary={style === 'secondary'}
  class:destructive={style === 'destructive'}
>
  {label}
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
</style>
