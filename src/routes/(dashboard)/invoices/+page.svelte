<script>
  import CircledAmount from '$lib/components/CircledAmount.svelte';
  import ThreeDots from '$lib/components/Icon/ThreeDots.svelte';
  import View from '$lib/components/Icon/View.svelte';
  import Search from '$lib/components/Search.svelte';
  import Tag from '$lib/components/Tag.svelte';
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
  <div class=" invoice-table table-header text-daisyBush hidden lg:gird">
    <h3>Status</h3>
    <h3>Due Date</h3>
    <h3>ID</h3>
    <h3>Client</h3>
    <h3>Amount</h3>
    <div />
    <div />
  </div>
</div>
<div
  class="invoice-table invoice-row items-center bg-white py-3 lg:py-6 rounded-lg shadow-tableRow"
>
  <div class="status">
    <Tag className="ml-auto lg:ml-0" label="current" />
  </div>
  <div class="text-sm lg:text-lg dueDate">8/1/2022</div>
  <div class="text-sm lg:text-lg invoiceNumber">12312</div>
  <div class="text-base text-xl font-bold clientName">compress.fm</div>
  <div class="text-sm lg:text-lg font-mono font-bold amount text-right">$5333.00</div>
  <div class="text-sm lg:text-lg center viewButton">
    <a href="#" class=" text-pastelPurple hover:text-daisyBush hidden lg:block"><View /></a>
  </div>
  <div class=" text-lg center moreButton">
    <button class=" justify-center text-pastelPurple hover:text-daisyBush">
      <ThreeDots />
    </button>
  </div>
</div>

<CircledAmount label="Total" amount="$1,144.00" />

<style lang="postcss">
  .table-header h3 {
    @apply text-xl font-black leading-snug;
  }

  .invoice-row {
    grid-template-areas:
      'invoiceNumber invoiceNumber'
      'clientName amount'
      'dueDate status';
  }
  @media (min-width: 1024px) {
    .invoice-row {
      grid-template-areas: 'status dueDate invoiceNumber clientName amount viewButton moreButton';
    }
  }
  .invoice-row .status {
    grid-area: status;
  }
  .invoice-row .dueDate {
    grid-area: dueDate;
  }
  .invoice-row .invoiceNumber {
    grid-area: invoiceNumber;
  }
  .invoice-row .clientName {
    grid-area: clientName;
  }
  .invoice-row .amount {
    grid-area: amount;
  }
  .invoice-row .viewButton {
    grid-area: viewButton;
  }
  .invoice-row .moreButton {
    grid-area: moreButton;
  }
</style>
