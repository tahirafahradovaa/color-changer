const input = document.querySelector("#input-line");
const copyBtn = document.querySelector(".copy");
const button = document.querySelector(".btn");
let hexCode = "#";
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//with hex color
button.addEventListener("click", function () {
  for (let i = 0; i <= 6; i++) {
    const index = Math.floor(Math.random() * hex.length);
    hexCode += hex[index];
    document.body.style.backgroundColor = hexCode;
    input.value = hexCode;
  }
  hexCode = "#";
});
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(input.value);
  alert("Copied to Clipboard");
});

// with rgb colors
// button.addEventListener('click', function () {
//     const newColor = makeRandColor();
//     document.body.style.backgroundColor = newColor;
//     input.value = newColor;
// })

//     const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }
