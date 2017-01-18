console.log('look, look at my clock');

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  // set seconds, set second degrees, add styles
  const seconds = now.getSeconds();
  const secondsDegrees = (( seconds / 60 ) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // set minutes, set minute degrees, add styles
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60 ) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // set hours, set hours degrees, add styles
  const hour = now.getHours();
  const hoursDegrees = (( hour + minutes / 60) / 12 * 360) + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
