function computerPlay() {
    let min = 0;
    let max = 3;

    return Math.round((Math.random() * (max - min)) + min);
}

function playRound(p, c) {

    p = p.toLowerCase();

    //  Tie conditions
    if (p === 'rock' && c === 'rock') {
        return 'Tie!';
    }
    if (p === 'paper' && c === 'paper') {
        return 'Tie!';
    }
    if (p === 'scissors' && c === 'scissors') {
        return 'Tie!';
    }

    //  Player win conditions
    if (p === 'rock' && c === 'scissors') {
        return 'Player Wins!';
    }
    if (p === 'paper' && c === 'rock') {
        return 'Player Wins!';
    }
    if (p === 'scissors' && c === 'paper') {
        return 'Player Wins!';
    }

    //  Player lose conditions
    if (p === 'rock' && c === 'paper') {
        return 'Computer Wins!';
    }
    if (p === 'paper' && c === 'scissors') {
        return 'Computer Wins!';
    }
    if (p === 'scissors' && c === 'rock') {
        return 'Computer Wins!';
    }

    return 'Invalid selection, round goes to opponent!';

}

function playGame() {
    let roundCount = 0;
    let playerSelection;
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;
    let tieCounter = 0;
    let choices = ['rock', 'paper', 'scissors'];

    while (roundCount < 10) {

        playerSelection = prompt("Rock, Paper, Scissors?");
        computerSelection = choices[computerPlay()];

        let result = playRound(playerSelection, computerSelection);

        if (result === 'Player Wins!') { playerScore++; }
        if (result === 'Computer Wins!' || result === 'Invalid selection, round goes to opponent!') { computerScore++; }
        if (result === 'Tie!') { tieCounter++; }



        console.log(result + '\n');
        console.log('Round: ' + (roundCount + 1));
        roundCount++;
    }

    console.log("Player Score: " + playerScore);
    console.log("Opponent Score: " + computerScore);
    console.log("Tied Rounds: " + tieCounter);
    console.log("Total Rounds: " + roundCount);

    if (playerScore > computerScore)
        console.log("Player Wins the Game!");
    if (playerScore < computerScore)
        console.log("Opponent Wins the Game!");
    else
        console.log("Tied Game!");



}

playGame();