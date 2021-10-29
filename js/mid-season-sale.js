(async function() {

    
    const response = await fetch('mid-season-sale-products.json');
    const midSeasonProducts = await response.json();

    function renderProducts(midSeasonProducts) {
        const midSeasonProductsContainer = document.querySelector('.season-sale-cards');
        for(const midSeasonProduct of midSeasonProducts) {
            midSeasonProductsContainer.innerHTML += `
            <div class="sale-card">
                <a class="product-info-button" data-id="${midSeasonProduct.id}"href="${midSeasonProduct.reference}">
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

        document.querySelectorAll('.product-info-button').forEach(infoButton => infoButton.addEventListener('click', productInfoClick));
    }
    function productInfoClick(ev) {
        const productInfoButton = ev.target;
        const productId = productInfoButton.dataset.id;
        const product = midSeasonProducts.filter(midSeasonProduct => midSeasonProducts.id === productId)[0];
        localStorage.product = JSON.stringify(product);
    }
    renderProducts(midSeasonProducts);

}) ();