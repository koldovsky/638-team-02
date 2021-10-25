const strike = document.querySelector('.strike');
for (let i = 0; i < 3; i++) strike.innerText += '!';

strike.hidden = true;
setInterval(() => strike.hidden = !strike.hidden, 1000);

(function () {
    const clockNew = document.querySelector('.clock-new');
    setInterval(() => clockNew.innerText = new Date().toLocaleTimeString(), 1000);
    
})();

const countDownContainer = document.querySelector('.countdown');

const startTime = new Date();
function showCountDown() {
    const limitSecs = 10;
    const currentTime = new Date();
    const intervalSecs = Math.round((currentTime - startTime) / 1000);
    сonst leftSecs = limitSecs - intervalSecs;
    countDownContainer.innerText = leftSecs;

}
setInterval(showCountDown, 1000);
