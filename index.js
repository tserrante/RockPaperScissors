let choices = ['rock', 'paper', 'scissors'];

function computerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {

    if (typeof playerChoice === 'string') {
        playerChoice.toLowerCase();
        if (playerChoice.toLowerCase() === 'scissors' && computerChoice === 'paper')
            return 'You Win!';
        if (playerChoice === 'scissors' && computerChoice === 'rock')
            return 'You Lose!';
        if (playerChoice === 'scissors' && computerChoice === 'scissors')
            return 'Tie!';

        if (playerChoice === 'paper' && computerChoice === 'rock')
            return 'You Win!';
        if (playerChoice === 'paper' && computerChoice === 'scissors')
            return 'You Lose!';
        if (playerChoice === 'paper' && computerChoice === 'paper')
            return 'Tie!';

        if (playerChoice === 'rock' && computerChoice === 'scissors')
            return 'You Win!';
        if (playerChoice === 'rock' && computerChoice === 'paper')
            return 'You Lose!';
        if (playerChoice === 'rock' && computerChoice === 'rock')
            return 'Tie!';
        else
            return playerChoice + ' is not a valid piece.';
    } else {
        return "Unrecognized input, please input 'rock', 'paper', or 'scissors'"
    }
}


const playerSelection = 'dorp';
const computerSelection = computerChoice();

console.log('You: ' + playerSelection + '\n' +
    'Opponent: ' + computerSelection + '\n' +
    playRound(playerSelection, computerSelection));