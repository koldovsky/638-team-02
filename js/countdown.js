const countDownContainer = document.querySelector('.countdown');
const startTime = new Date();
function showCountDown() {
    const limitSecs = 10;
    const currentTime = new Date();
    const intervalSecs = Math.round((currentTime - startTime) / 1000);
    const left = limitSecs - intervalSecs;
    countDownContainer.innerText = leftSecs;

}
setInterval(showCountDown, 1000);