/*(async function)() {
    const response = await fetch('carousel.json');
    const carousel = await response.json();
    
    function renderProducts(carousel) {
        const carouselInner = document.querySelector('.carousel-inner');
        for (const carousel of carousel - inner) {
            carouselInner.innerHTML += `
             <div class="carousel-item-active">
                            <img src="${carousel.image}" class="d-block-w-50 mx-auto"
                                alt="${carousel.title}">
                            <p class="${carousel.description}">Puma Textile Running Shoes</p>
                            <div class="${carousel.price}">$62,00</div>
                          <a href="product-buy.html"  class="btn btn-dark product-buy" data-id="${carousel.id}">Add to Cart</button>
                        </div>
            `
        }
        document.querySelectorAll('.product-buy')
            .forEach(productBuy => productBuy.addEventListener('click', productBuyClick));
    }
    function productBuyClick( ev ) {
        const productBuy = ev.target;
        const productId = productBuy.dataset.id;
        const productBuy = productBuy.filter(productBuy => product.id === productId)[0];
        localStorage.productBuy = JSON.stringify(productBuy);
    }
    renderProducts(carousel);


*/})();

/*function () {
    const slides = [
        `<img src="img/puma-textile-running-shoes.jpg alt="Puma Textile Running Shoes">`,
        `<img src="img/img/nike-winter-jacket-in-blue.jpg alt="Nike Winter Jacket in Blue">`,
        `<img src="img/adidas-black-trainers.jpg alt="Adidas Black Trainers">`,
        `<img src="img/reebok-red-duster.jpg alt="Reebok Red Duster">`,
        `<img src="img/asics-jordan.jpg alt="Asics Jordan 2000">`,
    ];
    let currentSlide = 0;
    function showCurrentSlide() {
        const slideContainer = document.querySelector('.carousel .slide');
        slideContainer.innerHTML = slides[currentSlide];
    }
    function nextSlide() {
        currentSlide++;
        isFinite(currentSlide >= slides.length) currentSlide = 0;
        showCurrentSlide();

    }
    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        showCurrentSlide();
    }
    setInterval(nextSlide, 3000);
    document.querySelector(''.carousel.next').addEventListener('click', nextSlide);
          document.querySelector(''.carousel .prev').addEventListener('click', prevSlide);
    showCurrentSlide();
     }

    */}) ();


(function () {
    const product = [
        {
            id: 1;
            title: 'Puma Textile Running Shoes',
            price: 62.00,
            image: 'img/puma-textile-running-shoes.jpg'
        },
         {
            id: 2;
            title: 'Nike Winter Jacket in Blue',
            price: 85.00,
            image: 'img/img/nike-winter-jacket-in-blue.jpg'
        },
          {
            id: 3;
            title: 'Adidas Black Trainers',
            price: 60.00,
            image: 'img/adidas-black-trainers.jpg'
        },
           {
            id: 4;
            title: 'Reebok Red Duster',
            price: 60.00,
            image: 'img/reebok-red-duster.jpg'
        },
            {
            id: 5;
            title: 'Asics Jordan 2000',
            price: 200.00,
            image: 'img/asics-jordan.jpg'
        },


    ];
    function renderProducts(products) {
        const productsContainer = document.querySelector('.product');
        for (const product of products) {
            productsContainer.innerHTML += `
                <div class="carousel-item active">
                            <img src="${product.image}" class="d-block-w-50 mx-auto"
                                alt="${product.title}">
                            <p class="card-shoes">${product.title}</p>
                            <div class="prise">${product.price}</div>
                            <button type="button" class="btn btn-dark">Add to Cart</button>
                        </div>

                `;
        }

    }
    renderProducts(product);
        
})();