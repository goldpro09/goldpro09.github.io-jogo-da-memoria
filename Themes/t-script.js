// TODO: MAKE DIFFERENT DIFFICULTS

const gameElement = document.querySelector(".memory-game");
const cards = document.querySelectorAll(".memory-card");
const frontFace = document.querySelectorAll(".front-face");
const bgColorElement = document.querySelector(".bg-color");
const bodyElement = document.querySelector("body");
const restartButton = document.querySelector(".restart");
const shuffleButton = document.querySelector(".shuffle");
const winElement = document.querySelector(".you-win");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

var bgColor = JSON.parse(localStorage.getItem('bgColor'));


bodyElement.style.backgroundColor = bgColor;

function backToMenu() {
    window.location.replace("../../index.html")
}

function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;
    this.classList.toggle("flip");
    
    if(!hasFlippedCard) {
        // FIRST CLICK
        hasFlippedCard = true;
        firstCard = this;

        this.classList.add("choosen");
        return;
    }
    // SECOND CLICK
    secondCard = this;
    this.classList.add("choosen");
    checkMatch();

    checkWin();
}

function checkMatch() {
    const choosedFirstCard = firstCard.dataset.framework;
    const choosedSecondCard = secondCard.dataset.framework;

    let isMatch = choosedFirstCard == choosedSecondCard;

    isMatch ? disableCard() : unflipCard();
}


function disableCard() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);

    firstCard.classList.add("match");
    secondCard.classList.add("match");

    resetBoard();
}

function unflipCard() {
    lockBoard = true;
    firstCard.classList.remove("choosen");
    secondCard.classList.remove("choosen");

    firstCard.classList.add("unmatch");
    secondCard.classList.add("unmatch");
    setTimeout(function() {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        firstCard.classList.remove("unmatch");
        secondCard.classList.remove("unmatch");
        resetBoard();
    },800)
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    })
})();

function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    })
}

function checkWin() {
    const flippedCards = document.querySelectorAll(".match");
    if(flippedCards.length == 12) {
        gameElement.style.animation = "fadeOut 1s"; 
        shuffleButton.disabled = true;

        setTimeout(() => {
            gameElement.style.display = "none";
            winElement.style.animation = "fadeIn 1s";

        
            setTimeout(() => {winElement.classList.add("show");}, 1000)
        },1000)

        setTimeout(()=> {
            restart();
        },12000)
    }
}
function restart() {
    window.location.reload();
    changeBg();
}

function saveToStorage() {
    const bgColor = bodyElement.style.backgroundColor;
    localStorage.setItem('bgColor', JSON.stringify(bgColor));
}

function changeBg() {
    bodyElement.style.background = bgColorElement.value;
    saveToStorage();
}

cards.forEach(card => card.addEventListener('click', flipCard));