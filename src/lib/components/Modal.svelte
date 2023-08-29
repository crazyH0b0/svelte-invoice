<script>
  import Overlay from './Overlay.svelte';
  import Portal from './Portal.svelte';
  import Cancel from './Icon/Cancel.svelte';
  import { createEventDispatcher } from 'svelte';

  export let isVisible = false;
  const dispatch = createEventDispatcher();
</script>

<svelte:window
  on:keydown={(e) => {
    if (e.key === 'Escape') {
      dispatch('close');
    }
  }}
/>
{#if isVisible}
  <Portal>
    <Overlay />
    <div class=" fixed inset-0 z-modal center">
      <div class="max-w-[450px] min-h-[230px] relative w-full rounded-lg bg-white px-10 py-7">
        <button
          on:click={() => dispatch('close')}
          class=" right-4 top-4 absolute text-pastelPurple hover:text-daisyBush"
        >
          <Cancel />
        </button>
        <slot />
      </div>
    </div>
  </Portal>
{/if}
