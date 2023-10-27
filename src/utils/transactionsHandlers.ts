export function handleSetData(event: React.ChangeEvent<HTMLInputElement>) {
  return event.target.value;
}

export function handleSetCategory(event: React.ChangeEvent<HTMLSelectElement>) {
  return event.target.value;
}

export function handleSetDescription(
  event: React.ChangeEvent<HTMLInputElement>
) {
  return event.target.value;
}

export function handleSetAmount(event: React.ChangeEvent<HTMLInputElement>) {
  return Number(event.target.value);
}
