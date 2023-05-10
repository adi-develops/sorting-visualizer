async function quick_sort(bars, low, high) {
  if (low < high) {
    const pivotIndex = await partition(bars, low, high);
    await Promise.all([
      quick_sort(bars, low, pivotIndex - 1),
      quick_sort(bars, pivotIndex + 1, high),
    ]);
  }
}

async function partition(bars, low, high) {
  const pivot = parseInt(bars[high].style.height);
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (parseInt(bars[j].style.height) < pivot) {
      i++;
      await swap_quick(bars, i, j);
    }
  }
  await swap_quick(bars, i + 1, high);
  return i + 1;
}

async function swap_quick(bars, i, j) {
  const temp = bars[i].style.height;
  bars[i].style.height = bars[j].style.height;
  bars[j].style.height = temp;
  bars[i].style.background = "red";
  bars[j].style.background = "red";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, delay)
  );
  bars[i].style.background = "cyan";
  bars[j].style.background = "cyan";
}

document.getElementById("quick").addEventListener("click", async () => {
  buttons = document.querySelectorAll(".sort");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
  document.getElementById("array_size").disabled = true;

  let bars = document.querySelectorAll(".bar");
  await quick_sort(bars, 0, bars.length - 1);

  for (let i = 0; i < bars.length; i++) {
    await new Promise((resolve) => setTimeout(resolve));
    bars[i].style.background = "green";
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
  document.getElementById("array_size").disabled = false;
});
