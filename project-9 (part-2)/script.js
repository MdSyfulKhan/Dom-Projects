/**
 * Project Requirment
 * **/

// Globals
let toastDiv = null;

// onload handler
window.onload = () => {
  main();
};

// main function this function will take care of getting all the DOM references
function main() {
  // references
  const generateRandomColor = document.getElementById("generateRandomColor");
  const hexInput = document.getElementById("hexInput");
  const redInputSlider = document.getElementById("redInputSlider");
  const greenInputSlider = document.getElementById("greenInputSlider");
  const blueInputSlider = document.getElementById("blueInputSlider");

  //event listeners function
  generateRandomColor.addEventListener("click", handleGenerateRandomColorBtn);
  hexInput.addEventListener("keyup", handleHexInput);
  redInputSlider.addEventListener(
    "change",
    handleColorSlider(redInputSlider, greenInputSlider, blueInputSlider)
  );
  greenInputSlider.addEventListener(
    "change",
    handleColorSlider(redInputSlider, greenInputSlider, blueInputSlider)
  );
  blueInputSlider.addEventListener(
    "change",
    handleColorSlider(redInputSlider, greenInputSlider, blueInputSlider)
  );

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
}

// Event handler
function handleGenerateRandomColorBtn() {
  const color = generateColorDecimal();
  updateColorCodeToDom(color);
}

function handleHexInput(e) {
  const hexColor = e.target.value;
  if (hexColor) {
    this.value = hexColor.toUpperCase();
    if (isValidHax(hexColor)) {
      const color = hexToDecimalColors(hexColor);
      updateColorCodeToDom(color);
    }
  }
}

function handleColorSlider(redInputSlider, greenInputSlider, blueInputSlider) {
  return function () {
    const color = {
      red: parseInt(redInputSlider.value),
      green: parseInt(greenInputSlider.value),
      blue: parseInt(blueInputSlider.value),
    };
    updateColorCodeToDom(color);
  };
}

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
  document.getElementById("redInputSlider").value = color.red;
  document.getElementById("redInputSliderLabel").innerText = color.red;
  document.getElementById("greenInputSlider").value = color.green;
  document.getElementById("greenInputSliderLabel").innerText = color.green;
  document.getElementById("blueInputSlider").value = color.blue;
  document.getElementById("blueInputSliderLabel").innerText = color.blue;
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
const isValidHax = (color) => {
  if (color.length !== 6) return false;
  return /^[0-9A-Fa-f]{6}$/i.test(color);
};
