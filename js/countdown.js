(function () {
    const countDownContainer = document.querySelector('.number-day');
    const startTime = new Date();
    function showCountDown() {
        const limitDay = 405;
        const currentTime = new Date();
        const intervalDay = Math.round((currentTime - startTime) / 100000);
        const leftDay = limitDay - intervalDay;
        countDownContainer.innerText = leftDay;

    }
    setInterval(showCountDown, 100000);
})();
(function () {
    const countDownContainer = document.querySelector('.number-hours');
    const startTime = new Date();
    function showCountDown() {
        const limitHour = 21;
        const currentTime = new Date();
        const intervalHour = Math.round((currentTime - startTime) / 10000);
        const leftHour = limitHour - intervalHour;
        countDownContainer.innerText = leftHour;

    }
    setInterval(showCountDown, 10000);
})();
(function () {
    const countDownContainer = document.querySelector('.number-minutes');
    const startTime = new Date();
    function showCountDown() {
        const limitMinute = 57;
        const currentTime = new Date();
        const intervalMinute = Math.round((currentTime - startTime) / 10000);
        const leftMinute = limitMinute - intervalMinute;
        countDownContainer.innerText = leftMinute;

    }
    setInterval(showCountDown, 10000);
})();

(function () {
    const countDownContainer = document.querySelector('.number-seconds');
    const startTime = new Date();
    function showCountDown() {
        const limitSecs = 29;
        const diff = new Date();
        const intervalSecs = Math.floor(diff / 1000) % 60;
        const leftSecs = limitSecs - intervalSecs;
        countDownContainer.innerText = leftSecs;

        seconds.innerHTML = s < 10 ? '0' + s : s;

    }
    setInterval(showCountDown, 1000);
})();

