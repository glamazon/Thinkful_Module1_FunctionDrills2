function beyond(num) {
  if (!Number.isFinite(num)) return "And beyond";
  if (num > 0) return "To infinity.";
  if (num < 0) return "To negative infinity";
  if (num === 0) return "Staying home.";
}

let output = beyond(200);
console.log(output);