<script lang="ts">
  import { v4 as uuidv4 } from 'uuid';
  import Button from '$lib/components/Button.svelte';
  import Trash from '$lib/components/Icon/Trash.svelte';
  import LineItemRows from './LineItemRows.svelte';
  import { slide } from 'svelte/transition';
  import { states } from '$lib/utils/state';
  import { addClient, clients, loadClients } from '$lib/stores/ClientStore';
  import { onMount } from 'svelte';
  import { today } from '$lib/utils/dateHelper';
  import { addInvoice } from '$lib/stores/InvoiceStore';

  const blankLineItem = {
    id: uuidv4(),
    description: '',
    quantity: 0,
    amount: 0
  };
  export let closePanel: () => void = () => {};
  let invoice: Invoice = {
    client: {} as Client,
    lineItems: [{ ...blankLineItem }] as LineItem[]
  } as Invoice;
  let newClient: Partial<Client> = {} as Client;
  const addLineItem = () => {
    invoice.lineItems = [...(invoice.lineItems as []), { ...blankLineItem, id: uuidv4() }];
  };
  let isNewClient = false;
  const removeLineItem = (event) => {
    invoice.lineItems =
      invoice?.lineItems && invoice.lineItems.filter((item) => item.id !== event.detail);
  };
  const UpdateLineItem = () => {
    invoice.lineItems = invoice.lineItems;
  };
  onMount(() => {
    loadClients();
  });
  const handleSubmit = () => {
    if (isNewClient) {
      invoice.client = newClient as Client;
      addClient(newClient as Client);
    }
    addInvoice(invoice);
    closePanel();
  };
</script>

<h2 class=" mb-7 font-sansSerif text-3xl font-bold text-daisyBush">Add an invoice</h2>

<form class="grid grid-cols-6 gap-x-5" on:submit|preventDefault={handleSubmit}>
  <div class="field col-span-4">
    {#if !isNewClient}
      <label for="client">Client</label>
      <div class="flex items-end gap-x-5">
        <select
          name="client"
          id="client"
          required={!isNewClient}
          bind:value={invoice.client.id}
          on:change={() => {
            const selectedClient = $clients.find((item) => item.id === invoice.client.id);
            invoice.client.name = selectedClient?.name !== undefined ? selectedClient?.name : '';
          }}
        >
          <option value="" />
          {#each $clients as client}
            <option value={client.id}>{client.name}</option>
          {/each}
        </select>

        <div class=" text-base make-bold text-monsoon leading-[3.5rem] font-bold">or</div>
        <Button
          label="+ Client"
          onClick={() => {
            isNewClient = true;
            invoice.client.name = '';
            invoice.client.email = '';
          }}
          style="outline"
          isAnimated={false}
        />
      </div>
    {:else}
      <label for="forNewClient">Nwe Client</label>
      <div class="flex items-end gap-x-5">
        <input type="text" name="newClient" required={isNewClient} bind:value={newClient.name} />
        <div class=" text-base make-bold text-monsoon leading-[3.5rem] font-bold">or</div>
        <Button
          label="Existing Client"
          onClick={() => {
            isNewClient = false;
            newClient = {};
          }}
          style="outline"
          isAnimated={false}
        />
      </div>
    {/if}
  </div>
  <div class="field col-span-2">
    <label for="invoiceNumber">Invoice ID</label>
    <input type="number" name="invoiceNumber" required bind:value={invoice.invoiceNumber} />
  </div>
  {#if isNewClient}
    <div class="field grid col-span-6 gap-x-5" transition:slide>
      <div class="field col-span-6">
        <label for="email">Client's Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required={isNewClient}
          bind:value={newClient.email}
        />
      </div>
      <div class="field col-span6">
        <label for="street">Street</label>
        <input type="text" name="street" id="street" bind:value={newClient.street} />
      </div>

      <div class="field col-span2">
        <label for="city">City</label>
        <input type="text" name="city" id="city" bind:value={newClient.city} />
      </div>
      <div class="field col-span2">
        <label for="state">State</label>
        <select name="state" id="state" bind:value={newClient.state}>
          <option />
          {#each states as state}
            <option value={state.value}>{state.name}</option>
          {/each}
        </select>
      </div>
      <div class="field col-span2">
        <label for="zip">Zip</label>
        <input type="text" name="zip" id="zip" bind:value={newClient.zip} />
      </div>
    </div>
  {/if}
  <div class="field col-span-2">
    <label for="dueDate">Due Date</label>
    <input type="date" name="dueDate" min={today} required bind:value={invoice.dueDate} />
  </div>

  <div class="field col-span-2 col-start-5">
    <label for="issueDate">Issue Date</label>
    <input type="date" name="issueDate" min={today} bind:value={invoice.issueDate} />
  </div>

  <div class="field col-span-6">
    <label for="subject">Subject </label>
    <input type="text" name="subject" bind:value={invoice.subject} />
  </div>

  <div class="field col-span-6">
    <LineItemRows
      discount={invoice.discount}
      lineItems={invoice.lineItems}
      on:updateLineItem={UpdateLineItem}
      on:addLineItem={addLineItem}
      on:removeLineItem={removeLineItem}
    />
  </div>
  <div class="field col-span-6">
    <label for="notes">Notes <span class="font-normal">(optional,display on invoice)</span></label>
    <textarea id="notes" name="notes" bind:value={invoice.notes} />
  </div>

  <div class="field col-span-6">
    <label for="terms">
      Terms <span class="font-normal">(optional, enter your terms and conditions)</span>
      <textarea name="terms" id="terms" bind:value={invoice.terms} />
      <div class=" text-xs text-gray-400">
        Formatting tips: <strong>*bold</strong>, <em>_italics_</em>
      </div>
    </label>
  </div>

  <div class="field col-span-2">
    <Button
      style="textOnly"
      label="Delete"
      isAnimated={false}
      onClick={() => {}}
      isIconLest={Trash}
    />
  </div>

  <div class="field col-span-4 flex justify-end gap-x-5">
    <Button
      style="secondary"
      label="Cancel"
      isAnimated={false}
      onClick={() => {
        closePanel();
      }}
    />
    <button
      type="submit"
      class="button bg-lavenderIndigo text-white translate-y-0 hover:-translate-y-2 transition-all shadow-colored hover:shadow-coloredHover"
      >Save</button
    >
  </div>
</form>
