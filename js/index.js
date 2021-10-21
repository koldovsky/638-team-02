const sectionSlogan = document.querySelector('.section-header .section-text .section-slogan');
sectionSlogan.innerText += '!';
//setInterval( () => sectionSlogan.hidden = !sectionSlogan.hidden, 500 );

const clockContainer = document.querySelector('.clock');
setInterval( () => clockContainer.innerText = new Date().toLocaleTimeString(), 1000);

const countDownContainer = document.querySelector('.countdown');

const startTime = new Date();

function showCountDown() {
    const limitSeconds = 10;
    const currentTime = new Date();
    const intervalSeconds = Math.round((currentTime - startTime) / 1000);
    const leftSeconds = limitSeconds - intervalSeconds;
    countDownContainer.innerText = leftSeconds;
}
setInterval(showCountDown, 1000);