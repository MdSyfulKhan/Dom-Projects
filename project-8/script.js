/**
 * Project Requirment
 * Change the background color by generating random rgb color by clicking a button
 * Also display the hex code to a disibled input field
 * Add a button to copy the color code
 * Add a toast messege when copy
 * User can type their own hex code too
 * If hex code valid then it will be copy otherwise throw an error
 * Input field text will be capitalize
 * Show rgb color too, but do not need to edit it
 * User also copy rgb color
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
  const output2 = document.getElementById("cs_display2");
  const copyBtn = document.getElementById("copy-btn");
  const copyBtn2 = document.getElementById("copy-btn-2");

  changeBtn.addEventListener("click", () => {
    const colorDecimale = generateColorDecimale();
    const hex = generateHEXColor(colorDecimale);
    const rgb = generateRGBColor(colorDecimale);
    output.value = hex.substring(1);
    output2.value = rgb;
    root.style.backgroundColor = hex;
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

  copyBtn2.addEventListener("click", () => {
    // toastDiv will be empty when click
    if (toastDiv !== null) {
      toastDiv.remove();
      toastDiv = null;
    }

    if (isValidHax(output.value)) {
      generateToastMessage(`${output2.value} Copied`);
      navigator.clipboard.writeText(`${output2.value}`);
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
        output2.value = hexToRgb(color);
      }
    }
  });
}

const generateColorDecimale = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return {
    red,
    green,
    blue,
  };
};

const generateHEXColor = ({ red, green, blue }) => {
  const getTwoColor = (value) => {
    const hex = value.toString(16);
    return hex.length == 1 ? `0${hex}` : hex;
  };
  const hexColor = `#${getTwoColor(red)}${getTwoColor(green)}${getTwoColor(
    blue
  )}`.toUpperCase();
  return hexColor;
};

const generateRGBColor = ({ red, green, blue }) => {
  return `rgb(${red}, ${green} ,${blue})`;
};

/**
 *
 * @param {string} hex
 */

const hexToRgb = (hex) => {
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4), 16);
  return `rgb(${red}, ${green}, ${blue})`;
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
// step 12 - Refactor the color generator function  #Done
// step 13 - Update color code to display rgb colors #Done
// step 14 - Hex to Rgb function creation #Done
// step 15 - Update change handler #Done
// step 16 - Implement copy function #Done
