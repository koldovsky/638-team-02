(function() {

    const form = document.querySelector('.form-subscribee');

    async function handleSubmit(event) {
        event.preventDefault();
        const status = document.querySelector(".contact-status");
        const data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            status.innerHTML = "Thanks for your subscription!";
            form.reset();
        }).catch(error => {
            status.innerHTML = "Oops! Your email address is't entered correctly";
        });
    }
    form.addEventListener("submit", handleSubmit);
})();