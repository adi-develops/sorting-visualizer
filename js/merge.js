async function merge(bars, mid, l, r) {
  let i = l,
    j = mid + 1,
    k = 0;

  const aux = new Array(r - l + 1);

  while (i <= mid && j <= r) {
    if (parseInt(bars[i].style.height) <= parseInt(bars[j].style.height)) {
      aux[k] = bars[i].style.height;
      i++;
      k++;
    } else {
      aux[k] = bars[j].style.height;
      j++;
      k++;
    }
  }

  while (i <= mid) {
    aux[k] = bars[i].style.height;
    i++;
    k++;
  }
  while (j <= r) {
    aux[k] = bars[j].style.height;
    j++;
    k++;
  }

  for (let i = l, j = 0; i <= r; i++, j++) {
    bars[i].style.background = "red";
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, delay)
    );
    bars[i].style.height = aux[j];
    bars[i].style.background = "cyan";
  }
}

async function merge_sort(bars, l, r) {
  let mid = Math.floor((l + r) / 2);
  if (l < r) {
    await merge_sort(bars, l, mid);
    await merge_sort(bars, mid + 1, r);
    await merge(bars, mid, l, r);
  }
}

document.getElementById("merge").addEventListener("click", async () => {
  buttons = document.querySelectorAll(".sort");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
  document.getElementById("array_size").disabled = true;

  let bars = document.querySelectorAll(".bar");
  await merge_sort(bars, 0, bars.length - 1);

  for(let i=0; i<bars.length; i++){
    await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }));
    bars[i].style.background = "green";
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }
  document.getElementById("array_size").disabled = false;
});
