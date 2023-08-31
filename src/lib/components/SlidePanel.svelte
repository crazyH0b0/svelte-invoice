<script>
  import { createEventDispatcher } from 'svelte';
  import Arrow from './Icon/Arrow.svelte';
  import Overlay from './Overlay.svelte';
  import Portal from './Portal.svelte';

  const dispatch = createEventDispatcher();
</script>

<svelte:window
  on:keydown={(e) => {
    if (e.key === 'Escape') {
      dispatch('closePanel');
    }
  }}
/>
<Portal>
  <Overlay />
  <div
    class="  bg-white fixed overflow-y-scroll w-3/4 h-screen py-20 z-slidePanel px-32 right-0 top-0 shadow-slidePanel"
  >
    <button
      class=" absolute top-5 left-7 text-pastelPurple hover:text-daisyBush"
      on:click={() => dispatch('closePanel')}
    >
      <Arrow />
    </button>
    <slot />
  </div>
</Portal>
