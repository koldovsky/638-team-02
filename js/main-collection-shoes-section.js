(function() {
    const products = [
        {
            id: 1,
            title: 'Nike Amanda Running Shoes',
            price: '$120.00',
            image: 'img/nike-amanda-running-shoes.jpg',
        },
        {
            id: 2,
            title: 'Puma Basket Shoes',
            price: '$140.00',
            image: 'img/puma-basket-shoes.jpg',
        },
        {
            id: 3,
            title: 'Adidas Campus',
            price: '$130.00',
            image: 'img/adidas-campus-shoes.jpg',
        }

    ];

    function renderProducts(products)   {
        const productsContainer = document.querySelector('.shoes-collection');
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