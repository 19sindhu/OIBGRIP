let input = document.getElementById('result');

function insert(value) {
  input.value += value;
}

function clearScreen() {
  input.value = '';
}

function backspace() {
  input.value = input.value.slice(0, -1);
}

function calculate() {
  try {
    input.value = eval(input.value);
  } catch (error) {
    input.value = 'Error';
  }
}
