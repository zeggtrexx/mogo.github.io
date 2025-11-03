$(function () {

    var header = $("header"),
        introH = $("#intro").innerHeight(),
        scroll0ffest = $(window).scrollTop();;

    checkScroll(scroll0ffest);



    /* header.fixed */
    $(window).on("scroll", function () {
        scroll0ffest = $(this).scrollTop();

        checkScroll(scroll0ffest);
    });


    function checkScroll(scroll0ffest) {

        if (scroll0ffest >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /* SMOoTH SCROLL */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        if ($(window).width() <= 770) {
            $("#nav").removeClass("active");
            $("#nav-toggle").removeClass("active");
        }
        // ===================================

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
});



/*Menu nav toggle  */
$("#nav-toggle").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
});



/* Collapse/Accordion Logic */
$("[data-collapse]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this);
    $this.toggleClass("active");
    $this.siblings('.accordion-item.active').removeClass('active');
});



$(document).ready(function(){
    $("[data-slider]").each(function() {
        
        let $currentSlider = $(this);
        let $sliderContainer = $currentSlider.parent(); 
        let $prevArrow = $sliderContainer.find('.reviews--prev');
        let $nextArrow = $sliderContainer.find('.reviews--next');

        $currentSlider.slick({
            infinite: true,
            fade: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: $prevArrow, 
            nextArrow: $nextArrow
        });
    });
});