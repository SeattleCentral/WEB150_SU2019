// Define your function

let getUserName = function() {
    let name = prompt('What is your name? ')
    alert(`Hi, ${name}, nice to meet you!`)
}

let button = document.getElementById('clickMe')
button.addEventListener('click', getUserName)