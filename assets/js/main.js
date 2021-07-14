$(document).ready(function() {
    mainSlide.init()
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