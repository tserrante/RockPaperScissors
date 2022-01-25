function game() {
    let roundCount = 0;
    let playerScore = 0;
    let computerScore = 0;
    let tieCounter = 0;
    let result;
    const playerChoices = initPlayerChoices();

    playerChoices.forEach(button => {
        button.addEventListener('click', function() {

            let playerSelection = button.textContent.toLowerCase();

            const computerChoices = ['rock', 'paper', 'scissors'];
            const computerSelection = computerChoices[Math.floor(Math.random() * 3)];

            result = roundResult(playerSelection, computerSelection);

            scoreBoard();



        });
    });

    function initPlayerChoices() {
        let rockBtn = document.querySelector('#rock');
        let paperBtn = document.querySelector('#paper');
        let scissorsBtn = document.querySelector('#scissors');

        return [rockBtn, paperBtn, scissorsBtn];
    }

    function roundResult(p, c) {

        //p = p.toLowerCase();

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

    function scoreBoard() {
        const playerElem = document.querySelector(".p-count");
        const computerElem = document.querySelector(".c-count");
        const movesLeft = document.querySelector('.movesLeft');
        movesLeft.innerText = `Moves Left: ${10-roundCount}`;

        if (result === 'Player Wins!') {
            playerScore++;
            playerElem.innerText = `${0 + playerScore}`;
        }
        if (result === 'Computer Wins!' || result === 'Invalid selection, round goes to opponent!') {
            computerScore++;
            computerElem.innerText = `${0 + computerScore}`;
        }
        if (result === 'Tie!') { tieCounter++; }



        console.log(result + '\n');
        console.log('Round: ' + (roundCount + 1));
        roundCount++;


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

}

game();