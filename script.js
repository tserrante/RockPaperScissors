function game() {
    let roundCount = 0;
    let playerScore = 0;
    let computerScore = 0;
    //let tieCounter = 0;
    let result;
    const playerChoices = initPlayerChoices();
    const winBanner = document.getElementById('winBanner');

    playerChoices.forEach(button => {
        button.addEventListener('click', function() {

            let playerSelection = button.textContent.toLowerCase();

            const computerChoices = ['rock', 'paper', 'scissors'];
            const computerSelection = computerChoices[Math.floor(Math.random() * 3)];

            result = roundResult(playerSelection, computerSelection);

            scoreBoard();
            winBanner.innerText = result;
            winBanner.classList.remove('hidden');
            if (roundCount === 10) {
                //winBanner.classList.add('hidden');
                gameOver();
            }

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

        return 'Invalid selection, round goes to computer!';

    }

    function scoreBoard() {
        const playerElem = document.querySelector(".p-count");
        const computerElem = document.querySelector(".c-count");
        const movesLeft = document.querySelector('.movesLeft');

        if (result === 'Player Wins!') {
            playerScore++;
            playerElem.innerText = `${0 + playerScore}`;
        }
        if (result === 'Computer Wins!' || result === 'Invalid selection, round goes to computer!') {
            computerScore++;
            computerElem.innerText = `${0 + computerScore}`;
        }
        //if (result === 'Tie!') { tieCounter++; }


        roundCount++;
        movesLeft.innerText = `Moves Left: ${10-roundCount}`;

    }

    function gameOver() {
        const overMsg = document.querySelector('#chooseBanner');
        const resultMsg = document.querySelector('.result');
        const restartMsg = document.querySelector('.restart');
        const movesLeft = document.querySelector('.movesLeft');
        playerChoices.forEach(option => {
            option.style.display = 'none';
        })

        movesLeft.style.display = 'none';

        overMsg.innerText = "Game Over!";

        if (playerScore > computerScore) {
            winBanner.innerText = "Player Wins the Game!";
        }
        if (playerScore < computerScore)
            winBanner.innerText = "Computer Wins the Game!";
        if (playerScore === computerScore)
            winBanner.innerText = "Tied Game!";

        restartMsg.classList.add("restartBtn");
        restartMsg.innerText = "Restart Game?";
        restartMsg.addEventListener('click', () => {
            window.location.reload();
        })
    }

}

game();