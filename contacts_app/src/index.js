const processForm = function(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = {}
    for (let [key, value] of formData.entries()) {
        // ["input name", "input value"]
        data[key] = value
    }
    console.log(data)
}


let contactForm = document.getElementById('contact-form')

contactForm.addEventListener('submit', processForm)