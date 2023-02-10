// Business logic
function getResultArray(input) {
  const resultArray = [];
  for (let i = 1; i <= input; i++) {
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
    if (inputValue) {
      inputValue = parseInt(inputValue);
    } else {
      inputValue = 0;
    }
    const resultArray = getResultArray(inputValue);
    const output = document.getElementById('output');
    output.innerHTML = resultArray.join(', ');
  });

  const themeSwitch = document.querySelector('.theme-switch');
  function switchTheme(e) {
    if (e.target.checked) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
  themeSwitch.addEventListener('change', switchTheme);
};