export function handleCreateTransaction(date, category, description, amount) {
  const transactionFilled = {
    date,
    category,
    description,
    amount,
  };

  setTransaction(transactionFilled);
}
