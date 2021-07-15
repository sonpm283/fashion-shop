$(document).ready(function() {
    mainSlide.init()
    menuMobile.init()
    fixedNav.init()
    tabProduct.init()
    feedbackSlide.init()
    partnerSlide.init()
});

// main slide
const navText = ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>" ];
const mainSlide = {
    init : function () {
        this.mainSlide();
    },
    mainSlide: function() {
        $("#main-slide").owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            nav: false,
            autoplay: true,
            autoplayTimeout:5000
        })
    }
}

// feedback slide
const feedbackSlide = {
    init : function () {
        this.feedbackSlide();
    },
    feedbackSlide: function() {
        $("#feedback-slide").owlCarousel({
            items: 1,
            dots: false,
            loop: true,
            nav: true,
            autoplay: true,
            navText:navText,
            autoplayTimeout:5000,
        })
    }
}

const partnerSlide = {
    init : function () {
        this.partnerSlide();
    },
    partnerSlide: function() {
        $("#partner-slide").owlCarousel({
            items: 5,
            dots: false,
            loop: true,
            nav: true,
            autoplay: false,
            navText:navText,
            margin: 15,
            autoplayTimeout:5000,
            responsive:{
                0:{
                    items:3
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
                ,1200:{
                    items:5
                }
            }
        })
    }
}

// menu mobile 
const menuMobile = {
    init: function() {
        this.menuMobile()
    },
    menuMobile: function() {
        const menuBtn = $(".menu-btn .hamberger")
        const menuMobile = $(".menumobile")
        const menuOverlay = $(".menumobile-overlay")

        menuBtn.click(function() {
            menuMobile.addClass("active")
        })

        menuOverlay.click(function() {
            menuMobile.removeClass("active")
        })
    }
}

// fixed nav 
const fixedNav = {
    init: function() {
        this.fixedNav()
    },
    fixedNav: function() {
        $(window).scroll(function() {
            if($(window).scrollTop() > 100) {
                $('.header').addClass('active')
                $('.back-top').addClass('active')
            }else {
                $('.header').removeClass('active')
                $('.back-top').removeClass('active')
            }
          });
    }
}

// tab product
const tabProduct = {
    init: function() {
        this.tabProduct();
    },
    tabProduct: function() {
        var tabs  = $(".tab")
        var panes = $('.pane')
        tabs.click(function (e) {
            tabs.removeClass("active")
            $(this).addClass("active")
            panes.hide();
            var pane = $(this).attr('data-pane');
            $(pane).fadeIn(500);
            e.preventDefault();
        });
        $(".product-tab li:first a").click();
    }
}
