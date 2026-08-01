"use strict";

// 3.1 Random Number Logic
function recipe31() {
  const min = parseInt(document.getElementById("minRange").value);
  const max = parseInt(document.getElementById("maxRange").value);
  const out = document.getElementById("out31");

  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  out.innerHTML = `> Generated: <span style="color:white">${result}</span>`;
}

// 3.3 Advanced Rounding Logic
function recipe33() {
  const num = parseFloat(document.getElementById("numToRound").value);
  const places = parseInt(document.getElementById("decimalPlaces").value);
  const out = document.getElementById("out33");

  const factor = Math.pow(10, places);
  const result = Math.round(num * factor) / factor;

  out.innerHTML = `> Result: <span style="color:white">${result}</span>`;
}

// 3.5 String Parsing
function recipe35(mode) {
  const val = document.getElementById("strInput").value;
  const out = document.getElementById("out35");
  let res = mode === "number" ? Number(val) : parseFloat(val);

  out.innerHTML = `> Method: ${mode}()\n> Value: <span style="color:white">${res}</span>\n> NaN? <span style="color:white">${isNaN(res)}</span>`;
}

// 3.9 BigInt Stress Test
function recipe39() {
  const out = document.getElementById("out39");
  const max = Number.MAX_SAFE_INTEGER;

  const bigX = BigInt(max);

  out.innerHTML = `
Standard Number Limit: ${max}
Adding 2 (Standard): <span style="color:#fb7185">${max + 2}</span> (Inaccurate)
Adding 2 (BigInt):   <span style="color:#10b981">${bigX + 2n}n</span> (Perfect Precision)
    `;
}
