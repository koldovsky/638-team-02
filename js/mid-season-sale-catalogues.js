(function() {

    const cataloguesTexts = [
        {
            id: 1,
            header: 'ADIDAS CLOUDFOAM TRAINERS',
            code: '25',
            price: '60.00',
            description: 'These color block trainers provide breathability, stability, and durability due to Adidas high-tech mesh. Lightweight EVA foam cushioning makes every your step easier.'
        },
        {
            id: 2,
            header: 'NIKE CLASSIC POLO T-SHIRT',
            code: '35',
            price: '23.00',
            description: 'This polo T-shirt is for those who love sports casual style and wear polo shirts in everyday life. The slightly fitted silhouette will highlight your workout progress.'

        },
        {
            id: 3,
            header: 'PUMA FITNESS SHOES IN GREY',
            code: '24',
            price: '60.00',
            description: 'These ultra-lightweight mesh sneakers are great for your fitness workout or regular active lifestyle. The EVA midsole is so comfortable you may want to wear these shoes long after your run has ended.'

        },
        {
            id: 4,
            header: 'PUMA ESSENTIAL TANK TOP',
            code: '39',
            price: '43.00',
            description: 'Run in style and confidence in this Puma tank top. High-tech fabric wicks away sweat to keep you in comfort. Classic black color suits everyone.'

        }
        {
            id: 5,
            header: 'REEBOK WORKOUT SHORTS',
            code: '34',
            price: '25.00',
            description: 'These blue shorts are ready for your muscle-burning gym sessions. The lightweight fabric wicks sweat to keep you dry and in comfort.'

        },
    ];

    function renderProducts(midSeasonProducts) {
        const midSeasonProductsContainer = document.querySelector('.catalogue-text');
        for(const midSeasonProduct of midSeasonProducts) {
            midSeasonProductsContainer.innerHTML += `
            <div>
                <p class="catalogue-presence">In Stock</p>
                <h3 class="catalogue-header">${cataloguesText.header}</h3>
                <p class="catalogue-code">Product code ${cataloguesText.code}</p>
                <p class="catalogue-price">$${cataloguesText.price}</p>
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
                <p class="goods-description">${cataloguesText.description}</p>
            </div>`
}) ();