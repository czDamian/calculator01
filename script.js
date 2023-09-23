const input = document.getElementById('input');
const output = document.getElementById('output');


// add input
function addToInput(value){
  input.value += value;
}
// clear input and output
function clearInput(){
  input.value = '';
  output.value = '';
}
// delete last input
function deleteInput(){
  let currentInput = input.value;
  input.value = currentInput.slice(0, -1);
}

// display output
function calculateOutput(){
  try {
    output.value = eval(input.value);
  } catch (error) {
    output.value = 'err'
  }
}