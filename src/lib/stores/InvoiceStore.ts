import { writable } from "svelte/store";

import data from "../../seed.json"
export const invoices = writable<Invoice[]>([]);

export const loadInvoices = async () => {
  // invoices.set([]);
  invoices.set(data.invoices);
}

export const deleteinvoice = async (id: string) => {
  const invoice = await invoices.update((invoices) => {
    return invoices.filter((invoice) => invoice.id !== id);
  });
  return invoice;
}