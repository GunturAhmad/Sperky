$(document).ready(function() {
    var lastScrollTop = 0;

    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            // Scroll ke bawah
            $('header').addClass('fixed-header');
        } else {
            // Scroll ke atas
            $('header').removeClass('fixed-header');
        }
        lastScrollTop = st;
    });
});
