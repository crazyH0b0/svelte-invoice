<script lang="ts">
  import type { SvelteComponent } from 'svelte';
  import View from './Icon/View.svelte';

  export let options: {
    label: string;
    icon?: new (...args: any[]) => SvelteComponent;
    disabled: boolean;
    onClick: () => void;
  }[];
</script>

<ul class=" absolute left-0 top-4 rounded-lg bg-white shadow-lg z-50">
  {#each options as option}
    {#if !option.disabled}
      <li>
        <button
          class="flex w-full gap-x-2 p-4 font-bold font-sansSerif text-pastelPurple hover:text-daisyBush"
          on:click={option.onClick}
        >
          {#if option.icon}
            <svelte:component this={option.icon} />
          {/if}
          {option.label}
        </button>
      </li>
    {/if}
  {/each}
</ul>

<style lang="postcss">
  li {
    @apply border-b-2 border-whisper;
  }
  li:last-child {
    @apply border-none;
  }
</style>
