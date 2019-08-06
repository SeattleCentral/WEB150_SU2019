// Error Handling.

function getUserNumberToDivideBy() {
    let a = prompt('Give me a number to divide by.')
    try {
        let aNumber = parseInt(a)
        let result = 100 / aNumber
        if (isNaN(result) || result === Infinity) {
            throw new Error('You tried to divide by a non-number value')
        }
        alert("The division of 100 by your number is: " + result)
    } catch (error) {
        alert("You entered a bad value. More info: " + error)
        getUserNumberToDivideBy()
    }
}

getUserNumberToDivideBy()

// try {
//     getUserNumberToDivideBy()
// } catch (error) {
//     alert('You entered a bad value. More info: ' + error)
//     getUserNumberToDivideBy()
// }