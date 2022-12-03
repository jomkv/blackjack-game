let player = {
    name: "Jom",
    chips: 145
}

// variables
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// elements
let messageEl = document.querySelector(".message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.querySelector(".cards-el")
let playerEl = document.querySelector(".player-el")

// display player chips
updateChips()

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1
    if(randomCard === 1) {
        return 11
    }
    else if (randomCard > 10) {
        return 10
    }
    else {
        return randomCard
    }
}

function startGame() {
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    
    for(let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) { // draw card
        message = "Do you want to draw a new card?"
    }
    else if (sum === 21) { // win
        message = "You've got Blackjack!"
        player.chips += 10
        updateChips()
        hasBlackJack = true
    }
    else { // lose
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

function updateChips() {
    playerEl.textContent = player.name + ": $" + player.chips
}
