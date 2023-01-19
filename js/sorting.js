let arr_size = document.getElementById("array_size");

arr_size.addEventListener("input", randomize);

document.getElementById("random").addEventListener("click", randomize);

let speed_input = document.getElementById("speed");
let delay = 260;

speed_input.addEventListener("input", () => {
  delay = 320 - parseInt(speed_input.value);
});

randomize();

function randomize() {
  arr_size.disabled = false;

  buttons = document.querySelectorAll(".sort");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = false;
  }

  let no_of_bars = arr_size.value;
  let arr = [];
  let graph = document.getElementById("graph");

  while (graph.firstChild) {
    graph.removeChild(graph.firstChild);
  }

  for (let i = no_of_bars; i > 0; i--) {
    arr.push(Math.floor(Math.random() * 101) + 1);
  }

  for (let i = 0; i < no_of_bars; i++) {
    const element = document.createElement("div");
    element.classList.add("bar");
    element.style.height = arr[i] * 4 + "px";
    element.style.width = 600 / no_of_bars + "px";
    document.getElementById("graph").appendChild(element);
  }
}
