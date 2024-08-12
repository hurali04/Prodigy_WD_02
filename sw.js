let startTime;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const startStopButton = document.getElementById("startStop");
const resetButton = document.getElementById("reset");

function updateTime() {
  const now = Date.now();
  elapsedTime = now - startTime;

  const totalSeconds = Math.floor(elapsedTime / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  hoursDisplay.textContent = String(hours).padStart(2, "0");
  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function startStop() {
  if (isRunning) {
    clearInterval(timerInterval);
    startStopButton.textContent = "Start";
  } else {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 1000);
    startStopButton.textContent = "Stop";
  }
  isRunning = !isRunning;
}

function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  hoursDisplay.textContent = "00";
  minutesDisplay.textContent = "00";
  secondsDisplay.textContent = "00";
  startStopButton.textContent = "Start";
  isRunning = false;
}
startStopButton.addEventListener("click", startStop);
resetButton.addEventListener("click", reset);
