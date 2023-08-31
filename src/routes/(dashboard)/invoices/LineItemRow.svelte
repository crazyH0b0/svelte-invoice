<script lang="ts">
  import Trash from '$lib/components/Icon/Trash.svelte';
  import { dollarsCents, twoDecimals } from '$lib/utils/moneyHelper';
  import { createEventDispatcher } from 'svelte';

  export let lineItem: LineItem;
  export let canDelete: boolean = false;
  const dispatch = createEventDispatcher();
  let unitPrice: string = twoDecimals(lineItem.amount / lineItem.quantity);
  let amount: string = twoDecimals(lineItem.amount);

  $: {
    amount = twoDecimals(lineItem.quantity * Number(unitPrice));
    lineItem.amount = dollarsCents(Number(amount));
  }
</script>

<div class=" invoice-line-item border-b-2 border-fog py-2">
  <div>
    <input class="line-item" type="text" name="description" bind:value={lineItem.description} />
  </div>
  <div>
    <input
      class="line-item text-right"
      type="number"
      name="unitPrice"
      step="0.01"
      min="0"
      bind:value={unitPrice}
      on:blur={() => (unitPrice = twoDecimals(Number(unitPrice)))}
    />
  </div>

  <div>
    <input
      class="line-item text-center"
      type="number"
      name="quantity"
      min="0"
      bind:value={lineItem.quantity}
    />
  </div>

  <div>
    <input
      class="line-item text-right"
      type="number"
      name="amount"
      step="0.01"
      min="0"
      bind:value={amount}
      disabled
    />
  </div>

  <div>
    {#if canDelete}
      <button
        on:click|preventDefault={() => dispatch('removeLineItem', lineItem.id)}
        class="center h-10 w-10 text-pastelPurple hover:text-lavenderIndigo"
      >
        <Trash />
      </button>
    {/if}
  </div>
</div>

<style lang="postcss">
  input[type='text'],
  input[type='number'] {
    @apply h-10 w-full border-b-2 border-dashed border-stone-300;
  }

  input[type='text'] {
    @apply font-sansSerif text-xl font-bold;
  }
  input[type='number'] {
    @apply text-base  font-mono;
  }
  input[type='text']:focus,
  input[type='number']:focus {
    @apply border-solid border-lavenderIndigo outline-none;
  }
  input[type='text']:disabled,
  input[type='number']:disabled {
    @apply border-b-0 bg-transparent px-0;
  }
</style>
