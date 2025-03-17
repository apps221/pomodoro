let cancelId;
let startTime;
let savedTime = 0;
const countdown = 25 * 60 * 1000 //count down time in miliseconds 
const timerMilliSeconds = document.querySelector('.timer__milliseconds')
const timerSeconds = document.querySelector('.timer__seconds')
const timerMinutes = document.querySelector('.timer__minutes')
const startButton = document.querySelector('.stopwatch__start')
const stopButton = document.querySelector('.stopwatch__stop')
const resetButton = document.querySelector('.stopwatch__reset')
function startTimer() {
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
    startTime = Date.now();
    cancelId= requestAnimationFrame(updateTimer)
}
function stopTimer() {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
    cancelAnimationFrame(cancelId)
    savedTime = Date.now() - startTime + savedTime;
}
function resetTimer() {
savedTime = 0;
startTime = Date.now();

timerMilliSeconds.innerHTML = "000"
timerSeconds.innerHTML = "05"
timerMinutes.innerHTML = "01"
}
function updateTimer() {
    let millisElapsed = Date.now()-startTime + savedTime;

    let timeLeftMs = countdown - millisElapsed;
    if (timeLeftMs < 0) {
        timeLeftMs = 0; //we can just change miliseconds because that is what seconds and minute calculations are based off of
        cancelAnimationFrame(cancelId)
        cancelId = null;
    }
    let secondsLeft = timeLeftMs / 1000;
    let minutesLeft = secondsLeft / 60

    let millisText = timeLeftMs % 1000;
    let secondsText = Math.floor(secondsLeft) % 60 // take out the full minutes and get the remaining seconds
    let minutesText = Math.floor(minutesLeft)

    if (minutesText.toString().length < 2) {
        minutesText = minutesText.toString().padStart(2, '0')
    }
    if (secondsText.toString.length < 2) {
        secondsText = secondsText.toString().padStart(2, '0')
    }
    if (millisText.toString.length < 3) {
        millisText = millisText.toString().padStart(3, '0')
    }

    timerSeconds.innerHTML = secondsText;
    timerMinutes.innerHTML = minutesText;
    timerMilliSeconds.innerHTML = millisText
    if (cancelId) {
        cancelId=requestAnimationFrame(updateTimer)
    }
}