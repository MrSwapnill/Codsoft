let displayValue = '';

function appendValue(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function operation(operator) {
  if (displayValue !== '' && displayValue[displayValue.length - 1] !== operator) {
    appendValue(operator);
  }
}

function calculate() {
  let result;
  try {
    result = eval(displayValue);
    if (result === Infinity || isNaN(result)) {
      throw new Error('Invalid operation');
    }
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
  displayValue = '';
}


