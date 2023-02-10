// Business logic
function getResultArray(input) {
  const resultArray = [];
  for (let i = 0; i <= input; i++) {
    const stringField = i.toString();
    if (stringField.includes('3')) {
      resultArray.push('Won\'t you be my neighbor?');
    } else if (stringField.includes('2')) {
      resultArray.push('Boop!');
    } else if (stringField.includes('1')) {
      resultArray.push('Beep!');
    } else {
      resultArray.push(i);
    }
  }
  return resultArray;
}

// UI logic
window.onload = function() {
  const form = document.getElementById('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let inputValue = document.getElementById('number').value;
    inputValue = inputValue ? parseInt(inputValue) : 0;
    const resultArray = getResultArray(inputValue);
    const output = document.getElementById('output');
    output.innerHTML = resultArray.join(', ');
  });
};
