import Horse from './horse'

let seaBiscuit = new Horse('Sea Biscuit')
let blackBeauty = new Horse('Black Beauty')

// Trainer 1 brings Sea Biscuit to a trot.
seaBiscuit.trot()
// Trainer 2 takes Black Beauty for a run.
blackBeauty.gallup()

let div = document.getElementById('content')
div.innerHTML = `
    Horsey ${seaBiscuit.name} is at position: ${seaBiscuit.position}
    <br />
    Horsey ${blackBeauty.name} is at position: ${blackBeauty.position}
`
