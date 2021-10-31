(function () {

    const product = JSON.parse(localStorage.product);
    const productContainer = document.querySelector('.catalogue-text');
    productContainer.innerHTML = `
        <div>
            <p class="catalogue-presence">In Stock</p>
            <h3 class="catalogue-header">${product.header}</h3>
            <p class="catalogue-code">Product code ${product.code}</p>
            <p class="catalogue-price">$${product.price}</p>
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
        <h5 class="description-header">Description</h5>
        <div class="m-s-s-cat-divider">
            <div class="divider-blue"></div>
        </div>
        <div>
            <p class="goods-description">${product.description}</p>
        </div>
    `
})();