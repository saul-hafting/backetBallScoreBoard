let homeScore = 0
let awayScore = 0

function oneHome() {
    let countEl = document.getElementById("counterHome")
    homeScore += 1
    countEl.textContent = homeScore
}

function twoHome() {
    let countEl = document.getElementById("counterHome")
    homeScore += 2
    countEl.textContent = homeScore
}

function threeHome() {
    let countEl = document.getElementById("counterHome")
    homeScore += 3
    countEl.textContent = homeScore
}

function oneGuest() {
    let countEl = document.getElementById("counterGuest")
    awayScore += 1
    countEl.textContent = awayScore
}

function twoGuest() {
    let countEl = document.getElementById("counterGuest")
    awayScore += 2
    countEl.textContent = awayScore
}

function threeGuest() {
    let countEl = document.getElementById("counterGuest")
    awayScore += 3
    countEl.textContent = awayScore
}

function reset() {
    homeScore = 0
    awayScore = 0
    let home = document.getElementById("counterHome")
    let guest = document.getElementById("counterGuest")
    home.textContent = 0
    guest.textContent = 0
}