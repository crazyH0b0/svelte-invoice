<script lang="ts">
  import { v4 as uuidv4 } from 'uuid';
  import Button from '$lib/components/Button.svelte';
  import Trash from '$lib/components/Icon/Trash.svelte';
  import LineItemRows from './LineItemRows.svelte';
  import { slide } from 'svelte/transition';
  import { states } from '$lib/utils/state';
  import { clients, loadClients } from '$lib/stores/ClientStore';
  import { onMount } from 'svelte';
  import { today } from '$lib/utils/dateHelper';

  const blankLineItem = {
    id: uuidv4(),
    description: '',
    quantity: 0,
    amount: 0
  };
  let lineItems: LineItem[] = [{ ...blankLineItem }];

  const addLineItem = () => {
    lineItems = [...lineItems, { ...blankLineItem, id: `${lineItems.length + 1}` }];
  };
  let isNewClient = false;
  const removeLineItem = (event) => {
    lineItems = lineItems.filter((item) => item.id !== event.detail);
  };
  onMount(() => {
    loadClients();
  });
</script>

<h2 class=" mb-7 font-sansSerif text-3xl font-bold text-daisyBush">Add an invoice</h2>

<form class="grid grid-cols-6 gap-x-5">
  <div class="field col-span-4">
    {#if !isNewClient}
      <label for="client">Client</label>
      <div class="flex items-end gap-x-5">
        <select name="client" id="client">
          {#each $clients as client}
            <option value={client.id}>{client.name}</option>
          {/each}
        </select>

        <div class=" text-base make-bold text-monsoon leading-[3.5rem] font-bold">or</div>
        <Button
          label="+ Client"
          onClick={() => {
            isNewClient = true;
          }}
          style="outline"
          isAnimated={false}
        />
      </div>
    {:else}
      <label for="forNewClient">Nwe Client</label>
      <div class="flex items-end gap-x-5">
        <input type="text" name="newClient" />
        <div class=" text-base make-bold text-monsoon leading-[3.5rem] font-bold">or</div>
        <Button
          label="Existing Client"
          onClick={() => {
            isNewClient = false;
          }}
          style="outline"
          isAnimated={false}
        />
      </div>
    {/if}
  </div>
  <div class="field col-span-2">
    <label for="invoiceNumber">Invoice ID</label>
    <input type="number" name="invoiceNumber" required />
  </div>
  {#if isNewClient}
    <div class="field grid col-span-6 gap-x-5" transition:slide>
      <div class="field col-span-6">
        <label for="email">Client's Email</label>
        <input type="email" name="email" id="email" />
      </div>
      <div class="field col-span6">
        <label for="street">Street</label>
        <input type="text" name="street" id="street" />
      </div>

      <div class="field col-span2">
        <label for="city">City</label>
        <input type="text" name="city" id="city" />
      </div>
      <div class="field col-span2">
        <label for="state">State</label>
        <select name="state" id="state">
          <option />
          {#each states as state}
            <option value={state.value}>{state.name}</option>
          {/each}
        </select>
      </div>
      <div class="field col-span2">
        <label for="zip">Zip</label>
        <input type="text" name="zip" id="zip" />
      </div>
    </div>
  {/if}
  <div class="field col-span-2">
    <label for="dueDate">Due Date</label>
    <input type="date" name="dueDate" min={today} required />
  </div>

  <div class="field col-span-2 col-start-5">
    <label for="issueDate">Issue Date</label>
    <input type="date" name="issueDate" min={today} />
  </div>

  <div class="field col-span-6">
    <label for="subject">Subject </label>
    <input type="text" name="subject" />
  </div>

  <div class="field col-span-6">
    <LineItemRows {lineItems} on:addLineItem={addLineItem} on:removeLineItem={removeLineItem} />
  </div>
  <div class="field col-span-6">
    <label for="notes">Notes <span class="font-normal">(optional,display on invoice)</span></label>
    <textarea id="notes" name="notes" />
  </div>

  <div class="field col-span-6">
    <label for="terms">
      Terms <span class="font-normal">(optional, enter your terms and conditions)</span>
      <textarea name="terms" id="terms" />
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
    <Button style="secondary" label="Cancel" isAnimated={false} onClick={() => {}} />
    <button
      type="submit"
      class="button bg-lavenderIndigo text-white translate-y-0 hover:-translate-y-2 transition-all shadow-colored hover:shadow-coloredHover"
      >Save</button
    >
  </div>
</form>
