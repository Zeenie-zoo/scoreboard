
let homescoreEl = document.getElementById("home-score")
let guestscoreEl = document.getElementById("guest-score")

let homescore = 0
let guestscore = 0

homescoreEl.textContent = 0
guestscoreEl.textContent = 0

function homeplus1() {
    homescore += +1
    homescoreEl.textContent = homescore
    console.log(homescore)
}

function homeplus2() {
    homescore += +2
    homescoreEl.textContent = homescore
    console.log(homescore)
}

function homeplus3() {
    homescore += +3
    homescoreEl.textContent = homescore
    console.log(homescore)
}


function guestplus1() {
    guestscore += +1
    guestscoreEl.textContent = guestscore
    console.log(guestscore)
}

function guestplus2() {
    guestscore += +2
    guestscoreEl.textContent = guestscore
    console.log(guestscore)
}

function guestplus3() {
    guestscore += +3
    guestscoreEl.textContent = guestscore
    console.log(guestscore)
}

function reset() {
    homescore = 0
    guestscore = 0
    homescoreEl.textContent = homescore
    guestscoreEl.textContent = guestscore
    console.log(homescore)
    console.log(guestscore)
}