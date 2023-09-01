<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import CircledAmount from '$lib/components/CircledAmount.svelte';
  import { createEventDispatcher } from 'svelte';
  import LineItemRow from './LineItemRow.svelte';
  import { centsToDollars, sumLineItems, twoDecimals } from '$lib/utils/moneyHelper';

  export let lineItems: LineItem[] | undefined = undefined;

  const dispatch = createEventDispatcher();
  let subtotal: string = '0.00';

  let discountedAmount: string = '0.00';
  export let discount: number = 0;
  let total: string = '0.00';
  $: if (sumLineItems(lineItems) > 0) {
    subtotal = centsToDollars(sumLineItems(lineItems));
  }
  $: if (subtotal && discount) {
    discountedAmount = centsToDollars(sumLineItems(lineItems) * (discount / 100));
  }
  $: total = twoDecimals(Number(subtotal) - Number(discountedAmount));
</script>

<div class=" invoice-line-item border-b-2 border-daisyBush pb-2">
  <div class="table-header">Description</div>
  <div class="table-header text-right">Unit Price</div>
  <div class="table-header text-center">Qty</div>
  <div class="table-header text-right">Amount</div>
</div>
{#if lineItems}
  {#each lineItems as lineItem, index}
    <LineItemRow
      {lineItem}
      on:removeLineItem
      canDelete={index > 0}
      on:updateLineItem
      isRequired={index === 0}
    />
  {/each}
{/if}
<div class=" invoice-line-item">
  <duv class="col-span-2">
    <Button
      label="+ Line item"
      style="textOnlyDestructive"
      onClick={() => dispatch('addLineItem')}
      isAnimated={false}
    />
  </duv>
  <div class=" font-bold py-5 text-right text-monsoon">Subtotal</div>
  <div class=" font-mono py-5 text-right">${subtotal}</div>
</div>

<div class=" invoice-line-item">
  <div class="col-span-2 font-bold py-5 text-right text-monsoon">Discount</div>
  <div class=" relative">
    <input
      class="line-item w-full h-10 border-b-2 border-dashed
      border-stone-300 pr-4 text-right foucus:border-lavenderIndigo focus:outline-none"
      type="number"
      name="discount"
      min="0"
      max="100"
      bind:value={discount}
    />
    <span class=" absolute right-0 top-2 text-monsoon">%</span>
  </div>
  <div class="py-5 text-right font-mono">${discountedAmount}</div>
</div>

<div class="invoice-line-item">
  <div class="col-span-6">
    <CircledAmount label="Total:" amount={`$${total}`} />
  </div>
</div>

<style lang="postcss">
  .table-header {
    @apply text-sm font-bold text-daisyBush;
  }
</style>
