"use strict";

// 5.1 - 5.3: Validation & Shallow Equality
function checkArrayBasics() {
  const a = [1, 2, 3];
  const b = [1, 2, 3];
  const isArr = Array.isArray(a); // 5.1

  // 5.3: Manual comparison for content equality
  const isEqual =
    a.length === b.length && a.every((val, index) => val === b[index]);

  document.getElementById("out-basics").innerText =
    `> Is Array? ${isArr}\n> [1,2,3] === [1,2,3]? ${a === b} (Ref)\n> Content Equal? ${isEqual}`;
}

// 5.4 - 5.6: Destructuring & Cloning
function handleSpread() {
  const fruits = ["Apple", "Mango", "Orange", "Banana"];

  // 5.6: Cloning (Shallow)
  const clone = [...fruits];

  // 5.4: Destructuring
  const [first, second, ...others] = clone;

  document.getElementById("out-spread").innerText =
    `> First: ${first}\n> Others: ${others.join(", ")}\n> Clone Success: ${clone !== fruits}`;
}

// 5.9: Filter
function runFilter() {
  const input = document.getElementById("filterInput").value;
  const arr = input.split(",").map((s) => s.trim());

  // 5.9: Filtering logic
  const filtered = arr.filter((item) => item.toLowerCase().startsWith("a"));

  document.getElementById("out-filter").innerText =
    `> Starts with 'A': [${filtered}]`;
}

// 5.11: Removing Duplicates (The Set Trick)
function removeDups() {
  const input = document.getElementById("dupInput").value;
  const arr = input.split(",").map((s) => s.trim());

  // 5.11: Using Set for uniqueness
  const unique = [...new Set(arr)];

  document.getElementById("out-dups").innerText = `> Unique Array: [${unique}]`;
}

// 5.12: Flattening
function flattenArray() {
  const deep = [1, [2, [3, 4]]];
  // 5.12: flat(depth)
  const flat = deep.flat(2);

  document.getElementById("out-flat").innerText =
    `> Result: ${JSON.stringify(flat)}`;
}

// 5.17 - 5.18: Map & Reduce Pipeline
function runPipeline() {
  const numbers = [10, 5, 20, 15];

  // 5.17: Map (Double the numbers)
  const doubled = numbers.map((n) => n * 2);

  // 5.16: Sort (Numeric)
  const sorted = [...doubled].sort((a, b) => a - b);

  // 5.18: Reduce (Sum)
  const sum = sorted.reduce((acc, curr) => acc + curr, 0);

  // 5.19: Every/Some test
  const allOver10 = numbers.every((n) => n > 4);

  document.getElementById("out-pipeline").innerText =
    `> Original: [${numbers}]\n` +
    `> Doubled: [${doubled}]\n` +
    `> Sorted: [${sorted}]\n` +
    `> Sum Total: ${sum}\n` +
    `> All items > 4? ${allOver10}`;
}
