/**
 * Project Requirment
 * Change the background color by generating random rgb color by clicking a button
 *
 * **/

// step 1 - create onload handler #Done
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");

  btn.addEventListener("click", () => {
    const bgColor = generateRGBColor();
    root.style.backgroundColor = bgColor;
  });
}

// step 2 - random color generator function #Done
const generateRGBColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
};

// step 3 - collect all necessary references #Done

// step 4 - handle the click event #Done
