<script>
  import CircledAmount from '$lib/components/CircledAmount.svelte';
  import Search from '$lib/components/Search.svelte';
  import { invoices, loadInvoices } from '$lib/stores/InvoiceStore';
  import { onMount } from 'svelte';
  import InvoiceRow from './InvoiceRow.svelte';

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
  items-start md:items-center justify-between lg:mb-16"
>
  <Search />
  <div>
    <button
      class=" relative whitespace-nowrap rounded-lg bg-lavenderIndigo
       lg:px-10 lg:py-3 font-sansSerif lg:text-xl font-black text-base px-5 py-2 text-white shadow-colored hover:shadow-coloredHover
       translate-y-0 hover:-translate-y-2 transition-all
       ">+ Invoice</button
    >
  </div>
</div>

<div>
  <div class=" invoice-table table-header text-daisyBush hidden lg:grid">
    <h3>Status</h3>
    <h3>Due Date</h3>
    <h3>ID</h3>
    <h3>Client</h3>
    <h3>Amount</h3>
    <div />
    <div />
  </div>
</div>
{#each $invoices as invoice}
  <InvoiceRow {invoice} />
{/each}
<CircledAmount label="Total" amount="$1,144.00" />

<style lang="postcss">
  .table-header h3 {
    @apply text-xl font-black leading-snug;
  }
</style>
