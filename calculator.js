// calculator-v2.js

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function ask(q) { return new Promise(res => rl.question(q, res)); }
function toNum(n) { const x = Number(n); if (isNaN(x)) throw new Error("Invalid number."); return x; }

const operations = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => b === 0 ? "Error (divide by 0)" : a / b,
  "avg": (a, b) => (a + b) / 2
};

async function main() {
  console.log("===== CALCULATOR =====\n");

  while (true) {
    try {
      const n1 = toNum(await ask("Enter first number: "));
      const n2 = toNum(await ask("Enter second number: "));

      console.log("\nResults:");
      console.log(`${n1} + ${n2} = ${operations["+"](n1, n2)}`);
      console.log(`${n1} - ${n2} = ${operations["-"](n1, n2)}`);
      console.log(`${n1} * ${n2} = ${operations["*"](n1, n2)}`);
      console.log(`${n1} / ${n2} = ${operations["/"](n1, n2)}`);
      console.log(`Average of ${n1} and ${n2} = ${operations["avg"](n1, n2)}\n`);

      const cont = await ask("Do you want to continue? (y/n): ");
      if (cont.toLowerCase() !== "y") break;
      console.log("");

    } catch (err) {
      console.log("Error:", err.message, "\n");
    }
  }

  console.log("Goodbye!");
  rl.close();
}

main();
