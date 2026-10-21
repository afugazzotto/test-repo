let count = 0;
const countEl = document.getElementById("count");

document.getElementById("increment").addEventListener("click", () => {
  count += 1;
  countEl.textContent = count;
});

document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  countEl.textContent = count;
});
