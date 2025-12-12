// calculator-v3.js

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function ask(q) { return new Promise(res => rl.question(q, res)); }

class Calculator {
  constructor(a, b) { this.a = a; this.b = b; }
  add() { return this.a + this.b; }
  subtract() { return this.a - this.b; }
  multiply() { return this.a * this.b; }
  divide() { if (this.b === 0) throw new Error("Cannot divide by zero."); return this.a / this.b; }
  average() { return (this.a + this.b) / 2; }
}

async function main() {
  console.log("===== CALCULATOR =====\n");

  while (true) {
    try {
      const a = Number(await ask("Enter first number: "));
      const b = Number(await ask("Enter second number: "));
      if (isNaN(a) || isNaN(b)) throw new Error("Invalid number.");

      const calc = new Calculator(a, b);

      console.log("\nResults:");
      console.log(`${a} + ${b} = ${calc.add()}`);
      console.log(`${a} - ${b} = ${calc.subtract()}`);
      console.log(`${a} * ${b} = ${calc.multiply()}`);
      console.log(`${a} / ${b} = ${b === 0 ? "Error (divide by 0)" : calc.divide()}`);
      console.log(`Average of ${a} and ${b} = ${calc.average()}\n`);

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
