export const sumLineItem = (lineItem: LineItem[] | undefined): number => {
  if (!lineItem) return 0;
  return lineItem.reduce((acc, cur ) => acc+cur.amount , 0)
}

export const centsToDollars = (cents: number): string => {
  const dollars = cents / 100
  const addDecimals  = twoDecimal(dollars)
  return addThousandsSeparator(addDecimals)
}

export const twoDecimal = (num: number): string => {
  return num.toFixed(2)
}

export const addThousandsSeparator = (num: string): string => {
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const sumInvoice = (invoices: Invoice[] | undefined): number => {
  if(!invoices) return 0;
  return invoices.reduce((acc, cur) => acc + sumLineItem(cur.lineItems), 0)

}