(async function() {

    const response = await fetch('mid-season-sale-catalogues.json');
    const cataloguesTexts = await response.json;

    function renderProducts(cataloguesTexts) {
        const cataloguesTextsContainer = document.querySelector('.catalogue-text');
            cataloguesTextsContainer.innerHTML = `
            <div>
                <p class="catalogue-presence">In Stock</p>
                <h3 class="catalogue-header">${cataloguesTexts[0].header}</h3>
                <p class="catalogue-code">Product code ${cataloguesTexts[0].code}</p>
                <p class="catalogue-price">$${cataloguesTexts[0].price}</p>
            </div>
            <div class="catalogue-reference">
                <div class="cart-management">
                    <div class="cart-quantity">
                        <p>1</p>
                    </div>
                    <div class="cart-buttons">
                        <img class="cart-up-button" src="img/mid-season-sale-cart-up.svg" alt="Arrow Up">
                        <img class="cart-down-button" src="img/mid-season-sale-cart-down.svg" alt="Arrow Down">
                    </div>
                </div>
                <a href="#">
                    <p class="catalogue-add-to-cart-button">Add to cart</p>
                </a>
            </div>
            <div>
                <h5 class="description-header">Description</h5>
                <p class="goods-description">${cataloguesTexts[0].description}</p>
            </div>`
        }
    renderProducts(cataloguesTexts);
})();