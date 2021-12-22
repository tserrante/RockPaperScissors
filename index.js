let choices = ['rock', 'paper', 'scissors'];

function computerSelection() {
    return choices[Math.floor(Math.random() * choices.length)];
}

console.log(computerSelection());
console.log(computerSelection());
console.log(computerSelection());
console.log(computerSelection());