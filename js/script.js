{
    let playerScore = 0;
    let computerScore = 0;
    const stone = 'kamień';
    const paper = 'papier';
    const scissors = 'nożyce';

    const playGame = function(playerInput) {

        clearMessages();

        const getMoveName = function(argMoveId) {
            if (argMoveId == 1) {
                return stone;
            } else if (argMoveId == 2) {
                return paper;
            } else if (argMoveId == 3) {
                return scissors;
            }

            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }

        const looseMove = function(playerMove) {
            if (playerMove == stone) {
                return scissors;
            } else if (playerMove == paper) {
                return stone;
            } else if (playerMove == scissors) {
                return paper;
            }
        }
        
        // Player move

        console.log('Gracz wpisał: ' + playerInput);

        const playerMove = getMoveName(playerInput);

        printMessage('Twój ruch to: ' + playerMove);

        // Computer move

        const randomNumber = Math.floor(Math.random() * 8 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

        const getComputerMove = function() {
            if (randomNumber <= 3) {
                return getMoveName(randomNumber);
            } else {
                return looseMove(playerMove);
            }
        }

        const computerMove = getComputerMove();

        printMessage('Mój ruch to: ' + computerMove);

        // Game score

        const displayResult = function(argComputerMove, argPlayerMove) {

            console.log('moves:', argComputerMove, argPlayerMove);
            if ((argComputerMove == stone && argPlayerMove == paper) || (argComputerMove == paper && argPlayerMove == scissors) || (argComputerMove == scissors && argPlayerMove == stone)) {
                playerScore++;
                printMessage('Ty wygrywasz!');
            } else if (argComputerMove == argPlayerMove) {
                printMessage('Jest remis!');
            } else if ((argComputerMove == stone && argPlayerMove == scissors) || (argComputerMove == scissors && argPlayerMove == paper) || (argComputerMove == paper && argPlayerMove == stone)) {
                computerScore++;
                printMessage('Ja wygrywam!');
            } else {
                printMessage('Nieznany ruch!');
            }
        }
        displayResult(computerMove, playerMove);
        document.getElementById('result').innerHTML = 'Wynik gry to: ' + playerScore + ' : ' + computerScore;
    }

    document.getElementById('play-rock').addEventListener('click', function () {
        playGame(1);
    });
    document.getElementById('play-paper').addEventListener('click', function () {
        playGame(2);
    });
    document.getElementById('play-scissors').addEventListener('click', function () {
        playGame(3);
    });
}