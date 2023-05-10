async function selection_sort() {
  let bars = document.querySelectorAll(".bar");
  let min;
  for (let i = 0; i < bars.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < bars.length; j++) {
      if (parseInt(bars[j].style.height) < parseInt(bars[min].style.height)) {
        min = j;
      }
    }

    bars[min].style.background = "red";
    bars[i].style.background = "red";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    swap(bars[i], bars[min]);
    bars[min].style.background = "rgb(209, 209, 17)";
    bars[i].style.background = "rgb(209, 209, 17)";
    bars[i].style.background = "green";
  }
  bars[bars.length - 1].style.background = "green";
}

document.getElementById("selection").addEventListener("click", async () => {
  buttons = document.querySelectorAll(".sort");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
  document.getElementById("array_size").disabled = true;
  await selection_sort();
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
  document.getElementById("array_size").disabled = false;
});
