const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFranctionDigits: 2,
  maximumFractionDigits: 2,
});

export const formatCurrency = (value) => formatter.format(value);
