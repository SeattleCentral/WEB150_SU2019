// Starting horses array
let horses = [
    'Buttercup',        // index position 0
    'Seabiscuit',       // index position 1
    'Secretariat',      // index position 2
    'My Little Pony'    // index position 3
]

// Returns the index of the user horse selection
let getUserHorseSelection = function(horses) {
    let horseSelectorMessage = 'What horse do you want to bet on?\n'
    for (let i = 0; i < horses.length; i++) {
        horseSelectorMessage += `${i + 1}. ${horses[i]}\n`
    }
    horseSelectorMessage += '\nEnter the number to select.\n'
    let userSelectedHorse = parseInt(prompt(horseSelectorMessage))
    if (isNaN(userSelectedHorse) || userSelectedHorse < 1 || userSelectedHorse > horses.length) {
        alert("Invalid horse number.")
        return getUserHorseSelection(horses)
    } else {
        return userSelectedHorse - 1
    }
}

// Draw horse list in the web browser
let renderHorsePositions = function(horses) {
    let positionEl = document.getElementById('position')
    let html = '<ol>'
    for (let horse of horses) {
        html += `<li>${horse}</li>`
    }
    html += '</ol>'
    positionEl.innerHTML = html
}

// Initial render
renderHorsePositions(horses)

let userSelectedHorseIndex = getUserHorseSelection(horses)

// The laps are starting here...

let newHorseList = [...horses]

for (let i = 0; i < 7; i++) {
    setTimeout(function() {
        shuffle(newHorseList)
        renderHorsePositions(newHorseList)
        if (i === 6) {
            alert('The winner is: ' + newHorseList[0])
            if (newHorseList[0] === horses[userSelectedHorseIndex]) {
                alert('YOUR HORSE WON!!')
            }
        }
    }, 1000 * i)
}


/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

