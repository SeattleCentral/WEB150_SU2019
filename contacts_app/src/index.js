const processForm = function(event) {
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    const data = {}
    for (let [key, value] of formData.entries()) {
        // ["input name", "input value"]
        data[key] = value
    }
    /* data is an object
     * {
     *   name: "Bob",
     *   email: "bob@gmail.com",
     *   phone: 92839239283,
     * }
     */
    let errors = []
    
    // Check name field
    let nameError = getNameFieldError(data.name)
    if (nameError) {
        errors.push(nameError)
    }
    
    // Render errors if any
    if (errors.length) {
        renderErrors(errors)
    } else {
        const errorBox = document.getElementById('error-box')
        errorBox.innerHTML = ''
    }
}


const getNameFieldError = function(nameValue) {
    let nameRegEx = /^[a-z .,]{2,}$/i
    if (nameValue.match(nameRegEx)) {
        return false  // no error
    } else {
        return "Invalid name value."
    }
}


const renderErrors = function(errors) {
    let errorHtml = '<ul>'
    for (let error of errors) {
        errorHtml += `<li>${error}</li>`
    }
    errorHtml += '</ul>'
    const errorBox = document.getElementById('error-box')
    errorBox.innerHTML = errorHtml
}


let contactForm = document.getElementById('contact-form')

contactForm.addEventListener('submit', processForm)