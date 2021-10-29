(function () {

    const product = JSON.parse(localStorage.product);
    const productContainer = document.querySelector('body');
    productContainer.innerHTML = `
    <div class="store-homepage container">
    <a href="#">
        <p class="store-homepage">Store homepage</p>
    </a>
</div>
<div class="catalogue-content container">
    <div class="catalogue-images">
        <div class="carousel">
            <div class="prev"><img src="img/button-prev.png" alt="Left Button"></div>
            <div class="main-image"></div>
            <div class="next"><img src="img/button-next.png" alt="Right Button"></div>
        </div>
        <div class="reserve-image">
            <img src="img/adidas-trainers-small.jpg" alt="adidas-trainers">
        </div>
    </div>
    <div class="catalogue-text">
        <div>
            <p class="catalogue-presence">In Stock</p>
            <h3 class="catalogue-header">ADIDAS CLOUDFOAM TRAINERS</h3>
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
<footer class="footer">
    <div class="footer-slogan">
        <img class="footer-logo" src="img/logo-nike.svg" alt="Main logo">
        <p class="footer-slogan-text">Workout offers fitness clothing and footwear for
            those who want to change their lives and bodies for better.
        </p>
    </div>
    <div class="footer-navigation">
        <h3 class="footer-subtitle">Navigation</h3>
        <div class="footer-navigation-menu">
            <a href="#" class="text-navigation-menu">About us.</a>
            <a href="#" class="text-navigation-menu">Collection.</a>
            <a href="#" class="text-navigation-menu">Blog.</a>
            <a href="#" class="text-navigation-menu">Contacts.</a>
        </div>
    </div>
    <div class="footer-shop">
        <h3 class="footer-subtitle">Shop</h3>
        <div class="footer-navigation-menu">
            <a href="#" class="text-navigation-menu">Women.</a>
            <a href="#" class="text-navigation-menu">Men.</a>
            <a href="#" class="text-navigation-menu">Shoes.</a>
            <a href="#" class="text-navigation-menu">Sale.</a>
        </div>
    </div>
    <div class="footer-social">
        <h3 class="footer-subtitle">Follow us</h3>
        <div class="footer-social-icons">
            <a href="https://www.facebook.com/"> <img class="social-icons" src="img/facebook-icon-red.svg"
                    alt="Facebook Logo">
            </a>
            <a href="https://www.instagram.com/"> <img class="social-icons" src="img/instagram-icon-red.svg"
                    alt="Instagram Logo">
            </a>
            <a href="https://www.youtube.com"> <img class="social-icons" src="img/youtube-icon-red.svg"
                    alt="Youtube Logo">
            </a>
        </div>
    </div>
</footer>
<script src="js/mid-season-sale-carousel.js"></script>
    `
})();