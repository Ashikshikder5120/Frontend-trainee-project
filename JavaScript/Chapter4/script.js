"use strict";

// 4.1 Getting pieces of date information
function recipe41() {
  const today = new Date();
  const out = document.getElementById("out41");

  const year = today.getFullYear();
  const month = today.getMonth(); // 0-indexed
  const date = today.getDate();
  const hours = today.getHours();
  const mins = today.getMinutes().toString().padStart(2, "0");

  out.innerText = `> Full Year: ${year}
> Month (0-11): ${month}
> Day of Month: ${date}
> Current Time: ${hours}:${mins}`;
}

// 4.3 Adding Days to a Date (Mutable behavior)
function recipe43() {
  const days = parseInt(document.getElementById("daysToAdd").value);
  const out = document.getElementById("out43");

  const futureDate = new Date(); // Current date
  // Logic: setDate rolls over months/years automatically
  futureDate.setDate(futureDate.getDate() + days);

  out.innerText = `> Original: ${new Date().toDateString()}
> Modified: ${futureDate.toDateString()}
> (${days > 0 ? "Future" : "Past"} target reached)`;
}

// 4.5 Calculating Time Elapsed
function recipe45() {
  const startStr = document.getElementById("dateStart").value;
  const endStr = document.getElementById("dateEnd").value;
  const out = document.getElementById("out45");

  const start = new Date(startStr);
  const end = new Date(endStr);

  // Difference in milliseconds
  const diffInMs = end - start;

  // Convert to days: 1000ms * 60s * 60m * 24h
  const msPerDay = 1000 * 60 * 60 * 24;
  const diffInDays = Math.trunc(diffInMs / msPerDay);

  out.innerText = `> Elapsed Time: ${diffInDays} Days
> (Approx ${Math.floor(diffInDays / 30)} Months)`;
}

// 4.6 Formatting with Intl.DateTimeFormat
function recipe46() {
  const inputVal = document.getElementById("intlInput").value;
  const locale = document.getElementById("localeSelect").value;
  const out = document.getElementById("out46");

  if (!inputVal) {
    out.innerText = "> Error: Please select a date first!";
    return;
  }

  const dateObj = new Date(inputVal);

  // Recipe logic: Advanced options for display
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const formatted = new Intl.DateTimeFormat(locale, options).format(dateObj);
  out.innerText = `> Locale [${locale}]: 
  ${formatted}`;
}
