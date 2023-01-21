async function insertion_sort() {
    let bars = document.querySelectorAll(".bar");
  
    let j, key;
    for (let i = 1; i < bars.length; i++) {
      key = parseInt(bars[i].style.height);
      j = i - 1;
  
      while (j >= 0 && parseInt(bars[j].style.height) > key) {
        bars[j + 1].style.height = parseInt(bars[j].style.height) + "px";
        j = j - 1;
      }
  
      bars[i].style.background = "red";
      bars[j + 1].style.height = key + "px";
      bars[j + 1].style.background = "red";
  
      await new Promise((resolve) =>setTimeout(() => {resolve();}, delay));
  
      bars[i].style.background = "green";
      bars[j + 1].style.background = "green";
  
      bars[i - 1].style.background = "green";
    }
    bars[bars.length - 1].style.background = "green";
  }
  
  document.getElementById("insertion").addEventListener("click", async () => {
    buttons = document.querySelectorAll(".sort");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }
    document.getElementById("array_size").disabled = true;
    await insertion_sort();
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = false;
    }
    document.getElementById("array_size").disabled = false;
  });
  