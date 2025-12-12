// calculator-v4.js - handles multiple numbers

const readline = require("readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function ask(q) { return new Promise(res => rl.question(q, res)); }

function toNum(n) { 
  const x = Number(n); 
  if (isNaN(x)) throw new Error("Invalid number."); 
  return x; 
}

function add(nums) { return nums.reduce((a, b) => a + b, 0); }
function subtract(nums) { return nums.slice(1).reduce((a, b) => a - b, nums[0]); }
function multiply(nums) { return nums.reduce((a, b) => a * b, 1); }
function divide(nums) {
  return nums.slice(1).reduce((a, b) => {
    if (b === 0) throw new Error("Cannot divide by zero.");
    return a / b;
  }, nums[0]);
}

function average(nums) { return add(nums) / nums.length; }

function formatExpression(nums, operator, result) {
  return nums.join(` ${operator} `) + ` = ${result}`;
}

async function main() {
  console.log("===== CALCULATOR =====\n");

  while (true) {
    try {
      const input = await ask("Enter numbers separated by space (ex: 5 10 2): ");
      const nums = input.split(/\s+/).map(toNum);

      console.log("\nResults:");
      console.log(formatExpression(nums, "+", add(nums)));
      console.log(formatExpression(nums, "-", subtract(nums)));
      console.log(formatExpression(nums, "*", multiply(nums)));
      console.log(formatExpression(nums, "/", divide(nums)));
      console.log(`Average of [${nums.join(", ")}] = ${average(nums)}\n`);

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
