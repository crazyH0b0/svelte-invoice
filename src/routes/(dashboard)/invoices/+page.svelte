<script lang="ts">
  import CircledAmount from '$lib/components/CircledAmount.svelte';
  import Search from '$lib/components/Search.svelte';
  import { invoices, loadInvoices } from '$lib/stores/InvoiceStore';
  import { onMount } from 'svelte';
  import InvoiceRow from './InvoiceRow.svelte';
  import { centsToDollars, sumInvoices } from '$lib/utils/moneyHelper';
  import BlankState from './BlankState.svelte';
  import InvoiceRowHeader from './InvoiceRowHeader.svelte';
  import Button from '$lib/components/Button.svelte';
  import SlidePanel from '$lib/components/SlidePanel.svelte';

  let isInvoiceFormShowing = false;
  onMount(() => {
    loadInvoices();
  });
</script>

<svelte:head>
  <title>Invoices | The Dollar Holler</title>
</svelte:head>

<div
  class=" mb-7 gap-y-6 md:gap-y-4 flex flex-col-reverse
  md:flex-row
  items-start md:items-center justify-between lg:mb-10"
>
  {#if $invoices.length > 0}
    <Search />
  {:else}
    <div />
  {/if}
  <div>
    <Button
      label="+New Invoice"
      onClick={() => {
        isInvoiceFormShowing = true;
      }}
    />
  </div>
</div>
{#if isInvoiceFormShowing}
  <SlidePanel on:closePanel={() => (isInvoiceFormShowing = false)} />
{/if}

{#if $invoices === null}
  Loading...
{:else if $invoices.length <= 0}
  <BlankState />
{:else}
  <InvoiceRowHeader className="text-daisyBush" />
  {#each $invoices as invoice}
    <InvoiceRow {invoice} />
  {/each}
  <CircledAmount label="Total" amount={`${centsToDollars(sumInvoices($invoices))}`} />
{/if}
