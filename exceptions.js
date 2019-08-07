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

// getUserNumberToDivideBy()

let response = [
    {
        "tweet_id": 2349237492979,
        "user": {
            "profile_pic_url": "https://twitter.com/images/sldfjsl.png",
            "handle": "macbookuser1",
            "name": "Bob Marley"
        },
        "message": "Hello World"
    },
    {
        "tweet_id": 9272374987923,
        "message": "Buy OUR STUFF!",
        "company": {
            "name": "Bob's Appliances"
        }
    },
    {
        "tweet_id": 2349237492977,
        "user": {
            "profile_pic_url": null,
            "handle": "otheruser2",
            "name": "Sally Marley"
        },
        "message": "Howdy World"
    }
]

let content = document.getElementById('content')
content.innerHTML = ''

for (let tweet of response) {
    try {
        let tweetCard = `
            <strong>${tweet.user.name}</strong>
            <p>${tweet.message}</strong>
        `
        content.innerHTML += tweetCard
    } catch (error) {
        console.log('An error happened rendering the following tweet:', tweet)
        console.log('Error details: ', error)
    }
}


// try {
//     getUserNumberToDivideBy()
// } catch (error) {
//     alert('You entered a bad value. More info: ' + error)
//     getUserNumberToDivideBy()
// }