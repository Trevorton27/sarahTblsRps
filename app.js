const rock = document.getElementById('canvas-1');
const paper = document.getElementById('canvas-2');
const scissors = document.getElementById('canvas-3');

rock.addEventListener('click', () => compareChoices('rock'));
paper.addEventListener('click', () => compareChoices('paper'));
scissors.addEventListener('click', () => compareChoices('scissors'));

function getComputerChoice() {
  let elements = ['rock', 'paper', 'scissors'];
  let computersChoice = elements[Math.floor(Math.random() * elements.length)];
  return computersChoice;
}

function compareChoices(usersChoice) {
  const computersChoice = getComputerChoice();

  console.log(computersChoice);
  const choice = document.querySelector('.computersChoice');
  const result = document.querySelector('.result');

  switch (usersChoice + computersChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      choice.textContent = `The computer chose: ${computersChoice}`;
      result.textContent = 'You Won!';
      result.style.color = 'green';
      break;
    case 'scissorsrock':
    case 'rockpaper':
    case 'paperscissors':
      choice.textContent = `The computer chose: ${computersChoice}`;
      result.textContent = 'Sorry you lost!';
      result.style.color = 'red';
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      choice.textContent = `The computer chose: ${computersChoice}`;
      result.textContent = 'Stalemate';
      result.style.color = 'blue';
      break;
    default:
      return;
  }
}
