<script>
  import Button from '$lib/components/Button.svelte';
  import Trash from '$lib/components/Icon/Trash.svelte';
  import LineItemRows from './LineItemRows.svelte';

  const blankLineItem = [
    {
      id: '1',
      description: '',
      quantity: 0,
      amount: 0
    }
  ];
</script>

<h2 class=" mb-7 font-sansSerif text-3xl font-bold text-daisyBush">Add an invoice</h2>

<form class="grid grid-cols-6 gap-x-5">
  <div class="field col-span-2">
    <label for="client">Client</label>
    <select name="client" id="client">
      <option value="zeal">Zeal</option>
    </select>
  </div>

  <div class="field col-span-2 flex items-end gap-x-5">
    <div class=" text-base make-bold text-monsoon leading-[3.5rem] font-bold">or</div>
    <Button label="+ Client" onClick={() => {}} style="outline" isAnimated={false} />
  </div>

  <div class="field col-span-2">
    <label for="id">Invoice ID</label>
    <input type="number" name="id" />
  </div>

  <div class="field col-span-2">
    <label for="dueDate">Due Date</label>
    <input type="date" name="dueDate" />
  </div>

  <div class="field col-span-2 col-start-5">
    <label for="issueDate">Issue Date</label>
    <input type="date" name="issueDate" />
  </div>

  <div class="field col-span-6">
    <label for="subject">Subject </label>
    <input type="text" name="subject" />
  </div>

  <div class="field col-span-6">
    <LineItemRows lineItems={blankLineItem} />
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
    <Button label="Save" onClick={() => {}} />
  </div>
</form>
