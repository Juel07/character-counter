function updateCounter(str) {

    // count and update the total number of characters
    document.querySelector('#charCountUp').innerHTML = str.length

    // count down and update the characters left out of 50
    document.querySelector('#charCountDown').innerHTML = 50 - str.length

    // change color to red, if characters are more than 50
    if (50 - str.length < 0) {
        document.querySelector('#charCountDown').style.color = '#db0a0a'
    } else {
        document.querySelector('#charCountDown').style.color = '#111111'
    }
}