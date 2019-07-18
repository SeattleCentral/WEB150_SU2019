let horses = [
    'Buttercup',
    'Seabiscuit',
    'Secretariat',
    'My Little Pony'
]

// Get user horse selection
let horseSelectorMessage = 'What horse do you want to bet on?\n'
for (let i = 0; i < horses.length; i++) {
    horseSelectorMessage += `${i + 1}. ${horses[i]}\n`
}
horseSelectorMessage += '\nEnter the number to select.\n'
let userSelectedHorse = prompt(horseSelectorMessage)

let renderHorsePositions = function(horses) {
    let positionEl = document.getElementById('position')
    let html = '<ol>'
    for (let horse of horses) {
        html += `<li>${horse}</li>`
    }
    html += '</ol>'
    positionEl.innerHTML = html
}

renderHorsePositions(horses)

let newHorseList = [...horses]

for (let i = 0; i < 7; i++) {
    setTimeout(function() {
        shuffle(newHorseList)
        renderHorsePositions(newHorseList)
        if (i === 6) {
            alert('The winner is: ' + newHorseList[0])
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