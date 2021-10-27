(async function() {
    const response = await fetch('mid-season-sale-products.json');
    const midSeasonProducts = await response.json();

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