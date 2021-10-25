(function() {

    const slides = [
        '<img src="img/adidas-trainers-big.jpg" alt="adidas-trainers">',
        '<img src="img/nike-tshirt-big.jpg" alt="nike-tshirt">'
    ];

    let currentSlide = 0;
    function showCurrentSlide() {
        const slideContainer = document.querySelector('.catalogue-content .catalogue-images .main-image');
        slideContainer.innerHTML = slides[currentSlide];
    }
    function nextSlide() {
        currentSlide++;
        if(currentSlide >= slides.length) currentSlide = 0;
        showCurrentSlide();
    }
    setInterval(nextSlide, 2000);
    showCurrentSlide();

})();