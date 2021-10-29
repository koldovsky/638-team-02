(function () {
    const countDownContainer = document.querySelector('.number');
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