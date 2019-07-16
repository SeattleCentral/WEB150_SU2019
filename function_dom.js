let correctAnswer
let numberOfGuesses

let getUserGuess = function() {
    let input = document.getElementById('input')
    let guess = input.value
    input.value = ''
    compareGuess(guess)
}

let compareGuess = function(guess) {
    numberOfGuesses++
    if (guess > correctAnswer) {
        renderOuput(`
            <strong>Too high</strong>
            <br />
            Number of guesses: ${numberOfGuesses}
        `)
    } else if (guess < correctAnswer) {
        renderOuput(`
            <strong>Too low</strong>
            <br />
            Number of guesses: ${numberOfGuesses}
        `)
    } else {
        renderOuput(`
            <strong>You guessed it!</strong>
            <br />
            It took you ${numberOfGuesses} tries
        `)
    }
}

let renderOuput = function(message) {
    let output = document.getElementById('output')
    output.innerHTML = message
}

let reset = function() {
    correctAnswer = Math.floor(Math.random() * 100) + 1
    numberOfGuesses = 0
    renderOuput('')
}

let checkIfEnterPressed = function(event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        getUserGuess()
    }
}

let button = document.getElementById('submit')
button.addEventListener('click', getUserGuess)

let input = document.getElementById('input')
input.addEventListener('keydown', checkIfEnterPressed)

let resetButton = document.getElementById('reset')
resetButton.addEventListener('click', reset)

reset()