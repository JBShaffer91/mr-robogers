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

const mrRogersGifs = [
  'https://ww2.kqed.org/pop/wp-content/uploads/sites/12/2019/01/mr-rogers-hip-hop-jacket.gif',
  'https://i.pinimg.com/originals/00/ae/9b/00ae9b697062c8e3aded220062fd17a5.gif',
  'https://media3.giphy.com/media/iHs6YQrxw0Es1R8KGx/giphy.gif',
  'https://media2.giphy.com/media/3pZ9KPT56sy3xd375H/giphy.gif',
  'https://media2.giphy.com/media/sczSE6UkynwiY/giphy.gif',
  'https://media.tenor.com/BdfF_1ipKccAAAAC/sweater-put-on-sweaters.gif',
  'https://i.pinimg.com/originals/d2/bf/13/d2bf13b4e748ba530c9561fcc6cff471.gif',
  'https://www.mandatory.com/assets/uploads/2018/02/rogers-pans.gif',
  'https://media4.giphy.com/media/xTeV7NOmYty0kpuuCQ/200.gif?cid=ecf05e47f3nc3aokq60tngdnsl7uxmfg99dlpshrcsvudrq7&rid=200.gif&ct=g',
];

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

  const gifContainer = document.getElementById('gif-container');
  const randomGifIndex = Math.floor(Math.random() * mrRogersGifs.length);
  const randomGifUrl = mrRogersGifs[randomGifIndex];
  gifContainer.innerHTML = `<img src="${randomGifUrl}" alt="Mr. Rogers">`;

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