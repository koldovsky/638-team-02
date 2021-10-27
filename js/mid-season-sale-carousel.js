(function() {

    const slides = [
        '<img src="img/adidas-trainers-big.jpg" alt="adidas-trainers">',
        '<img src="img/nike-tshirt-big.jpg" alt="nike-tshirt">'
    ];

    let currentSlide = 0;
    function showCurrentSlide() {
        const slideContainer = document.querySelector('.catalogue-content .catalogue-images .carousel .main-image');
        slideContainer.innerHTML = slides[currentSlide];
    }
    function nextSlide() {
        currentSlide++;
        if(currentSlide >= slides.length) currentSlide = 0;
        showCurrentSlide();
    }
    function prevSlide() {
        currentSlide--;
        if(currentSlide < 0) currentSlide = slides.length - 1;
        showCurrentSlide();
    }

    setInterval(nextSlide, 5000);
    document.querySelector('.catalogue-content .catalogue-images .carousel .prev').addEventListener('click', prevSlide);
    document.querySelector('.catalogue-content .catalogue-images .carousel .next').addEventListener('click', nextSlide);
    showCurrentSlide();

    let currentCount = 1;
    function showCurrentCount() {
        const countContainer = document.querySelector('.catalogue-content .catalogue-text .catalogue-reference .cart-management .cart-quantity p');
        countContainer.innerHTML = currentCount;
    }
    showCurrentCount();

    function showMoreQuantity() {
            currentCount++;
            showCurrentCount();
        }

        function showLessQuantity() {
            currentCount--;
            if(currentCount < 1) currentCount = 1;
            showCurrentCount();
        }


    document.querySelector('.catalogue-content .catalogue-text .catalogue-reference .cart-management .cart-buttons .cart-up-button').addEventListener('click', showMoreQuantity);
    document.querySelector('.catalogue-content .catalogue-text .catalogue-reference .cart-management .cart-buttons .cart-down-button').addEventListener('click', showLessQuantity);

})();