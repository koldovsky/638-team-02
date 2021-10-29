(function() {
    const products = [
        {
            id: 1,
            title: 'Puma Sports Bra',
            price: '$12.00',
            image: 'img/puma-sports-bra.jpg',
        },
        {
            id: 2,
            title: 'Reebok Long Sleeve Top',
            price: '$18.00',
            image: 'img/reebok-long-sleeve-top.jpg',
        },
        {
            id: 3,
            title: 'Quicksilver Workout Top',
            price: '$12.00',
            image: 'img/quicksilver-workout-top.jpg',
        }

    ];

    function renderProducts(products)   {
        const productsContainer = document.querySelector('.w-collection');
        for (const product of products){
            productsContainer.innerHTML +=`
            <div class="mc-product">
                                <p><a href="#"><img src="${product.image}" alt="${product.title}"></a></p>
                                <p class="name-of-good"><a href="#">${product.title}</a></p>
                                <div class="price-of-good">
                                    <p>${product.price}</p>
                                </div>
                                <div class="product-button">
                                    <a class="mc-button" href="#">Add to Cart</a>
                                </div>
                            </div>            
                            `
        }
    }
    renderProducts(products);

})();