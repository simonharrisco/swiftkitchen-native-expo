export const transactionMethods = {
  0: "Card Payment",
  10: "Direct Debit",
};

export const transactionStatus = {
  0: "Initialised",
  10: "Pending",
  20: "Success",
  "-10": "Failed",
};

export const transactionTypes = {
  "-10": "Refund",
  0: "Checkout TopUp",
  10: "Manual TopUp",
  20: "Initial Direct Debit",
  30: "Automatic Direct Debit",
};
