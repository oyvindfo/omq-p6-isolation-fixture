import assert from "node:assert/strict";
import test from "node:test";

import { applyOperations } from "../src/apply-operations.js";

test("applies synthetic operations in order", () => {
  assert.equal(
    applyOperations(2, [
      { kind: "add", value: 3 },
      { kind: "multiply", value: 4 },
    ]),
    20,
  );
});

test("rejects an unknown synthetic operation", () => {
  assert.throws(() => applyOperations(1, [{ kind: "delete", value: 1 }]), /unsupported operation/);
});
