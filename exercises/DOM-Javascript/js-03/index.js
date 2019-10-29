const size = 9;
//GENERATING GRID
const grid = document.createElement("div");
grid.classList.add("grid");
console.log(grid);
for (let i = 0; i < size; i++) {
  //CREATE ROW
  const row = document.createElement("div");
  row.classList.add("row");
  console.log(row);
  //CREATING CELLS
  for (let j = 0; j < size; j++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    console.log(cell);
    cell.textContent = `${i},${j}`;
    row.appendChild(cell);
  }
  grid.appendChild(row);
}
document.body.appendChild(grid);

//FILLING DIAGONALS
for (let i = 0; i < size; i++) {
  const row = document.querySelectorAll(".row")[i];
  console.log(row);
  const cell = row.querySelectorAll(".cell")[i];
  const cell2 = row.querySelectorAll(".cell")[size - 1 - i];
  cell.classList.add("fill");
  cell2.classList.add("fill");
}
document.querySelectorAll(".cell").forEach(element => {
  element.addEventListener("click", e => {
    e.target.style.color = "black";
  });
});
