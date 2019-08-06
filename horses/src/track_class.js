import Horse from './horse_class'

class Track {
    /*
     * Pass in an array of horse names.
     * E.g.
     * new Track(['Seabiscuit', 'Black Beauty'])
     */
    constructor(horseNames) {
        this.horses = []
        this.winners = []
        for (let name of horseNames) {
            let horse = new Horse(name)
            this.horses.push(horse)
        }
    }

    update() {
        for (let horse of this.horses) {
            if (horse.position > 20) {
                if (this.winners.indexOf(horse) === -1) {
                    this.winners.push(horse)
                }
            } else {
                horse.gallup()
            }
        }
    }
    
    draw() {
        return `
            <div id="horse_track">
                ${this.horses.map(horse => horse.draw()).join('<br />')}
            </div>
        `
    }
}

export default Track
