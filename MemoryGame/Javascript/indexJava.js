const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let player1 = document.getElementById('player1points');
let player1pointscore = 0;
let player2 = document.getElementById('player2points');
let player2pointscore = 0;

var turnCount = 0;
var winner = null;
var playerbeurt = null;
var thewinner = document.getElementById("thewinner");
var debeurt = document.getElementById("debeurt");
thewinner.style.visibility = 'hidden'
debeurt.style.visibility = 'visible'

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch
    if ( isMatch = firstCard.dataset.framework === secondCard.dataset.framework) {
        playerscore();
    }



    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);

    beurt();
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

function beurt() {
    turnCount++
    if (turnCount % 2) {
        playerbeurt = "Player2 is aan de beurt";
    }
    else {
        playerbeurt = "Player1 is aan de beurt";
    }
    debeurt.innerHTML = playerbeurt;
    console.log(turnCount + "turncount");
}

function playerscore() {
    if (turnCount % 2) {
        player2pointscore +=1;
        player2.innerHTML = player2pointscore;

        console.log(player2pointscore + "player 2")
    }
    else  {
        player1pointscore +=1;
        player1.innerHTML = player1pointscore;

        console.log(player1pointscore)
    }
    endgame();
}

function endgame() {
    if (player1pointscore + player2pointscore < 10) {

    } else {
        console.log("ENDGAME IS NEUR");
        whowon();
    }

}

function whowon() {
    if (player1pointscore > player2pointscore) {
        winner = "Player1 is de Winnaar";
    }
    else {
        winner = "Player2 is de Winnaar";
    }
    console.log(winner);
    thewinner.innerHTML = winner;
    thewinner.style.visibility = 'visible'
    debeurt.style.visibility = 'hidden'
}

cards.forEach(card => card.addEventListener('click', flipCard));