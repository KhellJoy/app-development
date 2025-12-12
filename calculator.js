// app.js - console calculator

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(q) {
  return new Promise(resolve => rl.question(q, resolve));
}

function toNumber(x) {
  const n = Number(x);
  if (Number.isNaN(n)) throw new Error("Invalid number.");
  return n;
}

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero.");
  return a / b;
}
function average(a, b) { return (a + b) / 2; }

async function main() {
  console.log("===== CALCULATOR =====\n");

  while (true) {
    try {
      const n1 = toNumber(await ask("Enter first number: "));
      const n2 = toNumber(await ask("Enter second number: "));

      console.log("\nResults:");

      console.log(`${n1} + ${n2} = ${add(n1, n2)}`);
      console.log(`${n1} - ${n2} = ${subtract(n1, n2)}`);
      console.log(`${n1} * ${n2} = ${multiply(n1, n2)}`);
      console.log(`${n1} / ${n2} = ${divide(n1, n2)}`);
      console.log(`Average of ${n1} and ${n2} = ${average(n1, n2)}`);

      console.log();

      const again = await ask("Do you want to continue? (y/n): ");
      if (again.toLowerCase() !== "y") {
        console.log("\nGoodbye!");
        rl.close();
        return;
      }

      console.log("");

    } catch (err) {
      console.log("Error:", err.message, "\n");
    }
  }
}

main();
