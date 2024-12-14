let displayValue = "";

const append = (value) => {
  const lastChar = displayValue[displayValue.length - 1];
  const operators = ["+", "-", "*", "/"];

  // Prevent consecutive operators or starting with an operator
  if (operators.includes(value) && (displayValue === "" || operators.includes(lastChar))) {
    return;
  }

  displayValue += value; // Append the value
  updateDisplay();
};

const calculate = () => {
  try {
    displayValue = eval(displayValue).toString();
  } catch {
    displayValue = "Error";
  }
  updateDisplay();
};

const clearDisplay = () => {
  displayValue = "";
  updateDisplay();
};

const updateDisplay = () => {
  document.getElementById("display").value = displayValue;
};
