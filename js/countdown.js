(function () {
    const countDownContainer = document.querySelector('.number-day');
    const startTime = new Date();
    function showCountDown() {
        const limitSecs = 405;
        const currentTime = new Date();
        const intervalSecs = Math.round((currentTime - startTime) / 1000);
        const leftSecs = limitSecs - intervalSecs;
        countDownContainer.innerText = leftSecs;

    }
    setInterval(showCountDown, 1000);
})();
(function () {
    const countDownContainer = document.querySelector('.number-hours');
    const startTime = new Date();
    function showCountDown() {
        const limitSecs = 21;
        const currentTime = new Date();
        const intervalSecs = Math.round((currentTime - startTime) / 1000);
        const leftSecs = limitSecs - intervalSecs;
        countDownContainer.innerText = leftSecs;

    }
    setInterval(showCountDown, 1000);
})();
(function () {
    const countDownContainer = document.querySelector('.number-minutes');
    const startTime = new Date();
    function showCountDown() {
        const limitSecs = 29;
        const currentTime = new Date();
        const intervalSecs = Math.round((currentTime - startTime) / 1000);
        const leftSecs = limitSecs - intervalSecs;
        countDownContainer.innerText = leftSecs;

    }
    setInterval(showCountDown, 1000);
})();

(function () {
    const countDownContainer = document.querySelector('.number-seconds');
    const startTime = new Date();
    function showCountDown() {
        const limitSecs = 29;
        const currentTime = new Date();
        const intervalSecs = Math.round((currentTime - startTime) / 1000);
        const leftSecs = limitSecs - intervalSecs;
        countDownContainer.innerText = leftSecs;

    }
    setInterval(showCountDown, 1000);
})();

