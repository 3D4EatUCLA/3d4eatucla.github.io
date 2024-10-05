(function($) {
    $(document).ready(function(){
        // For main icon
        var shopIcon = document.getElementById("shop-main-icon");

        var tlMain = new TimelineMax({paused: true});
        tlMain.to(shopIcon, 0.25, {transformOrigin:"50% 50%", scale: 1.1});

        shopIcon.onmouseenter = function() {
            tlMain.play();
        }

        shopIcon.onmouseleave = function() {
            tlMain.reverse();
        }

        // For shopping cart menu
        var cart = document.getElementById("shop3d4e-cart");
        var inquiry = document.getElementById("shop3d4e-info");

        var tlCart = new TimelineMax({paused: true});
        tlCart.to(cart, 0.25, {transformOrigin:"50% 50%", scale: 1.1});

        cart.onmouseenter = function() {
            tlCart.play();
        }

        cart.onmouseleave = function() {
            tlCart.reverse();
        }

        var tlInfo = new TimelineMax({paused: true});
        tlInfo.to(inquiry, 0.25, {transformOrigin:"50% 50%", scale: 1.1});

        inquiry.onmouseenter = function() {
            tlInfo.play();
        }

        inquiry.onmouseleave = function() {
            tlInfo.reverse();
        }

    })
}) (jQuery);