(function() {
    const products = [
        {
            id: 1,
            title: 'Adidas Comression Tee',
            price: '$33.00',
            image: 'img/adidas-compression-tee.jpg',
        },
        {
            id: 2,
            title: 'Reebok Fitness Jacket',
            price: '$52.00',
            image: 'img/reebok-fitness-jacket.jpg',
        },
        {
            id: 3,
            title: 'Quicksilver Tech T-Shirt',
            price: '$21.00',
            image: 'img/quicksilver-tech-tshirt.jpg',
        }

    ];

    function renderProducts(products)   {
        const productsContainer = document.querySelector('.man-collection');
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