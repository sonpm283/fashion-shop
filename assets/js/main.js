$(document).ready(function() {
    mainSlide.init()
    menuMobile.init()
    fixedNav.init()
    tabProduct.init()
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

// menu mobile 
const menuMobile = {
    init: function() {
        this.menuMobile()
    },
    menuMobile: function() {
        const menuBtn = $(".menu-btn")
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
        $(window).scroll(function fix_element() {
            $('.nav').css(
              $(window).scrollTop() > 100
                ? { 'position': 'fixed', 'top': '0', 'right': '0', 'left': '0','z-index': '99'}
                : { 'position': 'relative', 'top': 'auto' }
            );
            return fix_element;
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