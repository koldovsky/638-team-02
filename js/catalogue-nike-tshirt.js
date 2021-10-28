(async function() {

    const response = await fetch('mid-season-sale-products.json');
    const midSeasonProductsTexts = await response.json;

    function renderProducts(midSeasonProductsTexts) {
        const midSeasonProductsTextsContainer = document.querySelector('.catalogue-text');
            midSeasonProductsTextsContainer.innerHTML = `
            <div>
            <p class="catalogue-presence">In Stock</p>
            <h3 class="catalogue-header">${midSeasonProductsTexts[0].title}</h3>
            <p class="catalogue-code">Product code 25</p>
            <p class="catalogue-price">$60,00</p>
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
            <a class="catalogue-add-to-cart-button" href="#">
                <p>Add to cart</p>
            </a>
        </div>
        <div>
            <h5 class="description-header">Description</h5>
            <p class="goods-description">These color block trainers provide breathability, stability, and durability due to
                Adidas high-tech mesh. Lightweight EVA foam cushioning makes every your step easier.</p>
        </div>
    </div>
</div>
`
        }

renderProducts(midSeasonProductsTexts);
})();