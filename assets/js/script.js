// add event listener to the calculate button
document.getElementById('calculateBtn').addEventListener("click", calculateVolume);

// getters
const resultElement = document.getElementById("result");

/**
 * main function to calculate volume
 */
function calculateVolume() {
    const length = getInputValue("length");
    const width = getInputValue("width");
    const height = getInputValue("height");

    if (!validateInputs(length, width, height)) {
        resultElement.textContent = "Please enter valid positive numbers";
        resultElement.classList.remove("text-success");
        resultElement.classList.add("text-danger");
        return;
    }

    const volume = computeVolume(length, width, height);
    displayVolume(volume);

    
}

/**
 * Uses the input parameter to get the elements value and parses it into a 
 * float and returns it
 * @param {string} inputId 
 * @returns Float
 */
function getInputValue(inputId) {
    return parseFloat(document.getElementById(inputId).value);
}

function validateInputs(length, width, height) {
    return !isNaN(length) && length > 0 &&
           !isNaN(width) && width > 0 &&
           !isNaN(height) && height > 0;
}

function computeVolume(length, width, height) {
    return length * width * height;
}

function displayVolume(volume) {
    resultElement.textContent = `The volume is ${volume.toFixed(2)} cubic cm.`;
    resultElement.classList.remove("text-danger");
    resultElement.classList.add("text-success");
}