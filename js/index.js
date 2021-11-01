const sectionSlogan = document.querySelector('.strike');
sectionSlogan.innerText += '!';
//setInterval( () => sectionSlogan.hidden = !sectionSlogan.hidden, 500 );
5
const clockContainer = document.querySelector('.clock');
setInterval( () => clockContainer.innerText = new Date().toLocaleTimeString(), 1000);

//const countDownContainer = document.querySelector('.countdown');

const startTime = new Date();

function showCountDown() {
    const limitSeconds = 10;
    const currentTime = new Date();
    const intervalSeconds = Math.round((currentTime - startTime) / 1000);
    const leftSeconds = limitSeconds - intervalSeconds;
    countDownContainer.innerText = leftSeconds;
}
//setInterval(showCountDown, 1000);

document.addEventListener('DOMContentLoaded', function () {
    // final date, 17 okt 2021
    const deadline = new Date(2021, 10, 17);
    // id timer
    let timerId = null;
    // declension of numbers
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    // calculate the date difference and set the remaining time as the content of the elements
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      $days.dataset.title = declensionNum(days, ['day', 'day', 'days']);
      $hours.dataset.title = declensionNum(hours, ['hour', 'hour', 'hours']);
      $minutes.dataset.title = declensionNum(minutes, ['minutes', 'minutes', 'minutes']);
      $seconds.dataset.title = declensionNum(seconds, ['seconds', 'seconds', 'seconds']);
    }
    // get elements containing date components
    const $days = document.querySelector('.timer__days');
    const $hours = document.querySelector('.timer__hours');
    const $minutes = document.querySelector('.timer__minutes');
    const $seconds = document.querySelector('.timer__seconds');
    // call the function countdownTimer
    countdownTimer();
    // call the function countdownTimer every second
    timerId = setInterval(countdownTimer, 1000);
  });
       
    
