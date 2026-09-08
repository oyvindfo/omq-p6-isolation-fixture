export function applyOperations(initial, operations) {
  return operations.reduce((value, operation) => {
    if (operation.kind === "add") return value + operation.value;
    if (operation.kind === "multiply") return value * operation.value;
    throw new Error(`unsupported operation: ${operation.kind}`);
  }, initial);
}
