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

//selec dom element
// const dom = document;
// const root = dom.getElementById("root");
// const dispaly = dom.getElementById("cs_display");
// const colorGenerateBtn = dom.getElementById("generateRandomColor");
// const hexCopyBtn = dom.getElementById("hexCopyBtn");
// const rgbCopyBtn = dom.getElementById("rgbCopyBtn");
// const hexInput = dom.getElementById("hexInput");
// const rgbInput = dom.getElementById("rgbInput");
// const redInputRange = dom.getElementById("redInputRange");
// const redInputRangeLabel = dom.getElementById("redInputRangeLabel");
// const greenInputRange = dom.getElementById("greenInputRange");
// const greenInputRangeLabel = dom.getElementById("greenInputRangeLabel");
// const blueInputRange = dom.getElementById("blueInputRange");
// const blueInputRangeLabel = dom.getElementById("blueInputRangeLabel");

// Globals
let toastDiv = null;

// onload handler
window.onload = () => {
  main();
};

// main function this function will take care of getting all the DOM references
function main() {
  // const root = document.getElementById("root");
  // const changeBtn = document.getElementById("change-btn");
  // const output = document.getElementById("cs_display");
  // const output2 = document.getElementById("cs_display2");
  // const copyBtn = document.getElementById("copy-btn");
  // const copyBtn2 = document.getElementById("copy-btn-2");
  const generateRandomColor = document.getElementById("generateRandomColor");

  generateRandomColor.addEventListener("click", handleGenerateRandomColorBtn);

  // copyBtn.addEventListener("click", () => {
  //   // toastDiv will be empty when click
  //   if (toastDiv !== null) {
  //     toastDiv.remove();
  //     toastDiv = null;
  //   }

  //   if (isValidHax(output.value)) {
  //     generateToastMessage(`#${output.value} Copied`);
  //     navigator.clipboard.writeText(`${output.value}`);
  //   } else {
  //     alert("Invalid color");
  //   }
  // });

  // copyBtn2.addEventListener("click", () => {
  //   // toastDiv will be empty when click
  //   if (toastDiv !== null) {
  //     toastDiv.remove();
  //     toastDiv = null;
  //   }

  //   if (isValidHax(output.value)) {
  //     generateToastMessage(`${output2.value} Copied`);
  //     navigator.clipboard.writeText(`${output2.value}`);
  //   } else {
  //     alert("Invalid color");
  //   }
  // });

  // output.addEventListener("keyup", (e) => {
  //   const color = e.target.value;
  //   if (color) {
  //     output.value = color.toUpperCase();
  //     if (isValidHax(color)) {
  //       root.style.backgroundColor = `#${color}`;
  //       output2.value = hexToRgb(color);
  //     }
  //   }
  // });
}

// Event handler
const handleGenerateRandomColorBtn = () => {
  const color = generateColorDecimal();
  updateColorCodeToDom(color);
};

// DOM functions
// /**
//  * take string or integer value and generate the toast message then update the dom
//  * @param {string} msg
//  */
// const generateToastMessage = (msg) => {
//   toastDiv = document.createElement("div");
//   toastDiv.innerText = msg;

//   // add class with this div
//   toastDiv.className = "toast-message toast-message-slide-in";

//   toastDiv.addEventListener("click", () => {
//     toastDiv.classList.remove("toast-message-slide-in");
//     toastDiv.classList.add("toast-message-slide-out");
//     // when toast-message-slide-out animation will end then the toastDiv wil be removed
//     toastDiv.addEventListener("animationend", () => {
//       toastDiv.remove();
//       toastDiv = null;
//     });
//   });

//   document.body.appendChild(toastDiv);
// };

/**
 * update dom elements with calculated color valus
 * @param {object} color
 */
const updateColorCodeToDom = (color) => {
  const hexColor = generateHEXColor(color);
  const rgbColor = generateRGBColor(color);

  document.getElementById("cs_display").style.backgroundColor = hexColor;
  document.getElementById("hexInput").value = hexColor.substring(1);
  document.getElementById("rgbInput").value = rgbColor;
  document.getElementById("redInputRange").value = color.red;
  document.getElementById("redInputRange").style.backgroundColor = color.red;
  document.getElementById("redInputRangeLabel").innerText = color.red;
  document.getElementById("greenInputRange").value = color.green;
  document.getElementById("greenInputRangeLabel").innerText = color.green;
  document.getElementById("blueInputRange").value = color.blue;
  document.getElementById("blueInputRangeLabel").innerText = color.blue;
};

//===================Utils functions===================
/**
 * generate and return an object of three color decimal value
 * @returns {object}
 *
 */
const generateColorDecimal = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return {
    red,
    green,
    blue,
  };
};

/**
 * take a colro object of three decimal vlaue and return a hexadecimal color code
 * @param {object} color
 * @returns {string}
 */
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

/**
 * take a colro object of three decimal vlaue and return a rgb color code
 * @param {object} color
 * @returns {string}
 */
const generateRGBColor = ({ red, green, blue }) => {
  return `rgb(${red}, ${green} ,${blue})`;
};

/**
 * convert hex color to decimal colors object
 * @param {string} hex
 * @returns {Object}
 */
const hexToDecimalColors = (hex) => {
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4), 16);
  return {
    red,
    green,
    blue,
  };
};

/**
 * validate hex color code
 * @param {string} color
 * @returns {boolean}
 */
// const isValidHax = (color) => {
//   if (color.length !== 6) return false;
//   return /^[0-9A-Fa-f]{6}$/i.test(color);
// };
