const timeDisplay = document.querySelector("#timeDisplay");
const startButton = document.querySelector("#startId");
const pauseButton = document.querySelector("#pauseId");
const resetButton = document.querySelector("#resetId");

let paused = true;
let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let intervalId ;
let hours = 0;
let minutes = 0;
let seconds = 0;

startButton.addEventListener("click",() => {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updatingTime,1000)
    }
});
pauseButton.addEventListener("click",()=>{
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
    
})
resetButton.addEventListener("click",()=>{
        paused = true;
        clearInterval(intervalId);
        startTime = 0;
        elapsedTime = 0;
        currentTime = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
        timeDisplay.textContent = "00:00:00";
})
function updatingTime(){
    elapsedTime = Date.now() - startTime;

    hours = Math.floor(elapsedTime/(1000 * 60 *60) % 60);
    minutes = Math.floor(elapsedTime/(1000 * 60) % 60);
    seconds = Math.floor(elapsedTime/1000 % 60);

    hours=doubleDigits(hours);
    minutes=doubleDigits(minutes);
    seconds=doubleDigits(seconds);
    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    function doubleDigits(unit){
        return (("0")+unit).length > 2 ? unit : "0" + unit;
    }
}