/**
 * Project Requirment
 * Change the background color by generating random rgb color by clicking a button
 * Also display the hex code to a disibled input field
 * Add a button to copy the color code
 * Add a toast messege when copy
 * User can type their own hex code too
 * If hex code valid then it will be copy otherwise throw an error
 * Input field text will be capitalize
 * **/

// Globals
let toastDiv = null;

window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const changeBtn = document.getElementById("change-btn");
  const output = document.getElementById("cs_display");
  const copyBtn = document.getElementById("copy-btn");

  changeBtn.addEventListener("click", () => {
    const color = generateHEXColor();
    output.value = color.substring(1);
    root.style.backgroundColor = color;
  });

  copyBtn.addEventListener("click", () => {
    // toastDiv will be empty when click
    if (toastDiv !== null) {
      toastDiv.remove();
      toastDiv = null;
    }

    if (isValidHax(output.value)) {
      generateToastMessage(`#${output.value} Copied`);
      navigator.clipboard.writeText(`${output.value}`);
    } else {
      alert("Invalid color");
    }
  });

  output.addEventListener("keyup", (e) => {
    const color = e.target.value;
    if (color) {
      output.value = color.toUpperCase();
      if (isValidHax(color)) {
        root.style.backgroundColor = `#${color}`;
      }
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
  if (color.length !== 6) return false;
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
