// Je sélectionne et je stocke
const btnGreen = document.getElementById('btn-green');
const btnBlue = document.getElementById('btn-blue');
const btnRed = document.getElementById('btn-red');
const title = document.getElementById('title');
const replay = document.getElementById('replay');

let count = 0;

// Je soumets à une action
const handleClick = () => {
  console.log('Le cercle a été cliqué');
};

const addRemove = (btn) => {
  handleClick(); // log commun

  if (btn === 'blue' || btn === 'green') {
    count += 1;
  } else if (btn === 'red') {
    count -= 1;
  }

  title.innerText = count;
};

// Écouteurs sur chaque bouton avec paramètre
btnGreen.addEventListener('click', () => {
  addRemove('green');
});

btnBlue.addEventListener('click', () => {
  addRemove('blue');
});

btnRed.addEventListener('click', () => {
  addRemove('red');
});

// Suppression automatique des cercles au bout de 10 sec
setTimeout(() => {
  btnBlue.remove();
  btnGreen.remove();
  btnRed.remove();
}, 15000);

// Lance une nouvelle partie

replay.addEventListener('click', () => {
  location.reload();
});
