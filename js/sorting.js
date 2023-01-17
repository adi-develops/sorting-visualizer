randomize();

document.getElementById("random").addEventListener("click", randomize);

function randomize() {
  let arr = [];
  let graph = document.getElementById("graph");

  while (graph.firstChild) {
    graph.removeChild(graph.firstChild);
  }

  for (let i = 100; i > 0; i--) {
    arr.push(Math.floor(Math.random() * 101) + 1);
  }
  console.log(arr.length);

  for (let i = 0; i < 100; i++) {
    const element = document.createElement("div");
    element.classList.add("bar");
    element.style.height = arr[i] * 4.5 + "px";
    document.getElementById("graph").appendChild(element);
  }
}
