(function($) {
    "use strict";

    // meanmenu
    // $('#mobile-menu').meanmenu({
    //     meanMenuContainer: '.mobile-menu',
    //     meanScreenWidth: "991"
    // });

    // One Page Nav
    // var top_offset = $('.header-area').height() - 10;
    // $('.main-menu ul').onePageNav({
    //     currentClass: 'active',
    //     scrollOffset: top_offset,
    // });


    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll < 200) {
            $(".header-sticky").removeClass("sticky");
        } else {
            $(".header-sticky").addClass("sticky");
        }
    });



    // scrollToTop
    // $.scrollUp({
    //     scrollName: 'scrollUp', // Element ID
    //     topDistance: '300', // Distance from top before showing element (px)
    //     topSpeed: 300, // Speed back to top (ms)
    //     animation: 'fade', // Fade, slide, none
    //     animationInSpeed: 200, // Animation in speed (ms)
    //     animationOutSpeed: 200, // Animation out speed (ms)
    //     scrollText: '<i class="fa fa-angle-up"></i>', // Text for element
    //     activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    // });

    // WOW active
    // new WOW().init();

    // var mixer = mixitup('.portfolio-content');


})(jQuery);