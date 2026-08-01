"use strict";

// 2.1 Checking for Nonempty String
function recipe21() {
  const val = document.getElementById("input21").value;
  const out = document.getElementById("out21");

  // Logic: Ensure it's a string, not empty, and not just whitespace
  if (typeof val === "string" && val.trim().length > 0) {
    out.innerText = "> Valid String Detected";
    out.style.color = "var(--green)";
  } else {
    out.innerText = "> Error: Variable is empty or whitespace only";
    out.style.color = "var(--red)";
  }
}

// 2.2 Converting Numeric Value to Formatted String
function recipe22() {
  const num = parseFloat(document.getElementById("input22").value);
  const out = document.getElementById("out22");

  // Using Intl.NumberFormat for currency
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  out.innerText = `> Formatted Output: ${formatter.format(num)}`;
}

// 2.4 Analyzing Emojis (4-byte Unicode)
function recipe24() {
  const val = document.getElementById("input24").value;
  const out = document.getElementById("out24");

  // Shows the difference between visual characters and code units
  out.innerText = `> String: ${val}\n> JS Length property: ${val.length}`;
}

// 2.5 Template Literals
function recipe25() {
  const f = document.getElementById("fname").value || "John";
  const l = document.getElementById("lname").value || "Doe";
  const out = document.getElementById("out25");

  const message = `Employee ID Card:\n------------------\nName: ${f} ${l}\nJoined: ${new Date().getFullYear()}`;
  out.innerText = "> " + message;
}

// 2.6 Case-Insensitive Comparison
function recipe26() {
  const s1 = document.getElementById("comp1").value;
  const s2 = document.getElementById("comp2").value;
  const out = document.getElementById("out26");

  // localeCompare is the "bulletproof" way to compare
  const match =
    s1.localeCompare(s2, undefined, { sensitivity: "accent" }) === 0;
  out.innerText = `> Match Status: ${match ? "True (Equivalent)" : "False (Different)"}`;
}

// 2.10 Regex Replacement
function recipe210() {
  const text = document.getElementById("input210").value;
  const out = document.getElementById("out210");

  // Global regex looking for pattern: t-character-character-e
  const regex = /t\w{2}e/g;
  const result = text.replaceAll(regex, "place");

  out.innerText = `> Result: ${result}`;
}
