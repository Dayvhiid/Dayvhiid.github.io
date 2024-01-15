let countdownInterval;
let countdownDate = new Date('2023-12-31T23:59:59').getTime();
let paused = false;
let pausedTime = 0;

function updateCountdown() {
  if (!paused) {
    const now = new Date().getTime();
    const distance = countdownDate - now + pausedTime;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById('timer').innerHTML = 'Countdown expired!';
    }
  }
}

function startCountdown() {
  countdownInterval = setInterval(updateCountdown, 1000);
}

function pauseCountdown() {
  if (!paused) {
    clearInterval(countdownInterval);
    paused = true;
    pausedTime = countdownDate - new Date().getTime();
  } else {
    paused = false;
    countdownDate = new Date().getTime() + pausedTime;
    startCountdown();
  }
}

function stopCountdown() {
  clearInterval(countdownInterval);
  document.getElementById('timer').innerHTML = 'Countdown stopped';
}

document.getElementById('startBtn').addEventListener('click', startCountdown);
document.getElementById('pauseBtn').addEventListener('click', pauseCountdown);
document.getElementById('stopBtn').addEventListener('click', stopCountdown);

updateCountdown(); // Initial call to display the countdown
