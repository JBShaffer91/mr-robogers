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

const mrRogersGifs = [
  'https://i.pinimg.com/originals/22/67/75/226775d1db05b6e3e0a6d9310ba176c2.gif',
  'https://thumbs.gfycat.com/ColossalWelloffBunting-size_restricted.gif',
  'https://blog.lootcrate.com/wp-content/uploads/2020/04/giphy.gif',
  'https://i.chzbgr.com/full/5395530752/h0DCD332B/looks-like-bob-ross-to-me',
  'https://media.giphy.com/media/8OJdqYqN1Nii3UTD6l/giphy.gif',
  'https://images.squarespace-cdn.com/content/v1/52652cf5e4b0469f698ba94d/1563475806449-4G9QSBQI35CMKRZNIGH6/bob03+%281%29.gif',
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