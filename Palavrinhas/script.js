const images = [
    '🍎', '🍎',
    '🍌', '🍌',
    '🍒', '🍒',
    '🍇', '🍇',
    '🍍', '🍍',
    '🍉', '🍉',
    '🥭', '🥭',
    '🍊', '🍊',
    '🍅', '🍅',
    '🐮', '🐮'
];

let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function createBoard() {
    const gameBoard = document.getElementById('game-board');
    const shuffledImages = shuffle(images);
    for (let i = 0; i < shuffledImages.length; i++) {
        const card = document.createElement('div');
        card.classList.add('memory-card');
        card.setAttribute('data-id', i);
        const cardInner = document.createElement('div');
        cardInner.classList.add('card-face');
        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front');
        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back');
        cardBack.innerText = shuffledImages[i];
        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        card.appendChild(cardInner);
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    }
}

function checkForMatch() {
    const cards = document.querySelectorAll('.memory-card');
    const [id1, id2] = cardsChosenId;
    const [card1, card2] = cardsChosen;
    if (card1 === card2) {
        cards[id1].style.visibility = 'hidden';
        cards[id2].style.visibility = 'hidden';
        cardsWon.push(cardsChosen);
    } else {
        cards[id1].classList.remove('flipped');
        cards[id2].classList.remove('flipped');
    }
    cardsChosen = [];
    cardsChosenId = [];
    if (cardsWon.length === images.length / 2) {
        alert('Parabéns! Você encontrou todos os pares!');
    }
}

function flipCard() {
    const card = this;
    const cardId = card.getAttribute('data-id');
    if (!card.classList.contains('flipped') && cardsChosenId.length < 2) {
        card.classList.add('flipped');
        cardsChosen.push(images[cardId]);
        cardsChosenId.push(cardId);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
        showRestartButton();
    }
}

function showRestartButton() {
    const restartButton = document.getElementById('restart-btn');
    restartButton.style.display = 'inline-block';
}

function restartGame() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = '';
    cardsChosen = [];
    cardsChosenId = [];
    cardsWon = [];
    createBoard();
    document.getElementById('restart-btn').style.display = 'none';
}

document.getElementById('restart-btn').addEventListener('click', restartGame);


createBoard();
