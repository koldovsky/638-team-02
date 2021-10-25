(function() {

    const midSeasonProducts = [
        {
            id: 1,
            reference: 'catalogue-adidas.html',
            image: 'img/adidas-trainers.jpg',
            alternative: 'adidas-trainers',
            title: 'Adidas Cloudfoam Trainers',
            price: '60.00'
        },
        {
            id: 2,
            reference: 'catalogue-reebok.html',
            image: 'img/reebok-shorts.jpg',
            alternative: 'reebok-shorts',
            title: 'Reebok Workout Shorts',
            price: '25.00'
        },
        {
            id: 3,
            reference: 'catalogue-puma-shoes.html',
            image: 'img/puma-shoes.jpg',
            alternative: 'puma-shoes',
            title: 'Puma Fitness Shoes in Gray',
            price: '60.00'
        },
        {
            id: 4,
            reference: 'catalogue-puma-top.html',
            image: 'img/puma-top.jpg',
            alternative: 'puma-top',
            title: 'Puma Essential Tank Top',
            price: '43.00'
        },
        {
            id: 5,
            reference: 'catalogue-nike-tshirt.html',
            image: 'img/nike-tshirt.jpg',
            alternative: 'nike-tshirt',
            title: 'Nike Classic Polo T-Shirt',
            price: '23.00'
        }
    ];

    function renderProducts(midSeasonProducts) {
        const midSeasonProductsContainer = document.querySelector('.season-sale-cards');
        for(const midSeasonProduct of midSeasonProducts) {
            midSeasonProductsContainer.innerHTML += `
            <div class="sale-card">
                <a href="${midSeasonProduct.reference}">
                    <img class="good-img-index-page" src="${midSeasonProduct.image}" alt="${midSeasonProduct.alternative}">
                    <p class="name-of-good">${midSeasonProduct.title}</p>
                </a>
                <p class="price-of-good">$${midSeasonProduct.price}</p>
                <div class="add-to-cart">
                    <a class="add-to-cart-button" href="#">Add to Cart</a>
                </div>
            </div>
            `;
        }
    }
    renderProducts(midSeasonProducts);

}) ();