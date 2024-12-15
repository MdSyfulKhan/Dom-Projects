/**
 * Project Requirment
 * Change the background color by generating random rgb color by clicking a button
 * Also display the hex code to a disibled input field
 * **/

// step 1 - create onload handler #Done
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const changeBtn = document.getElementById("change-btn");
  const input = document.getElementById("cs-input-field");

  changeBtn.addEventListener("click", () => {
    const bgColor = generateHEXColor();
    input.value = bgColor;
    root.style.backgroundColor = bgColor;
  });
}

// step 2 - random color generator function
const generateHEXColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const hexColor = `#${red.toString(16)}${green.toString(16)}${green.toString(
    16
  )}`;
  return hexColor;
};

// step 3 - collect all necessary references #Done

// step 4 - handle the click event
