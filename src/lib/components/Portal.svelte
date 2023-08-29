<script lang="ts">
  import { updated } from '$app/stores';

  function portal(node: HTMLElement) {
    let target: HTMLBodyElement | null;

    function update() {
      target = document.querySelector('body');
      target?.appendChild(node);
      node.hidden = false;
    }
    function destroy() {
      node.parentElement?.removeChild(node);
    }
    update();
    return { update, destroy };
  }
</script>

<div class="hidden" use:portal />
