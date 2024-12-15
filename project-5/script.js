/**
 * Project Requirment
 * Change the background color by generating random rgb color by clicking a button
 * Also display the hex code to a disibled input field
 * Add a button to copy the color code
 * Add a toast messege when copy
 * User can type their own hex code too
 * 
 * **/

// Globals
let toastDiv = null;

window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const changeBtn = document.getElementById("change-btn");
  const output = document.getElementById("cs-input-field");
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

    if (isValidHax(output.value)) {
      generateToastMessage(`${output.value} Copied`);
      navigator.clipboard.writeText(output.value);
    } else {
      alert("Invalid color");
    }
  });

  output.addEventListener("keyup", (e) => {
    const bgColor = e.target.value;
    if (bgColor && isValidHax(bgColor)) {
      root.style.backgroundColor = bgColor;
    }
  });
}

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
/**
 *
 * @param {string} color
 */

const isValidHax = (color) => {
  if (color.length !== 7) return false;
  if (color[0] !== "#") return false;

  color = color.substring(1);
  return /^[0-9A-Fa-f]{6}$/i.test(color);
};

// step 1 - create onload handler #Done
// step 2 - random color generator function #Done
// step 3 - collect all necessary references #Done
// step 4 - handle the click event #Done
// step 5 - handle the copy button click event #Done
// step 6 - activate toast message #Done
// step 7 - create dynamic toast message #Done
// step 8 - clear toast message #Done
// step 9 - create isValidHax function #Done
// step 10 - implement change handler on input field #Done
// step 11 - code will be copy when hex code will be valid #Done
// step # -
