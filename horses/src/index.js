import Horse from './horse_class'
import Track from './track_class'

let track = new Track([
    'Seabiscuit',
    'Black Beauty',
    'Secretariat',
    'My Little Pony'
])

let content = document.getElementById('content')
content.innerHTML = track.draw()

let horseRace = setInterval(() => {
    track.update()
    content.innerHTML = track.draw()
    if (track.winners.length === track.horses.length) {
        console.log(track.winners, track.horses)
        content.innerHTML = `
            <h2>The order of finishing.</h2>
            ${track.winners.map(horse => horse.name).join('<br />')}
            <br /><br />
            ${track.draw()}
        `
        clearInterval(horseRace)
    }
}, 600)

