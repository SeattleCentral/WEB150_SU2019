let racers = []

racers.push('Margaret')
racers.push('Sally')
racers.push(5)
// anonymous function
racers.push(function(a, b) { return a + b })
console.log(racers)

console.log(racers[3](7, 77))

let lastElement = racers.pop()
console.log(racers)
racers.pop()
console.log(racers)

let myTestArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
myTestArray.splice(2, 2)
console.log(myTestArray)

// console.log("All of the race participants")
// for (let racer of racers) {
//     console.log(racer)
// }

// for (let i = 0; i < racers.length; i++) {
//     let racer = racers[i]
// }
