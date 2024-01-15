// Set the date for the countdown (change this to your desired date)
const countdownDate = new Date('2023-12-31T23:59:59').getTime();

// Update the countdown every second
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  // Calculations for days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById('timer').innerHTML = 'Countdown expired!';
  }
}, 1000);
