(function () {
    const slides = [
      '<div><img src="img/an-carosel-logo-adidas.svg" alt=""></div>',
      '<div><img src="img/an-carosel-logo-asics.svg" alt=""></div>',
      '<div><img src="img/an-carosel-logo-nike.svg" alt=""></div>',
      '<div><img src="img/an-carosel-logo-new-balance.svg" alt=""></div>',
      '<div><img src="img/an-carosel-logo-reebok.svg" alt=""></div>',
    ];
  
    let currentSlide = 0;
  
    function showCurrentSlide() {
      const slideContainer = document.querySelector(".products-carousel .slide");
      slideContainer.innerHTML = slides[currentSlide];
      if (window.innerWidth > 600) {
        const secondSlideIdx =
          currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.innerWidth > 900) {
          const thirdSlideIdx =
            secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
          slideContainer.innerHTML += slides[thirdSlideIdx];
        }
      }
    }
  
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) currentSlide = 0;
      showCurrentSlide();
    }
  
    function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) currentSlide = slides.length - 1;
      showCurrentSlide();
    }
  
    setInterval(nextSlide, 9000);
  
    document
      .querySelector(".products-carousel .next")
      .addEventListener("click", nextSlide);
    document
      .querySelector(".products-carousel .prev")
      .addEventListener("click", prevSlide);
  
    window.addEventListener("resize", showCurrentSlide);
  
    showCurrentSlide();
  })();
  