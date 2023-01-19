function swap(e1, e2) {
  let temp = e1.style.height;
  e1.style.height = e2.style.height;
  e2.style.height = temp;
}

async function bubble_sort() {
  let bars = document.querySelectorAll(".bar");

  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
        bars[j].style.background = "red";
        bars[j + 1].style.background = "red";
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, delay)
        );
        swap(bars[j], bars[j + 1]);
        bars[j].style.background = "rgb(209, 209, 17)";
        bars[j + 1].style.background = "rgb(209, 209, 17)";
      }
    }
    bars[bars.length - i - 1].style.background = "green";
  }
  bars[0].style.background = "green";
}

document.getElementById("bubble").addEventListener("click", async () => {
  buttons = document.querySelectorAll(".sort");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
  document.getElementById("array_size").disabled = true;
  await bubble_sort();
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
  document.getElementById("array_size").disabled = false;
});
