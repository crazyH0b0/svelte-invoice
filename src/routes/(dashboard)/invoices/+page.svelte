<script>
  import CircledAmount from '$lib/components/CircledAmount.svelte';
  import Search from '$lib/components/Search.svelte';
  import { invoices, loadInvoices } from '$lib/stores/InvoiceStore';
  import { onMount } from 'svelte';
  import InvoiceRow from './InvoiceRow.svelte';
  import { centsToDollars, sumInvoices } from '$lib/utils/moneyHelper';
  import BlankState from './BlankState.svelte';
  import InvoiceRowHeader from './InvoiceRowHeader.svelte';

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
    <button
      class=" relative whitespace-nowrap rounded-lg bg-lavenderIndigo
       lg:px-10 lg:py-3 font-sansSerif lg:text-xl font-black text-base px-5 py-2 text-white shadow-colored hover:shadow-coloredHover
       translate-y-0 hover:-translate-y-2 transition-all
       ">+ Invoice</button
    >
  </div>
</div>

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
