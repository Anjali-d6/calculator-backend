
const assert = require("node:assert/strict");

async function testAddition() {
  const response = await fetch(`${process.env.API_URL || "http://localhost:5000"}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      num1: 10,
      num2: 5,
    }),
  });

  const data = await response.json();

  assert.equal(response.status, 200);
  assert.equal(data.result, 15);

  console.log(" Addition test passed!");
}

testAddition().catch((error) => {
  console.error("❌ Addition test failed:", error.message);
  process.exitCode = 1;
});
async function testSubtraction() {
  const response = await fetch(`${process.env.API_URL || "http://localhost:5000"}/sub`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      num1: 10,
      num2: 5,
    }),
  });

  const data = await response.json();

  assert.equal(response.status, 200);
  assert.equal(data.result, 5);

  console.log(" Subtraction test passed!");
}

testSubtraction().catch((error) => {
  console.error("❌ Subtraction test failed:", error.message);
  process.exitCode = 1;
});
async function testMultiplication() {
  const response = await fetch(`${process.env.API_URL || "http://localhost:5000"}/mul`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      num1: 10,
      num2: 5,
    }),
  });

  const data = await response.json();

  assert.equal(response.status, 200);
  assert.equal(data.result, 50);

  console.log(" Multiplication test passed!");
}

testMultiplication().catch((error) => {
  console.error("❌ Multiplication test failed:", error.message);
  process.exitCode = 1;
});
async function testDivision() {
  const response = await fetch(`${process.env.API_URL || "http://localhost:5000"}/div`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      num1: 10,
      num2: 5,
    }),
  });

  const data = await response.json();

  assert.equal(response.status, 200);
  assert.equal(data.result, 2);

  console.log(" Division test passed!");
}

testDivision().catch((error) => {
  console.error("❌ Division test failed:", error.message);
  process.exitCode = 1;
});