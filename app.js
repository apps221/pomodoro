let cancelId;
let startTime;
const countdown = 25 * 60 * 1000 //count down time in miliseconds 
const timerMilliSeconds = document.querySelector('.timer__milliseconds')
const timerSeconds = document.querySelector('.timer__seconds')
const timerMinutes = document.querySelector('.timer__minutes')
function startTimer() {
    startTime = Date.now();
    cancelId= requestAnimationFrame(updateTimer)
}
function stopTimer() {
    cancelAnimationFrame(cancelId)
}
function resetTimer() {

}
function updateTimer() {
    let millisElapsed = Date.now()-startTime;

    let timeLeftMs = countdown - millisElapsed;
    let secondsLeft = timeLeftMs / 1000;
    let minutesLeft = secondsLeft / 60

    let millisText = timeLeftMs % 1000;
    let secondsText = Math.floor(secondsLeft) % 60 // take out the full minutes and get the remaining seconds
    let minutesText = Math.floor(minutesLeft)

    timerSeconds.innerHTML = secondsText;
    timerMinutes.innerHTML = minutesText;
    timerMilliSeconds.innerHTML = millisText
    cancelId=requestAnimationFrame(updateTimer)
}