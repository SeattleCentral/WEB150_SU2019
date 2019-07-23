// Starting horses object
let horses = {
    'Buttercup': 0,
    'Seabiscuit': 0,
    'Secretariat': 0,
    'My Little Pony': 0
}

// Returns the index of the user horse selection
let getUserHorseSelection = function(horses) {
    let horseSelectorMessage = 'What horse do you want to bet on?\n'
    let horseArray = Object.keys(horses)     // ['Seabiscuit', etc..]
    for (let i = 0; i < horseArray.length; i++) {
        horseSelectorMessage += `${i + 1}. ${horseArray[i]}\n`
    }
    horseSelectorMessage += '\nEnter the number to select.\n'
    let userSelectedHorse = parseInt(prompt(horseSelectorMessage))
    if (isNaN(userSelectedHorse) || userSelectedHorse < 1 || userSelectedHorse > horseArray.length) {
        alert("Invalid horse number.")
        return getUserHorseSelection(horses)
    } else {
        return horseArray[userSelectedHorse - 1]
    }
}

let sortedHorseNames = function(horses) {
    let horseNames = Object.keys(horses).sort(function(a, b) {
        return horses[b] - horses[a]
    })
    return horseNames
}

// Draw horse list in the web browser
let renderHorsePositions = function(horses) {
    let positionEl = document.getElementById('position')
    let horseNames = sortedHorseNames(horses)
    let html = '<ol>'
    for (let horse of horseNames) {
        html += `<li>${horse} - ${horses[horse].toFixed(2)}mi.</li>`
    }
    html += '</ol>'
    positionEl.innerHTML = html
}

let updateHorseProgress = function(horses) {
    for (let key in horses) {
        horses[key] += Math.random()
    }
}

let getWinner = function(horses) {
    return sortedHorseNames(horses)[0]
}

// Initial render
renderHorsePositions(horses)

let userSelectedHorse = getUserHorseSelection(horses)

// The laps are starting here...
for (let i = 0; i < 7; i++) {
    setTimeout(function() {
        updateHorseProgress(horses)
        renderHorsePositions(horses)
        if (i === 6) {
            let winner = getWinner(horses)
            alert('The winner is: ' + winner)
            if (winner === userSelectedHorse) {
                alert('YOUR HORSE WON!!')
            }
        }
    }, 1000 * i)
}
