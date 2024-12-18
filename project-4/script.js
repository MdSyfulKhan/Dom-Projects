/**
 * Project Requirment
 * Change the background color by generating random rgb color by clicking a button
 * Also display the hex code to a disibled input field
 * Add a button to copy the color code
 * Add a toast messege when copy
 * **/

// Globals
let toastDiv = null;

// step 1 - create onload handler #Done
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const changeBtn = document.getElementById("change-btn");
  const output = document.getElementById("cs_display");
  const copyBtn = document.getElementById("copy-btn");

  changeBtn.addEventListener("click", () => {
    const bgColor = generateHEXColor();
    output.value = bgColor;
    root.style.backgroundColor = bgColor;
  });

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(output.value);

    // toastDiv will be empty when click
    if (toastDiv !== null) {
      toastDiv.remove();
      toastDiv = null;
    }

    generateToastMessage(`${output.value} Copied!`);
  });
}

// step 2 - random color generator function
const generateHEXColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const hexColor = `#${red.toString(16)}${green.toString(16)}${blue.toString(
    16
  )}`;
  return hexColor;
};

const generateToastMessage = (msg) => {
  toastDiv = document.createElement("div");
  toastDiv.innerText = msg;

  // add class with this div
  toastDiv.className = "toast-message toast-message-slide-in";

  toastDiv.addEventListener("click", () => {
    toastDiv.classList.remove("toast-message-slide-in");
    toastDiv.classList.add("toast-message-slide-out");
    // when toast-message-slide-out animation will end then the toastDiv wil be removed
    toastDiv.addEventListener("animationend", () => {
      toastDiv.remove();
      toastDiv = null;
    });
  });

  document.body.appendChild(toastDiv);
};

// step 3 - collect all necessary references #Done

// step 4 - handle the click event #Done

// step 5 - handle the copy button click event #Done

// step 6 - activate toast message #Done

// step 7 - create dynamic toast message #Done

// step 8 - clear toast message
