// calculator-v1.js

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function ask(q) { return new Promise(res => rl.question(q, res)); }
const parseNum = n => { const x = Number(n); if (isNaN(x)) throw new Error("Invalid number."); return x; };

async function main() {
  console.log("===== CALCULATOR =====\n");

  while (true) {
    try {
      const a = parseNum(await ask("Enter first number: "));
      const b = parseNum(await ask("Enter second number: "));

      console.log(`${a} + ${b} = ${a + b}`);
      console.log(`${a} - ${b} = ${a - b}`);
      console.log(`${a} * ${b} = ${a * b}`);
      console.log(`${a} / ${b} = ${b === 0 ? "Error (divide by 0)" : a / b}`);
      console.log(`Average of ${a} and ${b} = ${(a + b) / 2}\n`);

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
